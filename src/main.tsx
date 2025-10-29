import { createEngineApp } from '@ldesign/engine-solid'
import App from './App'

/**
 * 应用入口文件
 * 使用 @ldesign/engine-solid 创建并启动应用
 */
createEngineApp({
  rootComponent: App,
  mountElement: '#app',
  config: {
    name: 'LDesign Solid App',
    version: '0.1.0',
    debug: import.meta.env.DEV,
  },
}).then((engine) => {
  console.log('✅ Solid Engine 已初始化:', engine)
}).catch((error) => {
  console.error('❌ 引擎初始化失败:', error)
})

