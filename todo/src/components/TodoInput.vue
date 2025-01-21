<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">add</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup(_, context) {
    const todoInput = ref('')

    const addTodo = () => {
      const todo = todoInput.value

      if (!localStorage.getItem(todo)) {
        localStorage.setItem(todo, todo)
        context.emit('add', todo)
        clearTodo()
      }
    }

    const clearTodo = () => {
      todoInput.value = ''
    }

    return { todoInput, addTodo }
  },
}
</script>

<style lang="scss" scoped></style>
