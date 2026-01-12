// ============================================
// 🔧 Setup do Jest - Roda antes de cada teste
// ============================================

// Importa os matchers customizados do Testing Library
// Isso adiciona matchers como:
// - toBeInTheDocument()
// - toHaveTextContent()
// - toBeVisible()
// - toBeDisabled()
// - etc.
import "@testing-library/jest-dom";
