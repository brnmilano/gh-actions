// ============================================
// 🔘 Componente Button - Exemplo para testes
// ============================================

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant}`}
      data-testid="button"
    >
      {children}
    </button>
  );
}
