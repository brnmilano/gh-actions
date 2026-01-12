// ============================================
// 🧪 Testes do componente Button
// ============================================
// Este arquivo demonstra como testar componentes
// React usando Jest + React Testing Library

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

// ============================================
// 📦 describe: Agrupa testes relacionados
// ============================================
describe("Button", () => {
  // ============================================
  // ✅ it/test: Define um caso de teste
  // ============================================

  it("deve renderizar o texto do botão", () => {
    // 1️⃣ Arrange (Preparar): Renderiza o componente
    render(<Button>Clique aqui</Button>);

    // 2️⃣ Act (Agir): Neste caso, apenas buscamos o elemento
    const button = screen.getByRole("button", { name: /clique aqui/i });

    // 3️⃣ Assert (Verificar): Confirma que está na tela
    expect(button).toBeInTheDocument();
  });

  it("deve chamar onClick quando clicado", async () => {
    // Cria uma função "espiã" para verificar se foi chamada
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Enviar</Button>);

    // userEvent simula interações reais do usuário
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    // Verifica se a função foi chamada exatamente 1 vez
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("não deve chamar onClick quando desabilitado", async () => {
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick} disabled>
        Desabilitado
      </Button>,
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    // Função NÃO deve ter sido chamada
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("deve estar desabilitado quando disabled=true", () => {
    render(<Button disabled>Desabilitado</Button>);

    const button = screen.getByRole("button");

    // Matcher do jest-dom para verificar estado
    expect(button).toBeDisabled();
  });

  it("deve aplicar a classe correta para variant primary", () => {
    render(<Button variant="primary">Primary</Button>);

    const button = screen.getByTestId("button");

    expect(button).toHaveClass("button-primary");
  });

  it("deve aplicar a classe correta para variant secondary", () => {
    render(<Button variant="secondary">Secondary</Button>);

    const button = screen.getByTestId("button");

    expect(button).toHaveClass("button-secondary");
  });
});

// ============================================
// 📝 Conceitos demonstrados:
// ============================================
// - render(): Renderiza o componente para teste
// - screen: Acessa elementos renderizados
// - getByRole(): Busca por papel acessível (melhor prática)
// - getByTestId(): Busca por data-testid (fallback)
// - userEvent: Simula interações do usuário
// - jest.fn(): Cria função mock para verificar chamadas
// - expect(): Faz asserções sobre os resultados
// ============================================
