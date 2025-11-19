import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/test";

const nextConfig: NextConfig = {
  /**
   * Statik HTML çıktısı üretip `out/` klasörüne yazmak için
   * App Router projelerinde `output: "export"` kullanmamız gerekiyor.
   * Böylece statik bir barındırma ortamına (ör. GitHub Pages) yüklediğinizde
   * 404 yerine build sırasında üretilen HTML dosyaları servis edilir.
   */
  output: "export",
  trailingSlash: true,
  basePath: isProd ? repoBasePath : undefined,
  assetPrefix: isProd ? repoBasePath : undefined,
};

export default nextConfig;

