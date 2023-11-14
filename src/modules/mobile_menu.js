const mobile_menu = document.createElement('div');
mobile_menu.classList.add('mobile_menu')
mobile_menu.setAttribute("id",'mobileMenu');

const mobile_list = document.createElement('ul')
mobile_list.classList.add('mobile_ul')

const mobile_options_home = document.createElement('li')
mobile_options_home.classList.add('mobile_option')
mobile_options_home.innerText = "Home"
mobile_options_home.setAttribute("id",'homeBtnMobile');

const mobile_options_recipes = document.createElement('li')
mobile_options_recipes.classList.add('mobile_option')
mobile_options_recipes.innerText = "Recipes"
mobile_options_recipes.setAttribute('id','recipesBtnMobile');

const mobile_options_about = document.createElement('li')
mobile_options_about.classList.add('mobile_option')
mobile_options_about.innerText = "About"
mobile_options_about.setAttribute('id','aboutBtnMobile');

mobile_menu.appendChild(mobile_list)

mobile_list.appendChild(mobile_options_home)
mobile_list.appendChild(mobile_options_recipes)
mobile_list.appendChild(mobile_options_about)

export {mobile_menu}