javascript/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Додаємо підтримку src директорії
  experimental: {
    appDir: false // якщо використовуєте pages router
  }
}

module.exports = nextConfig
