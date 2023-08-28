import { useEffect } from 'react'
import useStore from './store/channelStore'
import { observer } from 'mobx-react-lite'

function App() {

  useEffect(() => {
    useStore.setChannelList()
  }, [])

  return (
    <div className="App">
      {
        useStore.channelList.map((item) => (
          <li  key={item.id}>
            {item.name}
          </li>
        ))
      }
    </div>
  )
}

// 包裹组件让视图响应数据变化
export default observer(App)

// 实现步骤
// 1. 在组件中导入counterStore实例对象
// 2. 在组件中使用storeStore实例对象中的数据
// 3. 通过事件调用修改数据的方法修改store中的数据
// 4. 让组件响应数据变化
