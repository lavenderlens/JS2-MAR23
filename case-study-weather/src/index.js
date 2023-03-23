import { H2 } from "./components/H2";
import Paragraph from "./components/Paragraph"; //default export - no curlies

console.log("index.js loaded");

onload = () => {
  document.body.appendChild(H2("Weekly forecast"));
  document.body.appendChild(
    Paragraph(
      `I was part of something special. Jaguar shark! So tell me - does it really exist? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. God help us, we're in the hands of engineers. So you two dig up, dig up dinosaurs?`
    )
  );
};
