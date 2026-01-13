import { render } from "@testing-library/react";
import Text from "./text";
import { TextSizes } from "./text.type";

describe("Text Component", () => {
  test("should match snapshot.", () => {
    const { container } = render(
      <Text
        text="Lorem Ipsum is not simply random text."
        size={TextSizes.LARGE}
        color="#333333"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test("should render the text with correct content, size, and color.", () => {
    const { getByText } = render(
      <Text text="Sample Text" size={TextSizes.SMALL} color="#00FF00" />,
    );

    const textElement = getByText("Sample Text");

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-small");
    expect(textElement).toHaveStyle("color: #00FF00");
  });
});
