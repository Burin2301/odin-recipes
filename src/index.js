import { header_main } from './modules/navbar';
import { home } from './modules/home';

import { renderAbout } from './modules/about';
import { footer_main } from './modules/footer';
import "../src/styles/header.css";
import "../src/styles/main.css";
import "../src/styles/footer.css";


// Get the main div where HTML will be injected
const content = document.querySelector("#content");

// This function creates all the HTML elements that needs to be added
// It passes all the info needed for the element to be created, recognized by the query and stylized properly, then returns the element, which should be added to the DOM
function createHtmlElements(type, id, arrayClass, content){
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClass){
        arrayClass.forEach( (myClass) => element.classlist.add(myClass) )
    };
    if(content) element.textContent = content;

    return element;
}

// The RenderXpage function creates the elements needed for the page to load properly
function renderHomePage(){
    content.appendChild(header_main);
    content.appendChild(home);
    content.appendChild(footer_main);
}
function renderAboutPage(){
    content.appendChild(header_main);
    content.appendChild(renderAbout);
    content.appendChild(footer_main);
}

// Function that handles the button events and render the page as needed using the required function

document.addEventListener("click", (e)=>{
    const idBtn = e.target.id;
    switch(idBtn){
        case "homeBtn":
            content.innerHTML = ""
            renderHomePage();
            break;
        case "aboutBtn":
            content.innerHTML = ""
            renderAboutPage();
            break
    }
})



// This renders home page by default for the moment
renderHomePage()




export{ content, createHtmlElements };
