
/**
 * Configuração personalizada de framework
 */
export default {
  framework: "vite-react-ts",
  buildCommand: "npm run build",
  outputDirectory: "dist",
  devCommand: "npm run dev",
  rewrites: [
    {
      source: "/(.*)",
      destination: "/"
    }
  ],
  metadata: {
    author: "Isabela Falcão",
    version: "1.0.0"
  }
};
