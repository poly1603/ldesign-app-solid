import { Component } from 'solid-js'
import Counter from './components/Counter'
import EventDemo from './components/EventDemo'
import './App.css'

/**
 * 根组件
 */
const App: Component = () => {
  return (
    <div class="app">
      <header class="header">
        <h1>🚀 LDesign Engine</h1>
        <p class="subtitle">Solid.js + @ldesign/engine 强大的应用引擎</p>
      </header>

      <main class="main">
        <section class="section">
          <h2>📊 计数器示例</h2>
          <p class="description">展示 useEngineState 状态管理功能</p>
          <Counter />
        </section>

        <section class="section">
          <h2>📡 事件系统示例</h2>
          <p class="description">展示 useEventListener 和 useEventEmitter</p>
          <EventDemo />
        </section>
      </main>

      <footer class="footer">
        <p>⚡ Powered by <strong>@ldesign/engine</strong></p>
      </footer>
    </div>
  )
}

export default App

