import { header_main } from './modules/navbar';
import { home } from './modules/home';
import { recipes } from './modules/recipes';
import { renderAbout } from './modules/about';
import { footer_main } from './modules/footer';
import { mobile_menu } from './modules/mobile_menu';
import "../src/styles/main.css";


// Get the main div where HTML will be injected
const content = document.querySelector("#content");

// The RenderXpage function creates the elements needed for the page to load properly
function renderHomePage(){
    content.appendChild(header_main);
    content.appendChild(home);
    content.appendChild(footer_main);
}
function renderRecipesPage(){
    content.appendChild(header_main);
    content.appendChild(recipes);
    content.appendChild(footer_main);
}
function renderAboutPage(){
    content.appendChild(header_main);
    content.appendChild(renderAbout);
    content.appendChild(footer_main);
}
function renderMobileMenu(){
    content.appendChild(header_main);
    content.appendChild(mobile_menu);
    content.appendChild(footer_main);
}

// Function that handles the button events and render the page as needed using the required function

// This Function also checks if burger-menu is visible

document.addEventListener("click", (e)=>{
    const idBtn = e.target.id;

    switch(idBtn){
        case "homeBtn":
        case "homeBtnMobile":
            content.innerHTML = ""
            renderHomePage();
            break;
        case "aboutBtn":
        case "aboutBtnMobile":
            content.innerHTML = ""
            renderAboutPage();
            break;
        case "recipesBtn":
        case "toRecipes":
        case "recipesBtnMobile":
            content.innerHTML = ""
            renderRecipesPage();
            break;
        case "burguerVisible":
            content.innerHTML = ""
            renderMobileMenu();
            break


    }
})



// This renders home page by default for the moment
renderHomePage()


