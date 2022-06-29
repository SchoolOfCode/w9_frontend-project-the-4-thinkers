import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import CommentForm from "./commentform";
import "@testing-library/jest-dom";

describe("Comment form functionality", function () {
    test("When Comment form  component is rendered, given the props: handleSubmit (funtion), then a comment form is rendered", function () {
        const handleSubmit = jest.fn();
        render(<CommentForm onSubmit={handleSubmit} />);
        //screen.debug();
        expect(
            screen.getByRole("heading") &&
                screen.getByRole("textbox") &&
                screen.getByRole("button")
        ).toBeInTheDocument();
    });
    test("Text content of button element should be 'submit'", function () {
        const handleSubmit = jest.fn();
        render(<CommentForm onSubmit={handleSubmit} />);
        expect(screen.getByRole("button")).toHaveValue("Submit");
    });
    test("When the submit button is clicked, the handleSubmit function is called", function () {
        const onSubmit = jest.fn();
        render(<CommentForm onSubmit={onSubmit} />);
        userEvent.click(screen.getByRole("button"));
        expect(onSubmit).toHaveBeenCalled();
    });
    /*     test("When typing in the input field, the input field displays that text", function(){
        const onSubmit = jest.fn();
        render (<CommentForm onSubmit={onSubmit} />);
        screen.debug()
        userEvent.click(screen.getByRole("textbox"))
        userEvent.type(screen.getByRole("textbox"),"This is a comment");
        expect(screen.getByRole("textbox")).toHaveTextContent("This is a comment");
    }); */
});
