<!-- <template>
  <AppHeader :app-title="message" @change="changeTitle" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppHeader from './components/AppHeader.vue'

export default defineComponent({
  components: {
    AppHeader,
  },
  setup() {
    const message = ref('hello')

    const changeTitle = (value: string) => {
      message.value = value
    }

    return {
      message,
      changeTitle,
    }
  },
})
</script>

<style scoped></style> -->

<template>
  <div>{{ message }}</div>
  <button @click="changedMessage">change</button>
</template>

<script lang="ts">
import { useMessage } from './hooks/useMessage'
export default {
  // optionsAPI
  // data() {
  //   return {
  //     message: 'hello',
  //   }
  // },
  // methods: {
  //   changedMessage() {
  //     this.message = 'world'
  //   },
  // },

  setup() {
    const { changedMessage, message } = useMessage()
    return { message, changedMessage }
  },
}
</script>

<style lang="scss" scoped></style>
