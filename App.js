const heading = React.createElement(
    "div", {id:"heading"}, 
     [React.createElement("h1", {id:"child", key:"child1"}, "I am a H1 tag"),
     React.createElement("h1", {id:"child", key:"child2"}, "I am a H1 tag")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading)