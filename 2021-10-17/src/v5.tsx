import { useState } from 'react'
import { SwipeAction, List } from 'antd-mobile'
import { Action } from 'antd-mobile/es/components/swipe-action'

function App() {
  const [count, setCount] = useState(0)
  const leftActions: Action[] = [
    {
      key: 'pin',
      text: '置顶',
      color: 'primary'
    }
  ]
  const rightActions: Action[] = [
    {
      key: 'unsubscribe',
      text: '取消关注',
      color: 'light'
    },
    {
      key: 'mute',
      text: '免打扰',
      color: 'warning'
    },
    {
      key: 'delete',
      text: '删除',
      color: 'danger'
    }
  ]
  const items = ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C']

  return (
    <div className="App">
      <h1>SwipeAction</h1>
      <List style={{ height: 300, overflow: 'auto' }}>
        {items.map(item => (
          <SwipeAction
            key={item}
            leftActions={leftActions}
            rightActions={rightActions}
          >
            <List.Item>{item}</List.Item>
          </SwipeAction>
        ))}
      </List>
    </div>
  )
}

export default App
