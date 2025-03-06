// import React, { useState } from "react";
// import {
// MenuFoldOutlined,
// MenuUnfoldOutlined,
// UploadOutlined,
// UserOutlined,
// VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Button, Layout, Menu, theme } from "antd";

// const { Header, Sider, Content } = Layout;

// const App: React.FC = () => {
// const [collapsed, setCollapsed] = useState(false);
// const {
//     token: { colorBgContainer, borderRadiusLG },
// } = theme.useToken();

// return (
//     <Layout style={{ minHeight: "100vh" }}>
//     <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//         items={[
//             {
//             key: "1",
//             icon: <UserOutlined />,
//             label: "nav 1",
//             },
//             {
//             key: "2",
//             icon: <VideoCameraOutlined />,
//             label: "nav 2",
//             },
//             {
//             key: "3",
//             icon: <UploadOutlined />,
//             label: "nav 3",
//             },
//         ]}
//         />
//     </Sider>
//     <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }}>
//         <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//             fontSize: "16px",
//             width: 64,
//             height: 64,
//             }}
//         />
//         </Header>
//         <Content
//         style={{
//             margin: "24px 16px",
//             padding: 24,
//             flex: 1,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//         }}
//         >
//         Content
//         </Content>
//     </Layout>
//     </Layout>
// );
// };

// // export default App;
// import React, { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Button, Layout, Menu, theme } from "antd";

// const { Header, Sider, Content } = Layout;

// const App: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [selectedKey, setSelectedKey] = useState("1");

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           selectedKeys={[selectedKey]}
//           onClick={(e) => setSelectedKey(e.key)}
//           items={[
//             { key: "1", icon: <UserOutlined />, label: "User Dashboard" },
//             {
//               key: "2",
//               icon: <VideoCameraOutlined />,
//               label: "Video Management",
//             },
//             { key: "3", icon: <UploadOutlined />, label: "File Uploads" },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           className="flex items-center justify-between"
//           style={{ padding: 0, background: colorBgContainer }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{ fontSize: "16px", width: 64, height: 64 }}
//           />
//           {selectedKey === "2" && (
//             <Button type="primary" className="mr-[20px]">
//               ADD NEW MOVIE
//             </Button>
//           )}
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           {selectedKey === "1" && <h2>👤 User Dashboard</h2>}
//           {selectedKey === "2" && <h2>🎥 Video Management</h2>}
//           {selectedKey === "3" && <h2>📤 File Uploads</h2>}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import AddMovieModal from "./components/addModal";
import MovieTable from "./components/cards";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values: any) => {
    console.log("New Movie Added:", values);
    handleCloseModal();
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
          items={[
            { key: "1", icon: <UserOutlined />, label: "User Dashboard" },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Video Management",
            },
            { key: "3", icon: <UploadOutlined />, label: "File Uploads" },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex items-center justify-between"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          {selectedKey === "2" && (
            <Button
              type="primary"
              className="mr-[20px]"
              onClick={handleOpenModal}
            >
              ADD NEW MOVIE
            </Button>
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {selectedKey === "1" && <h2>👤 User Dashboard</h2>}
          {selectedKey === "2" && (
            <h2>
              🎥 <MovieTable />
            </h2>
          )}
          {selectedKey === "3" && <h2>📤 File Uploads</h2>}
        </Content>
      </Layout>

      <AddMovieModal
        visible={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default App;
