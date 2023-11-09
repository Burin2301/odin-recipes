const header = document.createElement("div")

const content = `
<header>
<div class="header-left">
    <a href="#"><img class="header_logo" src="../assets/libro-de-recetas-freepik.png" alt=""></a>
    <a href="#" class="header_title">RECIPES :)</a>
</div>

<div class="burger_menu">
    <img src="../assets/barra-de-menus (1).png" alt="burguerMenu">
</div>

<ul class="header-list">
    <a href=""><li class="header-list-element">Home</li></a>
    <a href=""><li class="header-list-element">Menu</li></a>
    <a href=""><li class="header-list-element">About</li></a>
</ul>
</header>

`
header.innerHTML = content


export{ header as header_main}