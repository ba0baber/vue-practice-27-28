<template>
  <div>
    <h2>Пример 2: Списки</h2>
    <button @click="addItem">Добавить элемент</button>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ConditionalListDemo',
  setup() {
    const items = ref(['Элемент 1', 'Элемент 2'])
    const addItem = () => {
      items.value.push(`Элемент ${items.value.length + 1}`)
    }
    return { items, addItem }
  }
}
</script>
