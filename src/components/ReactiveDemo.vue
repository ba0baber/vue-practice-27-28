<template>
  <div>
    <h2>Пример 1: Реактивность</h2>
    <p>Введите что-нибудь: <input v-model="message"></p>
    <p>Вы ввели: {{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ReactiveDemo',
  setup() {
    const message = ref('')
    return { message }
  }
}
</script>
