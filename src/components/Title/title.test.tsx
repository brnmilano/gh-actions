import { render } from "@testing-library/react";
import Title from "./title";
import { TitleSizes } from "./title.type";

describe("Title Component", () => {
  test("should match snapshot.", () => {
    const { container } = render(
      <Title
        text="Lorem Ipsum is not simply random text."
        size={TitleSizes.LARGE}
        color="#000000"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test("should render the title with correct text, size, and color.", () => {
    const { getByText } = render(
      <Title text="Test Title" size={TitleSizes.MEDIUM} color="#FF0000" />,
    );

    const titleElement = getByText("Test Title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle("font-size: 2em");
    expect(titleElement).toHaveStyle("color: #FF0000");
  });
});
