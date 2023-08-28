import { makeAutoObservable } from 'mobx'

class CounterStore {
  list = [1,2,3,4,5,6,7,8]
  constructor () {
    makeAutoObservable(this)
  }
  // 修改原数组
  pushList = () => {
    this.list.push(9)
  }
  // 通过get关键词 定义计算属性
  get filterList () {
    return this.list.filter(item => item > 4)
  }
}

// 4、实例化store并导出
const computed = new CounterStore()
export default computed