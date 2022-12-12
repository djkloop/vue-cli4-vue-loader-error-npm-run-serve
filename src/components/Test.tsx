import { computed, defineComponent } from "vue";
import useTestHook from "./hook";

export default defineComponent({
  name: "TsxDemo",
  emits: {
    // 可以在父级组件看到有提示
    'emit-click': () => void 0
  },
  setup(_, ctx) {
    const { isOpen, changeOpen } = useTestHook()

    const handleClick = () => {
      changeOpen()
      ctx.emit("emit-click")
    }


    const computedLinkValue = computed(() => {
      if (isOpen.value) {
        return '太对了'
      } else {
        return '太错了'
      }
    })

    return {
      isOpen,
      computedLinkValue,
      handleClick
    }

    // return () => {
    //   return (
    //     <div>
    //       <button onClick={() => handleClick()}>改变值和改变第一个按钮的背景颜色</button>
    //       <div>Hello 是否打开 {'->'} {isOpen.value + ''}</div>
    //       {/* tsx setup下返回 有bug... */}
    //       {/* <input v-model={isOpen.value} /> */}
    //     </div>
    //   )
    // }
  },
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>改变值和改变第一个按钮的背景颜色</button>
        <div>Hello 是否打开 {'->'} {this.isOpen + ''}</div>
        <input v-model={this.isOpen} />
        <div>{this.computedLinkValue}</div>
      </div>
    )
  }
})