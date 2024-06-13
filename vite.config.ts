import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const cherryPickedKeys = [
  "VITE_GOOGLE_MAP_API_KEY",
  "API_DOMAIN",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    server: {
        host: '0.0.0.0', // This allows Vite to be accessible from all network interfaces
        port: 5173, // Adjust the port number as needed
    },
    plugins: [react()],
  }
})