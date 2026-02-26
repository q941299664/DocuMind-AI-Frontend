import React, { useState } from 'react';
import { Bubble, Sender } from '@ant-design/x';
import { 
  RocketOutlined, 
  CloudUploadOutlined, 
  SearchOutlined,
  UserOutlined 
} from '@ant-design/icons';
import { type GetProp } from 'antd';

// 定义 Bubble.List 的 items 类型
type BubbleListProps = GetProp<typeof Bubble.List, 'items'>;

const Home: React.FC = () => {
  const [value, setValue] = useState('');

  const [messages, setMessages] = useState([
    {
      content: '你好！我是 DocuMind AI 助手。我可以帮你处理文档、回答问题或检索知识库。请问有什么可以帮你的吗？',
      role: 'assistant',
    },
  ]);

  const handleSend = () => {
    if (!value) return;
    setMessages([...messages, { content: value, role: 'user' }]);
    setValue('');
    // 模拟 AI 回复
    setTimeout(() => {
      setMessages(prev => [...prev, { content: '收到！正在为您处理...', role: 'assistant' }]);
    }, 1000);
  };

  const features = [
    {
      icon: <CloudUploadOutlined className="text-4xl text-blue-500" />,
      title: '智能文档解析',
      desc: '支持 PDF 高精度解析，自动提取文本、表格与图像信息。'
    },
    {
      icon: <SearchOutlined className="text-4xl text-green-500" />,
      title: '语义检索增强',
      desc: '基于 RAG 技术，精准定位文档中的关键信息，拒绝幻觉。'
    },
    {
      icon: <RocketOutlined className="text-4xl text-purple-500" />,
      title: 'AI 问答助手',
      desc: '集成大语言模型，提供流式对话体验与思维链展示。'
    }
  ];

  const bubbleItems: BubbleListProps = messages.map((msg, index) => ({
    key: index,
    role:msg.role,
    placement: msg.role === 'user' ? 'end' : 'start',
    content: msg.content,
  }));

  return (
    <div className="h-60pxflex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
          企业级 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">智能文档处理</span> 中台
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
          释放文档价值，重塑知识边界。DocuMind AI 助您轻松构建企业专属知识大脑。
        </p>
        
        {/* Chat Demo Area */}
        <div className="max-w-2xl mx-auto h-[500px] border border-gray-200/60 rounded-2xl overflow-hidden flex flex-col shadow-xl bg-white ring-1 ring-gray-900/5 backdrop-blur-3xl">
          <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            <Bubble.List items={bubbleItems} />
          </div>
          <div className="p-4 bg-white/80 backdrop-blur border-t border-gray-100">
            <Sender 
              value={value} 
              onChange={setValue} 
              onSubmit={handleSend}
              placeholder="试着问我：如何上传 PDF 文档？"
              className="shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="relative group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gray-50 group-hover:bg-white transition-colors shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
