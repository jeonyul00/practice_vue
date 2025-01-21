import { ref } from 'vue'

const useMessage = () => {
  const message = ref<string>('hello')
  let trigger: boolean = false

  const changedMessage = (): void => {
    trigger = !trigger
    message.value = trigger ? 'world' : 'hello'
  }

  return { message, changedMessage }
}

export { useMessage }
