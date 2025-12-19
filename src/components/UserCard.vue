
cat > src/components/UserCard.vue << 'EOF'
<template>
  <div class="user-card" :class="user.role">
    <h3>{{ user.name }}</h3>
    <p>Email: {{ user.email }}</p>
    <p>Роль: {{ user.role }}</p>
    <p>Статус: {{ isActive ? 'Активен' : 'Неактивен' }}</p>

    <slot name="actions"></slot>

    <slot>
      <p>Нет дополнительной информации</p>
    </slot>
    
    <button @click="handleClick" class="click-button">
      Кликов: {{ localClicks }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserCard',

  props: {
    user: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.name && value.email
      }
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  
  data() {
    return {
      localClicks: 0
    }
  },
  
  methods: {
    handleClick() {
      this.localClicks++
      this.$emit('user-clicked', this.user)
    }
  }
}
</script>

<style scoped>
.user-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
  max-width: 300px;
}

.user-card.admin {
  border-color: #ff6b6b;
  background-color: #fff5f5;
}

.user-card.user {
  border-color: #4ecdc4;
  background-color: #f0fff4;
}

.click-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
EOF