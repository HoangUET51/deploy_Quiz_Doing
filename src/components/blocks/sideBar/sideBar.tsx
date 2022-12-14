import { DiReact } from "react-icons/di";
import { FaGem, FaGithub, FaTachometerAlt } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useNavigate } from "react-router-dom";
import sidebarBg from "../../../asset/img/bg2.jpg";

const SideBar = ({ collapsed, toggled, handleToggleSidebar }: any) => {
  const navigate = useNavigate();

  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer"
        >
          <DiReact size={"3em"} color={"00bfff"} className="inline-block" />
          Doing Quiz
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">new</span>}
          >
            dashboard
            <Link to="/admin" />
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu icon={<FaGem />} title="Features">
            <MenuItem>
              Quản lý Users
              <Link to="/admin/manager-users" />
            </MenuItem>
            <MenuItem>
              Quản lý Bài Quiz
              <Link to="/admin/manager-quiz" />
            </MenuItem>

            <MenuItem>
              Quản lý Câu Hỏi
              <Link to="/admin/manager-questions" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline-block mr-1" />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              viewSource
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
