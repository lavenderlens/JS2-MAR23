console.log("index.js loaded");

onload = () => {
  function Paragraph() {
    const p = document.createElement("p"); //valid HTML tag name
    p.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit, accusantium tempora ipsam voluptatibus odit eos architecto corrupti beatae molestiae laborum expedita! Est quod enim tempora iure deleniti quas incidunt";
    p.setAttribute("class", "");
    p.setAttribute("id", "para1");
    return p;
  }

  document.body.appendChild(Paragraph());
};
