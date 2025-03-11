import React from "react";
import ReactDOM from "react-dom/client";
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

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child1" },
//       [
//         React.createElement("h1", {}, "Igniting a React. 🚀"), // this will create h1
//         React.createElement("h2", {}, "This is h2 tag."), // this will create h1
//       ] // take Array for create siblings
//     ),
//     React.createElement(
//       "div",
//       { id: "child2" },
//       [
//         React.createElement("h1", {}, "This is h1 tag."), // this will create h1
//         React.createElement("h2", {}, "This is h2 tag."), // this will create h1
//       ] // take Array for create siblings
//     ),
//   ] //take Array again for create whole child siblings
// );

// const heading = React.createElement("h1", { id: "heading" }, "Hello, React!");

// console.log(parent); //returns object

// This React Element is converted into HTML
// const title = (
//   <h1 id="heading" tabIndex={"5"} type="button">
//     <span>Hello, React!</span>
//   </h1>
// );

const Title = () => (
  <h1 id="heading" tabIndex={"5"} type="button">
    <span>Hello, React!</span>
  </h1>
);

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input placeholder="Search" className="search-input" />
      </div>
      <nav>
        <button type="button" className="user-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </button>
      </nav>
    </header>
  );
};
// This is a functional component

const Heading = () => {
  return (
    <div className="container">
      {/* {Title()} This is a component composition  */}
      {/* <Title /> This is a component composition */}
      <Header />
      <h1 id="heading">React Functional Component!🚀</h1>;
    </div>
  );
};
// console.log(title);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
// root.render(title);
root.render(<Heading />);
