import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
// import { useStore } from './store'
import useStore from './store'

import Bar from './components/Bar'
import Foo from './components/Foo'

function App() {
  // 解构赋值到store实例就ok 防止破环响应式
  const rootStore = useStore()
  // console.log(rootStore) // !!打印看看

  useEffect(() => {
    rootStore.channelStore.setChannelList()
  }, [])

  return (
    <div className="App">
      <>
        <div>
          <button onClick={ () => rootStore.counterStore.addCount() }>
            { rootStore.counterStore.count }
          </button>
        </div>
        <div>
          <p>
          { rootStore.computedStore.filterList.join('-') }
          </p>
          <button onClick={ () => rootStore.computedStore.pushList() }>
            push
          </button>
        </div>
        <div>
          {
            rootStore.channelStore.channelList.map((item) => (
              <li  key={item.id}>
                {item.name}
              </li>
            ))
          }
        </div>
        <Bar/>
        <Foo/>
        </>
    </div>
  )
}

// 包裹组件让视图响应数据变化
export default observer(App)