import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log(`${env.VITE_REACT_APP_API_URL}`);

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: `${env.VITE_REACT_APP_API_URL}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ms: true,
        },
      },
    },
  });
};

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: import.meta.env.VITE_REACT_APP_API_URL,
//         // target: 'http://localhost:8080',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });
