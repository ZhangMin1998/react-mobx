// 组合子模块
// 封装统一导出的供业务使用的方法

// 实现步骤
// 1. 拆分模块js文件，每个模块中定义自己独立的state/action
// 2. 在store/index.js中导入拆分之后的模块，进行模块组合
// 3. 利用React的context的机制导出统一的useStore方法，给业务组件使用


import React from 'react'

import counter from './counter'
import computed from './computed'
import channelStore from './channelStore'

class RootStore {
  constructor () {
    this.counterStore = counter
    this.computedStore = computed
    this.channelStore = channelStore
  }
}

// 实例化根store注入context
const rootStore = new RootStore()

// context机制的数据查找链
// Provide value = {传递的数据}
// 查找机制：
// useContext优先从Provider value找 
// 如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(rootStore)

// 导出useStore方法，供组件通过调用该方法使用根实例
// 调用useStore() -> rootStore
const useStore = () => React.useContext(context)

export { useStore }

