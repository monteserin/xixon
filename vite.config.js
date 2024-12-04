import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default ({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const config = {
    base: '/' + env.VITE_PUBLIC_NAME.toLowerCase(),
    plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      globPatterns: [
        '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
      ],
      // Con la siguiente opción activada, se verá el botón de instalación de la PWA cuando estemos en modo desarrollo
      devOptions: {
        enabled: true
      },
      // Con la siguiente opción activada, la aplicación del cliente se actualizará cuando la refresquemos tras haber hecho una nueva subida al servidor web
      workbox: {
        navigateFallbackDenylist: [/asset-manifest\.json$/, /index\.html$/],
      },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: env.VITE_PUBLIC_NAME,
        short_name: env.VITE_PUBLIC_NAME,
        description: env.VITE_PUBLIC_NAME,
        icons: [
          {
            src: '/' + env.VITE_PUBLIC_NAME.toLowerCase() + '/' + env.VITE_PUBLIC_NAME.toLowerCase() + '.jpeg',
            sizes: '1024x1024',
            type: 'image/jpeg'
          }
        ]
      }
    })
    ]
  };

  return defineConfig(config);
};