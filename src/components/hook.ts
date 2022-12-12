import { ref, watch } from "vue"
import type { Ref } from "vue"

interface ITestHookRenturn {
  isOpen: Ref<boolean>,
  changeOpen: () => void
}


const useTestHook = (): ITestHookRenturn => {
  const isOpen = ref(false)

  const changeOpen = () => {
    console.log('changeOpen')
    isOpen.value = !isOpen.value
  }

  watch(() => isOpen.value, () => {
    // console.log(v, ' isOpen 发生了变化')
  }, {
    immediate: true,
    deep: true
  })

  return {
    isOpen,
    changeOpen
  }
}

export default useTestHook