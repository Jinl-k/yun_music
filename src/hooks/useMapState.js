/* import { computed } from 'vue';
import { mapState, useStore } from 'vuex';

export const useMapState = (mapper)=> {
  // 获取key,并判断是否存在
  const store = useStore();
  // 获取相应的对象 : {name:function,age:function}
  const storeStateFns = mapState(mapper);
  // 进行 $store 指向 ，并赋值
  const storeState = {}
  Object.keys(storeStateFns).forEach(Fnkey => {
    // setup中无this 指向,在 compute中计算state时需要  $store 指向 ,所以使用bind() 绑定 $store
    const fn = storeStateFns[Fnkey].bind({ $store: store });
    storeState[Fnkey] = computed(fn)
  })
  // 返回值
  return storeState;
} */
import { computed } from 'vue'
import { useStore } from 'vuex'
const mapState = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store.state).map(
      key => [key, computed(() => store.state[key])]
    )
  )
}
const mapGetters = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store.getters).map(
      getter => [getter, computed(() => store.getters[getter])]
    )
  )
}
const mapMutations = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store._mutations).map(
      mutation => [mutation, value => store.commit(mutation, value)]
    )
  )
}
const mapActions = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store._actions).map(
      action => [action, value => store.dispatch(action, value)]
    )
  )
}
export { mapState, mapGetters, mapMutations, mapActions }
