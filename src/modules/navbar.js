import logo from "../assets/libro-de-recetas-freepik.png"
import burgerMenu from "../assets/barra-menu.png"

const header = document.createElement("div")

const content = `
<header>
<div class="header-left">
    <a href="#"><img class="header_logo" src="${logo}" alt=""></a>
    <a href="#" class="header_title">RECIPES :)</a>
</div>

<div class="burger_menu">
    <img src="${burgerMenu}" alt="burguerMenu">
</div>

<ul class="header-list">
    <li id="homeBtn" class="header-list-element">Home</li>
    <li id="recipesBtn" class="header-list-element">Recipes</li>
    <li id="aboutBtn" class="header-list-element">About</li>
</ul>
</header>

`
header.innerHTML = content


export{ header as header_main}