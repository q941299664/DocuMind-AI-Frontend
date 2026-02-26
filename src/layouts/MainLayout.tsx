import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import AppSidebar from './components/AppSidebar';
import AppHeader from './components/AppHeader';

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <AppSidebar collapsed={collapsed} onCollapse={setCollapsed} />
      
      <Layout>
        <AppHeader collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
        
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
            }}
          >
            <Outlet />
          </div>
        </Content>
        
        <Layout.Footer style={{ textAlign: 'center', color: '#9ca3af' }}>
          DocuMind AI ©{new Date().getFullYear()} Created by SOLO Coder
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
