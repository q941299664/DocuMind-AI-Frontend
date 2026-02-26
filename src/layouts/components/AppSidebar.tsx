import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeOutlined, 
  FileTextOutlined, 
  DatabaseOutlined, 
  SettingOutlined,
  RocketOutlined 
} from '@ant-design/icons';

const { Sider } = Layout;

interface AppSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ collapsed, onCollapse }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/documents',
      icon: <FileTextOutlined />,
      label: '文档管理',
    },
    {
      key: '/chat',
      icon: <RocketOutlined />,
      label: 'AI 对话',
    },
    {
      key: '/knowledge',
      icon: <DatabaseOutlined />,
      label: '知识库',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={260}
      theme="light"
      style={{
        background: colorBgContainer,
        borderRight: '1px solid rgba(5, 5, 5, 0.06)',
      }}
      className="shadow-sm z-10"
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-100/50 px-4">
        <div className="flex items-center gap-3 text-blue-600 w-full overflow-hidden whitespace-nowrap">
          <div className="bg-blue-50 p-2 rounded-lg shrink-0">
            <RocketOutlined className="text-xl" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-opacity duration-300">
              DocuMind AI
            </span>
          )}
        </div>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        className="border-none mt-4 px-2"
        style={{ background: 'transparent' }}
      />
    </Sider>
  );
};

export default AppSidebar;
