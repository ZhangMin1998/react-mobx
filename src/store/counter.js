// 编写第一个mobx store小案例

import { makeAutoObservable } from 'mobx'

class CounterStore {
  // 1、定义数据
  count = 0
  // 2、实现数据响应式处理 makeAutoObservable
  constructor () {
    makeAutoObservable(this)
  }
  // 3、定义修改数据的函数action
  addCount = () => {
    this.count++
  }
}

// 4、实例化store并导出
const counter = new CounterStore()
export default counter


// 初始化步骤
// 1. 定义数据状态state
// 2. 在构造器中实现数据响应式处理 makeAutoObservable
// 3. 定义修改数据的函数action
// 4. 实例化store并导出