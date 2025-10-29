import { Component, createSignal, onCleanup } from 'solid-js'
import { useEventListener, useEventEmitter } from '@ldesign/engine-solid'
import './EventDemo.css'

/**
 * 事件系统演示组件
 * 展示引擎的事件发布订阅功能
 */
const EventDemo: Component = () => {
  const [messages, setMessages] = createSignal<string[]>([])
  const [messageInput, setMessageInput] = createSignal('')

  // 创建事件发射器
  const emitter = useEventEmitter()

  // 监听消息事件
  const cleanup = useEventListener('message', (data: any) => {
    const timestamp = new Date().toLocaleTimeString()
    setMessages([...messages(), `[${timestamp}] ${data.text}`])
  })

  const sendMessage = () => {
    const input = messageInput().trim()
    if (input) {
      emitter.emit('message', { text: input })
      setMessageInput('')
    }
  }

  const clearMessages = () => {
    setMessages([])
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  // 组件销毁时清理事件监听
  onCleanup(() => {
    cleanup()
  })

  return (
    <div class="event-demo">
      <div class="input-group">
        <input
          type="text"
          value={messageInput()}
          onInput={(e) => setMessageInput(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
          placeholder="输入消息..."
          class="input"
        />
        <button onClick={sendMessage} class="btn btn-primary">发送</button>
      </div>

      <div class="messages">
        {messages().length === 0 ? (
          <p class="empty">暂无消息，试试发送一条吧！</p>
        ) : (
          messages().map((message) => (
            <div class="message">{message}</div>
          ))
        )}
      </div>

      <div class="actions">
        <button onClick={clearMessages} class="btn btn-secondary">清空消息</button>
      </div>

      <div class="info">
        <p>✨ 使用 <code>useEventEmitter</code> 和 <code>useEventListener</code></p>
      </div>
    </div>
  )
}

export default EventDemo

