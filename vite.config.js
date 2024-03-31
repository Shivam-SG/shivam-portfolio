import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.REACT_APP_SERVICE_ID': JSON.stringify(process.env.REACT_APP_SERVICE_ID),
    'import.meta.env.REACT_APP_TEMPLATE_ID': JSON.stringify(process.env.REACT_APP_TEMPLATE_ID),
    'import.meta.env.REACT_APP_PUBLIC_KEY': JSON.stringify(process.env.REACT_APP_PUBLIC_KEY),
  },
})
