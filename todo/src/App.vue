<template>
  <div><TodoHeader /></div>
  <!-- emit -->
  <div><TodoInput @add="addTodo" /></div>
  <!-- props -->
  <div><TodoList :todo-items="todoItems" @remove="removeTodo" /></div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  setup() {
    const todoItems = ref<string[]>([])

    const fetchTodos = (): string[] => {
      const result: string[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.key(i)
        if (item) {
          result.push(item)
        }
      }
      return result
    }

    onMounted(() => {
      todoItems.value = fetchTodos()
    })

    const addTodo = (value: string) => {
      todoItems.value.push(value)
      localStorage.setItem(value, value)
    }

    const removeTodo = (item: string) => {
      const removeArr = todoItems.value.filter((v) => v !== item)
      todoItems.value = removeArr
      localStorage.removeItem(item)
    }

    return { todoItems, addTodo, removeTodo }
  },
}
</script>

<style lang="sass" scoped></style>
