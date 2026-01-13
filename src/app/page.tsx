import { Button } from "@/components/Button";
import { ButtonSizes, ButtonVariants } from "@/components/Button/button.type";
import { Input } from "@/components/Input";
import Text from "@/components/Text/text";
import { TextSizes } from "@/components/Text/text.type";
import { Textarea } from "@/components/Textarea";
import Title from "@/components/Title/title";
import { TitleSizes } from "@/components/Title/title.type";

export default function Home() {
  return (
    <section
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Title
        text="Lorem Ipsum is not simply random text."
        size={TitleSizes.LARGE}
        color="#000000"
      />

      <Text
        text="Lorem Ipsum is simply dummy text of the printing and typesetting."
        size={TextSizes.LARGE}
        color="#000000"
      />

      <Button
        text="Clique aqui!"
        buttonVariant={ButtonVariants.PRIMARY}
        size={ButtonSizes.LARGE}
      />

      <Input title="Teste" label="Nome" placeholder="Digite seu nome" />

      <Textarea label="Mensagem" placeholder="Digite sua mensagem" />
    </section>
  );
}
