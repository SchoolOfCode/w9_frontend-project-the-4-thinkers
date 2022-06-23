import {render,screen} from "@testing-library/react";
import {test,expect} from "@jest/globals";
import userEvent from "@testing-library/user-event"
import Comment from "./comment.js";

describe("Comment functionality", function(){

    test("When Comment component is rendered, given the props text (string), cId (number) & handleDelete (funtion), then a comment is rendered",function(){
        const handleDelete = jest.fn()
        const text="Test Comment"
        render (<Comment text={text} onClick={handleDelete} cId={cId} />);
        //screen.debug();
        expect (screen.getByRole("article")).toBeInTheDocument();
    });
    test("Text content of comment should be the value of Text prop", function(){
        const handleDelete = jest.fn()
        const text="Test Comment"
        render (<Comment text={text} onClick={handleDelete} cId={cId} />);
        expect(screen.getByRole("button")).toHaveTextContent(text);
    })
});