import { observer } from 'mobx-react-lite'
import { useStore } from '../store'

const Foo = () => {
  const rootStore = useStore()
  return (
    <ul>
      { rootStore.computedStore.filterList.map((item, index) => (
        <li key={index}>{item}</li>
      )) }
    </ul>
  )
}

export default observer(Foo)