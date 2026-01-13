import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "./textarea";
import { TextareaSizes } from "./textarea.types";

describe("Textarea Component", () => {
  test("should match snapshot.", () => {
    const { container } = render(
      <Textarea
        label="Snapshot Textarea"
        placeholder="Enter text here"
        size={TextareaSizes.MEDIUM}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test("should render the textarea with correct label and placeholder.", () => {
    render(
      <Textarea
        label="Description"
        placeholder="Enter description"
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textarea = screen.getByPlaceholderText("Enter description");
    const label = screen.getByText("Description");

    expect(textarea).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", textarea.id);
  });

  test("should render textarea without label.", () => {
    render(
      <Textarea placeholder="No label textarea" size={TextareaSizes.MEDIUM} />,
    );

    const textarea = screen.getByPlaceholderText("No label textarea");

    expect(textarea).toBeInTheDocument();
  });

  test("should call onChange handler when text is typed.", () => {
    const handleChange = jest.fn();

    render(
      <Textarea
        label="Change Textarea"
        placeholder="Type here"
        onChange={handleChange}
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    fireEvent.change(textarea, { target: { value: "New text" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("should render textarea with correct rows.", () => {
    render(
      <Textarea
        label="Rows Textarea"
        placeholder="Type here"
        rows={5}
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveAttribute("rows", "5");
  });

  test("should render textarea with small size.", () => {
    const { container } = render(
      <Textarea
        label="Small Textarea"
        placeholder="Type here"
        size={TextareaSizes.SMALL}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("small");
  });

  test("should render textarea with medium size.", () => {
    const { container } = render(
      <Textarea
        label="Medium Textarea"
        placeholder="Type here"
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("medium");
  });

  test("should render textarea with large size.", () => {
    const { container } = render(
      <Textarea
        label="Large Textarea"
        placeholder="Type here"
        size={TextareaSizes.LARGE}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("large");
  });

  test("should render textarea as disabled.", () => {
    render(
      <Textarea
        label="Disabled Textarea"
        placeholder="Type here"
        disabled
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toBeDisabled();
  });

  test("should not show toolbar by default.", () => {
    render(
      <Textarea
        label="No Toolbar Textarea"
        placeholder="Type here"
        size={TextareaSizes.MEDIUM}
      />,
    );

    const toolbar = screen.queryByRole("toolbar");

    expect(toolbar).not.toBeInTheDocument();
  });

  test("should apply custom container className.", () => {
    const { container } = render(
      <Textarea
        label="Custom Class Textarea"
        placeholder="Type here"
        containerClassName="custom-textarea"
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("custom-textarea");
  });

  test("should apply custom minHeight style.", () => {
    render(
      <Textarea
        label="Min Height Textarea"
        placeholder="Type here"
        minHeight="200px"
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveStyle({ minHeight: "200px" });
  });

  test("should apply resize style.", () => {
    render(
      <Textarea
        label="Resize Textarea"
        placeholder="Type here"
        resize="none"
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveStyle({ resize: "none" });
  });

  test("should have correct name attribute when name prop is provided.", () => {
    render(
      <Textarea
        label="Named Textarea"
        placeholder="Type here"
        name="notes"
        size={TextareaSizes.MEDIUM}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveAttribute("name", "notes");
  });
});
