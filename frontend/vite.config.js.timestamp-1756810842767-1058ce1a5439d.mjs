// vite.config.js
import { defineConfig } from "file:///C:/Users/Tosheba/OneDrive/Pictures/Desktop/Mini%20Portfolio/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Tosheba/OneDrive/Pictures/Desktop/Mini%20Portfolio/frontend/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/Tosheba/OneDrive/Pictures/Desktop/Mini%20Portfolio/frontend/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Tosheba\\OneDrive\\Pictures\\Desktop\\Mini Portfolio\\frontend";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    {
      config: {
        theme: {
          extend: {
            colors: {
              primaryBg: "#1E293B",
              // background color
              primaryText: "#F1F5F9",
              // text color
              accent: "#3B82F6",
              // button color
              primary: "#6366F1",
              // Indigo-500
              secondary: "#06B6D4",
              // Cyan-500
              highlight: "#FACC15",
              // Yellow-400 (renamed from accent to avoid conflict)
              foreground: "#F9FAFB",
              // Gray-50
              "muted-foreground": "#9CA3AF",
              // Gray-400
              background: "#0F172A",
              // Slate-900
              border: "#1E293B"
              // Slate-800
            }
          }
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUb3NoZWJhXFxcXE9uZURyaXZlXFxcXFBpY3R1cmVzXFxcXERlc2t0b3BcXFxcTWluaSBQb3J0Zm9saW9cXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFRvc2hlYmFcXFxcT25lRHJpdmVcXFxcUGljdHVyZXNcXFxcRGVza3RvcFxcXFxNaW5pIFBvcnRmb2xpb1xcXFxmcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVG9zaGViYS9PbmVEcml2ZS9QaWN0dXJlcy9EZXNrdG9wL01pbmklMjBQb3J0Zm9saW8vZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4oe1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgZXh0ZW5kOiB7XG4gICAgICAgICAgICBjb2xvcnM6IHtcbiAgICAgICAgICAgICAgcHJpbWFyeUJnOiBcIiMxRTI5M0JcIiwgICAvLyBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgICAgICAgIHByaW1hcnlUZXh0OiBcIiNGMUY1RjlcIiwgLy8gdGV4dCBjb2xvclxuICAgICAgICAgICAgICBhY2NlbnQ6IFwiIzNCODJGNlwiLCAgICAgIC8vIGJ1dHRvbiBjb2xvclxuICAgICAgICAgICAgICBwcmltYXJ5OiBcIiM2MzY2RjFcIiwgICAgIC8vIEluZGlnby01MDBcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBcIiMwNkI2RDRcIiwgICAvLyBDeWFuLTUwMFxuICAgICAgICAgICAgICBoaWdobGlnaHQ6IFwiI0ZBQ0MxNVwiLCAgIC8vIFllbGxvdy00MDAgKHJlbmFtZWQgZnJvbSBhY2NlbnQgdG8gYXZvaWQgY29uZmxpY3QpXG4gICAgICAgICAgICAgIGZvcmVncm91bmQ6IFwiI0Y5RkFGQlwiLCAgLy8gR3JheS01MFxuICAgICAgICAgICAgICBcIm11dGVkLWZvcmVncm91bmRcIjogXCIjOUNBM0FGXCIsIC8vIEdyYXktNDAwXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzBGMTcyQVwiLCAgLy8gU2xhdGUtOTAwXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIjMUUyOTNCXCIsICAgICAgLy8gU2xhdGUtODAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBZLFNBQVMsb0JBQW9CO0FBQ3ZhLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ1Q7QUFBQSxNQUNLLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLFFBQVE7QUFBQSxZQUNOLFFBQVE7QUFBQSxjQUNOLFdBQVc7QUFBQTtBQUFBLGNBQ1gsYUFBYTtBQUFBO0FBQUEsY0FDYixRQUFRO0FBQUE7QUFBQSxjQUNSLFNBQVM7QUFBQTtBQUFBLGNBQ1QsV0FBVztBQUFBO0FBQUEsY0FDWCxXQUFXO0FBQUE7QUFBQSxjQUNYLFlBQVk7QUFBQTtBQUFBLGNBQ1osb0JBQW9CO0FBQUE7QUFBQSxjQUNwQixZQUFZO0FBQUE7QUFBQSxjQUNaLFFBQVE7QUFBQTtBQUFBLFlBQ1Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
