# SoC Recap App

School of Code bootcampers undergo an intensive learning experience where new ideas and concepts are introduced every single day. The SoC Recap App is a place for bootcampers to look back over a summary of each day's materials, find links for further reading and have a space to discuss the topics with other bootcampers.

### How to run locally

Clone the project back end

```bash
git clone https://github.com/SchoolOfCode/w9_backend-project-the-4-thinkers.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Clone the project front end

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-the-4-thinkers.git
```

Go to the project directory

```bash
  cd my-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

<br> 

-------------
## CSS Styling
---------------
| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Primary Blue  | ![#31a4dd](https://via.placeholder.com/10/31A4DD?text=+) #31a4dd |
| Lighter Blue  | ![#6fb6da](https://via.placeholder.com/10/6FB6DA?text=+) #6fb6da |
| Lightest Blue | ![#D5EFF7](https://via.placeholder.com/10/D5EFF7?text=+) #d5eff7 |
| Background    | ![#efeae5](https://via.placeholder.com/10/efeae5?text=+) #efeae5 |

| Font | <span style="font-family:Roboto;">Roboto</span> |

-----------
# Components

## Image Slider
-------------------------------------------
We used an image slider component which worked by _mapping_ through an array of image data and then we used _UseState_ to set the current image. 

A next Slide and Previous Slide function was then set up. Here we used the ternary operator to _setCurrent_ slide to the next/ previous slide.


```javascript

    function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
    };

   function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
     };

```

Additionally we imported react icons from the **react icons library** 


[React-icons](https://react-icons.github.io/react-icons/)

--------------------------------


## Drop-down menu  (within the menu page)

--------------------------

We created a drop down menu to go into a our data which contained a sub-array. 

```javascript
export const menuItems = [
  {
    week: "Week 1",
    days: [
      {
        day: "W1D1",
      },
      {
        day: "W1D2",
      },
      {
        day: "W1D3",
      },
      {
        day: "W1D4",
      },
    ],
  }

```

We created our dropdown menu by using state to **setSelected** as well as **setIndexItems**

To create our dropdown menu we mapped through menu items and got each week

```javascript
<select className="select-button" onChange={HandleChange}>
          {menuItems.map((weeks, index) => (
            <option key={index}>{weeks.week}</option>
          ))}
        </select>

```

We then mapped through the menu for each index item and got each day which then navigated to the corresponding page.

```javascript

        {menuItems[indexItems].days.map((item, index) => {
              return (
                <button
                  id="day_buttons"
                  onClick={() => {
                    navigateToResources(item.day);
                  }}
                  key={index}
                >
                  {item.day}
                </button>

```
---------------------------------------------
## Checkbox Component 
-------------------------------------------
We used a checkbox component which worked having use State to setChecked to either true/ false. This would be helpful later on to us if we were able to create a login page and store the data.

-------------
## CommentList
--------------------
Within the CommentList component the return maps through the array of comments and passes down the content, the author and comment IDs.

```javascript
export default function CommentList({ commentListx, handleDelete }) {
  return (
    <div className="comments-container">
      {commentListx.map(function (comment) {
        console.log("map function called");
        return (
          <Comment
            text={comment.comment_text}
            handleDelete={handleDelete}
            cId={comment.comments_id}
            aId={comment.user_id}
          />
        );
      })}
    </div>
  );
}
```
----------------------------

## CommentForm
------------------------------
Within the CommentForm component there is an input field and a Submit button which when clicked takes the user’s input and sets the state to the value of this input.

The CommentForm component runs a handleSubmit function when a user enters text into the input field and clicks the submit button. This creates a POST request to the database with the content of the user's text. On every render of the page, the CommentList component is causing a GET request which fetches all comments in the database and renders them on the page.

-------------------
## Comment
-------------------------
The comment component passes down the author ID (aId) and text props to be rendered in the CommentList component and gives the handleDelete function the comment ID (cId) when the delete button is clicked.

```javascript
export default function Comment({ text, handleDelete, cId, aId }) {
  return (
    <article className="comment">
      <div className="comment-author">author:{aId}</div>
      <p className="comment-content">{text}</p>
      <button
        className="comment-delete-button"
        onClick={function (e) {
          handleDelete(e, cId);
        }}
      >
        Delete
      </button>
    </article>
  );
}
```

-----------------
## Pages
-------------------
The components for the resource page were all created in seperate component files and then rendered onto the corresponding pages. Within our **App.js** file we then had our different routes that all corresponded to a specific URL. 

```javascript
  <Routes>
   <Route exact path="/" element={<Menu />} /> 
   <Route exact path="/resources/W1D1" element={<Resources />} /> 
   <Route exact path="/resources/W2D1" element={<Resources2 />} /> 
   </Routes>
```
-------------------
## Testing
-------------------
For testing we used the React Testing Library. Our tests included one to ensure that comment form was successfully rendered on the page as per below:

```js
describe("Comment form functionality", function(){
    test("When Comment form  component is rendered, given the props: handleSubmit (funtion), then a comment form is rendered", function(){
        const handleSubmit = jest.fn()
        render (<CommentForm  onSubmit={handleSubmit} />);
        //screen.debug();
        expect (screen.getByRole("heading")&&screen.getByRole("textbox")&&screen.getByRole("button")).toBeInTheDocument();
    });
```

And tests to ensure that the comments were rendered successfully and that the text content of the comments mtched the value of the text prop that it was handed.

```js
describe("Comment functionality", function () {
  test("When Comment component is rendered, given the props text (string), cId (number) & handleDelete (funtion), then a comment is rendered", function () {
    const handleDelete = jest.fn();
    const text = "Test Comment";
    const cId = 1;
    const aId = 3;
    render(
      <Comment text={text} handleDelete={handleDelete} cId={cId} aId={aId} />
    );
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
  test("Text content of comment should be the value of Text prop", function () {
    const handleDelete = jest.fn();
    const text = "Test Comment";
    const cId = 1;
    const aId = 3;
    render(
      <Comment text={text} handleDelete={handleDelete} cId={cId} aId={aId} />
    );
    expect(screen.getByRole("button")).toHaveTextContent("Delete");
  });
});
```

