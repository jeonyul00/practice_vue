<template>
  <div>header title ::: {{ appTitle }}</div>
  <button @click="changeTitle">Change Title</button>
</template>

<script lang="ts">
import { defineComponent, defineEmits } from 'vue'

export default defineComponent({
  props: {
    appTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    const emit = defineEmits<{
      (event: 'change', newValue: string): void
    }>()

    const changeTitle = () => {
      emit('change', 'updateTitle')
    }

    return {
      changeTitle,
    }
  },
})
</script>

<style scoped></style>
