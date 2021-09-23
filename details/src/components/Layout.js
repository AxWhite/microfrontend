import React, { useState } from 'react';
import { Layout } from 'antd';
import NavigationMenu from './NavigationMenu';
import GlobalBreadcrumb from './Breadcrumb';
const { Header, Content, Footer, Sider } = Layout;

const AppLayout = ({title, children}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <NavigationMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <GlobalBreadcrumb title={title} />
          { children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default AppLayout;