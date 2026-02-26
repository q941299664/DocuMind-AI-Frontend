# DocuMind AI - Frontend

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-green.svg)](https://vitejs.dev/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.x-blue.svg)](https://ant.design/)

**DocuMind AI** 前端应用，基于 **React 18** 和 **Vite** 构建，采用现代化组件库 **Ant Design** 和原子 CSS 框架 **Tailwind CSS**，提供流畅、美观的用户体验。

## 🚀 项目愿景

打造开箱即用、高性能、可扩展的智能文档处理平台，解决企业在文档管理、知识检索、智能问答等场景下的核心痛点。

## 📂 仓库结构

本项目采用多仓库管理模式，核心仓库如下：

| 仓库名称 | 说明 | 技术栈 |
| :--- | :--- | :--- |
| **[DocuMind-AI-Main](./)** | 主仓库 | 项目文档、部署脚本、公共资源 |
| **[DocuMind-AI-Backend](../DocuMind-AI-Backend)** | 后端服务 | Java 21, Spring Cloud Alibaba, Nacos, MySQL, Redis |
| **[DocuMind-AI-Frontend](../DocuMind-AI-Frontend)** | 前端应用 | React 18, TypeScript, Vite, Ant Design, Tailwind CSS |
| **[DocuMind-AI-Python](../DocuMind-AI-Python)** | AI 核心服务 | Python 3.10+, PyTorch, LangChain, OCR, LLM |

## 🏗️ 技术栈

- **框架**: React 18, TypeScript 5.x
- **构建工具**: Vite 6.0+
- **UI 组件库**: Ant Design 5.x, Ant Design X (AI 交互组件)
- **样式**: Tailwind CSS 3.x, PostCSS
- **状态管理**: Zustand
- **路由**: React Router 6.x
- **HTTP 客户端**: Axios
- **工具**: Dayjs, Classnames, Lodash
- **图标**: Ant Design Icons

## 📂 项目结构

```text
DocuMind-AI-Frontend
├── public             # 静态资源 (favicon, robots.txt)
├── src                # 源码目录
│   ├── api            # API 接口请求封装
│   ├── assets         # 图片、字体等静态资源
│   ├── components     # 全局通用组件
│   ├── config         # 配置文件 (环境变量、常量)
│   ├── hooks          # 自定义 React Hooks
│   ├── layouts        # 页面布局组件 (MainLayout, AuthLayout)
│   ├── pages          # 页面组件 (Home, Login, Documents)
│   ├── router         # 路由配置
│   ├── store          # Zustand 全局状态管理
│   ├── types          # TypeScript 类型定义
│   └── utils          # 工具函数
├── .env               # 环境变量配置
├── tailwind.config.js # Tailwind CSS 配置
├── vite.config.ts     # Vite 构建配置
└── tsconfig.json      # TypeScript 配置
```

## 🚀 快速启动

### 1. 环境准备

- Node.js 18+
- pnpm (推荐) 或 npm/yarn

### 2. 安装依赖

```bash
pnpm install
```

### 3. 开发模式启动

```bash
pnpm run dev
```
访问地址: `http://localhost:5173`

### 4. 生产环境构建

```bash
pnpm run build
```
构建产物将输出至 `dist` 目录。

### 5. 代码检查与格式化

```bash
pnpm run lint
```

## 🎨 样式规范

- 优先使用 Tailwind CSS 工具类。
- 对于复杂样式或无法通过 Tailwind 实现的，使用 CSS Modules 或 styled-components。
- 遵循 Ant Design 主题配置规范，在 `ConfigProvider` 中统一配置全局样式。

## 🤝 贡献指南

请确保代码通过 ESLint 和 Prettier 检查后再提交。
