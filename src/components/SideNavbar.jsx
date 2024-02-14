import { useNavigate } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineLaptop,
  AiOutlineNotification,
} from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import { FaPeopleArrows } from "react-icons/fa6";
import reactLogo from "../assets/react.svg";
import { Layout, Menu, Grid } from "antd";
import { useSettings } from "../store/settingStore";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const sidebarMenuItems = [
  {
    key: "1",
    icon: <AiOutlineDashboard />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "2",
    icon: <FaPeopleArrows />,
    label: "Clients",
    path: "/contact-us",
  },
  {
    key: "sub1",
    icon: <FcBusinessman />,
    label: "Category",
    children: [
      { key: "sub1_option1", label: "option1", path: "/about" },
      { key: "sub1_option2", label: "option2", path: "/about/list" },
      { key: "sub1_option3", label: "option3", path: "/about/list/update" },
      { key: "sub1_option4", label: "option4", path: "/about/list/create" },
    ],
  },
  {
    key: "sub2",
    icon: <AiOutlineLaptop />,
    label: "subnav 2",
    children: [
      { key: "sub2_option1", label: "option1", path: "/option5" },
      { key: "sub2_option2", label: "option2", path: "/option6" },
      { key: "sub2_option3", label: "option3", path: "/option7" },
      { key: "sub2_option4", label: "option4", path: "/option8" },
    ],
  },
  {
    key: "sub3",
    icon: <AiOutlineNotification />,
    label: "subnav 3",
    children: [
      { key: "sub3_option1", label: "option1", path: "/option9" },
      { key: "sub3_option2", label: "option2", path: "/option10" },
      { key: "sub3_option3", label: "option3", path: "/option11" },
      { key: "sub3_option4", label: "option4", path: "/option12" },
    ],
  },
];

const SideBarComponent = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const screens = useBreakpoint();

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const settings = useSettings();
  const { themeMode } = settings;
  // const { setSettings } = useSettingActions();

  return (
    <>
      {screens.xs ? (
        <>
          {/* <Navbar collapsed={collapsed} toggleCollapse={toggleCollapse} /> */}
          <Sider
            theme={themeMode}
            className="custom-sider"
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}
            breakpoint="lg"
            onBreakpoint={(broken) => setCollapsed(broken)}
          >
            <div className="brand-container">
              <img className="brand-logo" src={reactLogo} alt="Brand Logo" />
              {!collapsed && <span className="brand-title">Tar Parking</span>}
            </div>
            <Menu theme={themeMode} mode="inline" defaultSelectedKeys={["1"]}>
              {sidebarMenuItems.map((item) =>
                item.children ? (
                  <Menu.SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.label}
                  >
                    {item.children.map((child) => (
                      <Menu.Item
                        key={child.key}
                        onClick={() => handleMenuItemClick(child.path)}
                      >
                        {child.label}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={() => handleMenuItemClick(item.path)}
                  >
                    {item.label}
                  </Menu.Item>
                )
              )}
            </Menu>
          </Sider>
        </>
      ) : (
        <>
          <Sider
            className="custom-sider"
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme={themeMode}
          >
            <div className="brand-container">
              <img className="brand-logo" src={reactLogo} alt="Brand Logo" />
              {!collapsed && <span className="brand-title">Tar Parking</span>}
            </div>
            <Menu theme={themeMode} mode="inline" defaultSelectedKeys={["1"]}>
              {sidebarMenuItems.map((item) =>
                item.children ? (
                  <Menu.SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.label}
                  >
                    {item.children.map((child) => (
                      <Menu.Item
                        key={child.key}
                        onClick={() => handleMenuItemClick(child.path)}
                      >
                        {child.label}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={() => handleMenuItemClick(item.path)}
                  >
                    {item.label}
                  </Menu.Item>
                )
              )}
            </Menu>
          </Sider>
        </>
      )}
    </>
  );
};

export default SideBarComponent;
