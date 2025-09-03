import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

export default defineConfig({
  plugins: [
    react(),({
      config: {
        theme: {
          extend: {
            colors: {
              primaryBg: "#1E293B",   // background color
              primaryText: "#F1F5F9", // text color
              accent: "#3B82F6",      // button color
              primary: "#6366F1",     // Indigo-500
              secondary: "#06B6D4",   // Cyan-500
              highlight: "#FACC15",   // Yellow-400 (renamed from accent to avoid conflict)
              foreground: "#F9FAFB",  // Gray-50
              "muted-foreground": "#9CA3AF", // Gray-400
              background: "#0F172A",  // Slate-900
              border: "#1E293B",      // Slate-800
            },
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
