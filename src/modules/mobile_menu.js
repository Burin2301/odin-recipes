const mobile_menu = document.createElement('div');
mobile_menu.classList.add('mobile_menu')
mobile_menu.id('mobileMenu')

const mobile_list = document.createElement('ul')
mobile_list.classList.add('mobile_ul')

const mobile_options_home = document.createElement('li')
mobile_options.classList.add('mobile_options')
mobile_options_home.id('homeBtn')

const mobile_options_recipes = document.createElement('li')
mobile_options.classList.add('mobile_options')
mobile_options_home.id('recipesBtn')

const mobile_options_about = document.createElement('li')
mobile_options.classList.add('mobile_options')
mobile_options_home.id('aboutBtn')

mobile_menu.appendChild(mobile_list)

mobile_list.appendChild(mobile_options_home)
mobile_list.appendChild(mobile_options_recipes)
mobile_list.appendChild(mobile_options_about)

export {mobile_menu}