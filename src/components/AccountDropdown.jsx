import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useUserInfo, useUserActions } from "../store/userStore";
import { useThemeToken } from "../theme/use-theme-token";
import DropdownComponent from "./Dropdown";

/**
 * Account Dropdown
 */
export default function AccountDropdown() {
  const { avatar } = useUserInfo();
  const { clearUserInfoAndToken } = useUserActions();

  const logout = () => {
    try {
      clearUserInfoAndToken();
    } catch (error) {
      console.log(error);
    }
  };

  const items = [
    {
      label: <NavLink to="/">Home</NavLink>,
      key: "0",
    },
    {
      label: <NavLink to="/management/user/profile">Profile</NavLink>,
      key: "1",
    },
    {
      label: <NavLink to="/management/user/account">Account</NavLink>,
      key: "2",
    },
    { type: "divider", key: "divider" },
    {
      label: (
        <button className="font-bold text-warning" onClick={logout}>
          Logout
        </button>
      ),
      key: "3",
    },
  ];

  return (
    <DropdownComponent
      items={items}
      button
      buttonText={"user"}
      arrow
    ></DropdownComponent>
  );
}
