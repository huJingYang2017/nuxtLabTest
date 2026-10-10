export interface LabLink {
  to: string
  title: string
  group: string
}

export const labNav: LabLink[] = [
  { to: '/', title: '总览', group: '开始' },
  { to: '/routing', title: '文件路由', group: '路由' },
  { to: '/posts/1', title: '动态参数', group: '路由' },
  { to: '/nested', title: '嵌套路由', group: '路由' },
  { to: '/plain', title: '布局', group: '路由' },
  { to: '/data', title: '数据获取', group: '数据' },
  { to: '/server', title: '服务端接口', group: '数据' },
  { to: '/proxy', title: '本地代理', group: '数据' },
  { to: '/config', title: '配置', group: '数据' },
  { to: '/render', title: '服务端渲染', group: '渲染' },
  { to: '/client', title: '仅客户端', group: '渲染' },
  { to: '/seo', title: '页面头部', group: '渲染' },
  { to: '/shared', title: 'useState', group: '状态' },
  { to: '/pinia', title: 'Pinia', group: '状态' },
  { to: '/guard', title: '路由中间件', group: '应用' },
  { to: '/plugins', title: '插件', group: '应用' },
  { to: '/boom', title: '错误页', group: '应用' },
]
