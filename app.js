import React from "react";  // getting from node modules
import ReactDom  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
   id :"title",
    },
    "Heading 1 from parcel"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title"
    },
    "Heading 2"
);

const container =  React.createElement(
    "div",
    {
    id:"container"
    },
    [heading,heading2]
);
console.log(heading);
// reactDom- from injected link
const root = ReactDom.createRoot(document.getElementById("root"));
// this object id will be sent to root upside
// i want to put this heading inside the root or passing an element inside root
root.render(container);