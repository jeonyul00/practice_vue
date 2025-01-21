<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span> {{ item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: ['todoItems'],

  setup(_, context) {
    const removeTodo = (item: string, index: number) => {
      context.emit('remove', item, index)
    }

    return { removeTodo }
  },
}
</script>

<style lang="scss" scoped></style>
