import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import Comment from "./comment.js";
import "@testing-library/jest-dom";

describe("Comment functionality", function () {
    test("When Comment component is rendered, given the props text (string), cId (number) & handleDelete (funtion), then a comment is rendered", function () {
        const handleDelete = jest.fn();
        const text = "Test Comment";
        const cId = 1;
        const aId = 3;
        render(
            <Comment
                text={text}
                handleDelete={handleDelete}
                cId={cId}
                aId={aId}
            />
        );
        expect(screen.getByRole("article")).toBeInTheDocument();
    });
    test("Text content of comment should be the value of Text prop", function () {
        const handleDelete = jest.fn();
        const text = "Test Comment";
        const cId = 1;
        const aId = 3;
        render(
            <Comment
                text={text}
                handleDelete={handleDelete}
                cId={cId}
                aId={aId}
            />
        );
        expect(screen.getByRole("button")).toHaveTextContent("Delete");
    });
});
