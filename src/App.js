// 导入counterStore
import counter from './store/counter'
import computed from './store/computed'

// 导入observer方法 (中间件 连接obx react 完成响应式)
import { observer } from 'mobx-react-lite'

function App() {
  return (
    <div className="App">
      <button onClick={ () => counter.addCount() }>
      { counter.count }
      </button>
      <div>
        { computed.filterList.join('-') }
        <button onClick={ () => computed.pushList() }>
          push
        </button>
      </div>
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
