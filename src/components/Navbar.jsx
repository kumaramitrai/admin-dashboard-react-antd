import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineDown,
} from "react-icons/ai";
import { AliwangwangOutlined } from "@ant-design/icons";
import { Layout, Button, Avatar, Space, Flex } from "antd";
import BreadcrumbComponent from "./Breadcrumb";
import DropdownComponent from "./Dropdown";
import SettingButton from "./SettingButton";

const { Header } = Layout;

const Navbar = ({ collapsed, toggleCollapse }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  
  // Function to generate breadcrumb items based on the current location
  const generateBreadcrumbs = () => {
    const segments = location.pathname.split("/").filter(Boolean);
    const newBreadcrumbItems = segments.map((segment, index) => ({
      title: (
        <Link to={"/" + segments.slice(0, index + 1).join("/")}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Link>
      ),
    }));
    if (
      newBreadcrumbItems.length === 0 &&
      (location.pathname === "/" || location.pathname === "")
    ) {
      newBreadcrumbItems.push({
        title: (
          <Link to="/">
            <AiOutlineHome />
          </Link>
        ),
      });
    }

    setBreadcrumbItems(newBreadcrumbItems);
  };

  // Call generateBreadcrumbs whenever the location changes
  useEffect(generateBreadcrumbs, [location]);

   /* useEffect(() => {
    const pathname = location.pathname;
    const segments = pathname.split("/").filter(Boolean);
    const newBreadcrumbItems = segments.map((segment, index) => ({
      title: (
        <Link to={"/" + segments.slice(0, index + 1).join("/")}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Link>
      ),
    }));
    // If no breadcrumb items are generated and the pathname is the root path ("/") or empty,
    // include the Home icon as the only breadcrumb item
    if (
      newBreadcrumbItems.length === 0 &&
      (pathname === "/" || pathname === "")
    ) {
      newBreadcrumbItems.push({
        title: (
          <Link to="/">
            <AiOutlineHome />
          </Link>
        ),
      });
    }
    setBreadcrumbItems(newBreadcrumbItems);
  }, [location]); */

 

  const dropdownIems = [
    {
      label: (
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          <Space>
            <AiOutlineLogin />
            Logout
          </Space>
        </span>
      ),
      key: "0",
      onClick: handleLogout,
    },
    {
      type: "divider",
    },
    {
      label: (
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          <Space>
            <AliwangwangOutlined />
            Profile
          </Space>
        </span>
      ),
      key: "1",
      onClick: handleLogout,
    },
  ];
  function handleLogout() {
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You may need to include any authentication token here
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        console.log("cliked");
        if (response.ok) {
          navigate("/login");
        } else {
          console.error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Error occurred during logout:", error);
      });
  }

  return (
    <Header
      style={{
        padding: "0 16px",
        background: "#ADD8E6",
        display: "flex",
        justifyContent: "space-between", // Aligns items in the main axis
        alignItems: "center", // Aligns items in the cross axis
      }}
    >
      <Flex align="center">
        <Button
          type="text"
          icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
          onClick={toggleCollapse}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <BreadcrumbComponent className="breadcrumb" items={breadcrumbItems} />
      </Flex>
      <Flex align="center">
        <SettingButton className="settings-button" />
        <Avatar
          className="header-avatar"
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 40,
            xl: 40,
            xxl: 40,
          }}
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=3"
        />
        <DropdownComponent
          items={dropdownIems}
          trigger
          arrow
          icon={<AiOutlineDown />}
        />
        {/* <DropdownComponent items={dropdownIems} trigger button buttonText={'clickhere'} /> */}
      </Flex>
    </Header>
  );
};

export default Navbar;
