<template>
  <div>header title ::: {{ appTitle }}</div>
  <button @click="changeTitle">Change Title</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    appTitle: {
      type: String,
      required: true,
    },
  },
  setup(_, { emit }) {
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
