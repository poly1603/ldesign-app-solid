import { Component } from 'solid-js'
import { useEngineState } from '@ldesign/engine-solid'
import './Counter.css'

/**
 * 计数器组件
 * 展示引擎的状态管理功能
 */
const Counter: Component = () => {
  // 使用引擎的状态管理
  const [count, setCount] = useEngineState<number>('counter', 0)

  const increment = () => setCount(count() + 1)
  const decrement = () => setCount(count() - 1)
  const reset = () => setCount(0)

  return (
    <div class="counter">
      <div class="display">
        <span class="label">当前计数:</span>
        <span class="value">{count()}</span>
      </div>

      <div class="controls">
        <button onClick={decrement} class="btn btn-danger">－</button>
        <button onClick={reset} class="btn btn-secondary">重置</button>
        <button onClick={increment} class="btn btn-success">＋</button>
      </div>

      <div class="info">
        <p>✨ 使用 <code>useEngineState</code> 进行状态管理</p>
      </div>
    </div>
  )
}

export default Counter

