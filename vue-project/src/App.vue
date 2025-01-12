<template>
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

<style scoped></style>
