
cat > src/main.js << 'EOF'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
EOF