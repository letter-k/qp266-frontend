import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/qp266-frontend/',
  plugins: [react()],
  define: {
    'import.meta.env.BASE_URL': JSON.stringify('/qp266-frontend/'),
  },
})
