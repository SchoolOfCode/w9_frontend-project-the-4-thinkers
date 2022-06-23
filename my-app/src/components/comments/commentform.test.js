import {render,screen} from "@testing-library/react";
import {test,expect} from "@jest/globals";
import userEvent from "@testing-library/user-event"
import commentform from "./commentform";
import CommentForm from "./commentform";

describe("Comment form functionality", function(){

    test("When Comment form  component is rendered, given the props: handleSubmit (funtion), then a comment form is rendered", function(){
        const handleSubmit = jest.fn()
        render (<CommentForm  onClick={handleDelete} />);
        //screen.debug();
        expect (screen.getByRole("form")).toBeInTheDocument();
    });
    test("Text content of comment should be the value of Text prop", function(){
        const handleDelete = jest.fn()
        const text="Test Comment"
        render (<CommentForm text={text} onClick={handleDelete} cId={cId} />);
        expect(screen.getByRole("button")).toHaveTextContent(text);
    })
});