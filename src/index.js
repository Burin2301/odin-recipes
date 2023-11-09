import { header_main } from './modules/navbar';
import { footer_main } from './modules/footer'
import "../src/header.css";
import "../src/footer.css";

console.log("Hola mi pezz");

const content = document.querySelector("#content");

content.appendChild(header_main);


content.appendChild(footer_main);




export{content};
