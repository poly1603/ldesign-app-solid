# @ldesign/app-solid

基于 Solid.js 和 @ldesign/engine 构建的示例应用。

## 🚀 特性

- ⚡ **Solid.js** - 高性能响应式框架
- 🔧 **@ldesign/engine-solid** - 强大的应用引擎
- 🛠️ **@ldesign/launcher** - 统一的启动工具
- 📦 **TypeScript** - 类型安全
- 🎨 **主题变量** - 支持 CSS 变量主题系统

## 📦 安装依赖

```bash
# 在项目根目录
pnpm install
```

## 🏃 运行应用

```bash
# 开发模式
pnpm --filter @ldesign/app-solid dev

# 构建生产版本
pnpm --filter @ldesign/app-solid build

# 预览构建结果
pnpm --filter @ldesign/app-solid preview
```

## 📁 项目结构

```
app-solid/
├── src/
│   ├── components/         # 组件目录
│   │   ├── Counter.tsx     # 计数器组件
│   │   ├── Counter.css
│   │   ├── EventDemo.tsx   # 事件演示组件
│   │   └── EventDemo.css
│   ├── App.tsx            # 根组件
│   ├── App.css            # 根组件样式
│   ├── main.tsx           # 应用入口
│   └── vite-env.d.ts      # 类型声明
├── launcher.config.ts     # Launcher 配置
├── tsconfig.json          # TypeScript 配置
├── package.json
└── index.html
```

## 🎯 功能演示

### 1. 状态管理

使用 `useEngineState` 进行状态管理：

```typescript
import { useEngineState } from '@ldesign/engine-solid'

const [count, setCount] = useEngineState<number>('counter', 0)
```

### 2. 事件系统

使用事件发布订阅：

```typescript
import { useEventEmitter, useEventListener } from '@ldesign/engine-solid'

const emitter = useEventEmitter()
const cleanup = useEventListener('message', (data) => {
  console.log('收到消息:', data)
})
```

## 🔗 相关链接

- [Solid.js 文档](https://www.solidjs.com/)
- [@ldesign/engine 文档](../../packages/engine/README.md)
- [@ldesign/launcher 文档](../../tools/launcher/README.md)

## 📄 许可证

MIT

