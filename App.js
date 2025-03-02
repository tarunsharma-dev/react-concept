/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>This is h1 heading!</h1>
 *          <h2>This is h2 heading!</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) -> HTML(Browser Understands)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      [
        React.createElement("h1", {}, "This is h1 tag."), // this will create h1
        React.createElement("h2", {}, "This is h2 tag."), // this will create h1
      ] // take Array for create siblings
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h1", {}, "This is h1 tag."), // this will create h1
        React.createElement("h2", {}, "This is h2 tag."), // this will create h1
      ] // take Array for create siblings
    ),
  ] //take Array again for create whole child siblings
);

// const heading = React.createElement("h1", { id: "heading" }, "Hello, React!");

console.log(parent); //returns object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(parent);
