import type { Config } from "jest";
import nextJest from "next/jest.js";

// ============================================
// 🧪 Configuração do Jest para Next.js
// ============================================

// Cria a configuração base do Jest para Next.js
// Isso configura automaticamente:
// - Transformações de TypeScript/JSX
// - Mapeamento de módulos (CSS, imagens)
// - Variáveis de ambiente do Next.js
const createJestConfig = nextJest({
  // Caminho para o diretório do Next.js
  dir: "./",
});

// Configurações customizadas do Jest
const config: Config = {
  // Nome descritivo que aparece nos relatórios
  displayName: "gh-actions",

  // Ambiente de teste - jsdom simula o navegador
  testEnvironment: "jsdom",

  // Arquivo de setup que roda antes de cada teste
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Padrão de arquivos de teste
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx)",
    "**/*.(test|spec).(ts|tsx)",
  ],

  // Cobertura de código (coverage)
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/layout.tsx", // Layouts geralmente não precisam de teste
  ],

  // Mapeamento de caminhos (igual ao tsconfig)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

// Exporta a configuração processada pelo Next.js
export default createJestConfig(config);
