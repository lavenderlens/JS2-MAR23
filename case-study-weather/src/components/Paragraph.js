import "./Paragraph.css";

function Paragraph(text) {
  const p = document.createElement("p"); //valid HTML tag name
  p.innerText = text ?? "";
  p.setAttribute("class", "");
  p.setAttribute("id", "para1");
  return p;
}
export default Paragraph;
