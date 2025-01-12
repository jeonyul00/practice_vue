<template>
  <form v-on:submit="onClick">
    <div>
      <label for="userId">id: </label>
      <input type="text" id="userId" v-model="userName" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script lang="ts">
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup() {
    const userName = ref('')
    const password = ref('')

    const onClick = async (e: Event) => {
      e.preventDefault()

      try {
        const result = await axios.post('https://jsonplaceholder.typicode.com/users', {
          userName: userName.value,
          password: password.value,
        })

        if (result.status >= 200 && result.status < 400) {
          console.log('succeeded :', result)
        } else {
          console.log('failed :', result.status)
        }
      } catch (error) {
        console.error('error :', error)
      }
    }

    return {
      userName,
      password,
      onClick,
    }
  },
}
</script>

<style scoped></style>
