import React from 'react';
import { Layout, type MenuProps, Dropdown, Avatar, Space, Badge, Button } from 'antd';
import { 
  UserOutlined, 
  BellOutlined, 
  LogoutOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header } = Layout;

interface AppHeaderProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ collapsed, onCollapse }) => {
  const userMenuItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: '2',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      icon: <LogoutOutlined />,
      danger: true,
      label: '退出登录',
    },
  ];

  return (
    <Header
      className="flex items-center justify-between px-6
       bg-white/80 backdrop-blur-sm border-b
        border-gray-100 shadow-sm sticky top-0 z-10
        "
      style={{
        height: 64,
        padding: '0 24px',
        background: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <div className="flex items-center gap-4">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onCollapse}
          className="text-lg w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
        />
        {/* 面包屑或页面标题区域 */}
        <h1 className="text-xl font-semibold text-gray-800 m-0">
          DocuMind AI
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <Space size="middle">
          <Badge count={3} offset={[2, 0]} size="small">
            <BellOutlined className="text-xl text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
          </Badge>
          <QuestionCircleOutlined className="text-xl text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
        </Space>
        
        <div className="h-6 w-[1px] bg-gray-200 mx-2" />

        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 py-1 px-2 rounded-lg transition-colors">
            <Avatar 
              size="default" 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              className="border border-gray-200"
            />
            <div className="flex flex-col text-sm leading-tight hidden md:flex">
              <span className="font-medium text-gray-700">Admin User</span>
              <span className="text-xs text-gray-400">系统管理员</span>
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
