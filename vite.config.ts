import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ou '@vitejs/plugin-react' dependendo da template escolhida
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
