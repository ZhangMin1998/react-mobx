// 异步的获取

import { makeAutoObservable } from 'mobx'

class ChannelStore {
  channelList = []

  constructor () {
    makeAutoObservable(this)
  }

  setChannelList = async function fetchData () {
    fetch('http://geek.itheima.net/v1_0/channels').then(
      response => response.json()
    ).then(data => {
      this.channelList = data.data.channels
    })
    // const res = await fetch('http://geek.itheima.net/v1_0/channels')
    // console.log(res.json())
    // this.channelList = res.data.data.channels
  }
}

const channelStore = new ChannelStore()
export default channelStore