import { useState } from "react";
import { Layout } from "antd";
import SidebarComponent from "../SideNavbar";
import Navbar from "../Navbar";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Navbar
          collapsed={collapsed}
          toggleCollapse={() => setCollapsed(!collapsed)}
        />
        <Content className="main-content-area">{children}</Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
