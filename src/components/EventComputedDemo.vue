<template>
  <div>
    <h2>Пример 3: События</h2>
    <p>Счетчик: {{ count }}</p>
    <button @click="increment">Увеличить</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EventComputedDemo',
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return { count, increment }
  }
}
</script>
