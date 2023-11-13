const recipesContainer = document.createElement("div")
recipesContainer.classList.add("recipe-container")



const recipes = [
    {
        name: "Crispy Ginger Beef",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8335137.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
        link: "../src/recipes/crispy-ginger-beef.html"
    },
    {
        name: "Lasagna",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff5fb06bae980ae5f3bc67b14d71ff4f5%2F167322074749016732207242795520976048088202107.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
        link: "../src/recipes/lasagna.html"
    },
    {
        name: "Crispy Shrimp Tempura",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F418857.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
        link: "../src/recipes/crispy-shrimp-tempura.html"
    }
]

recipes.forEach((item)=>{

    const recipeCard = document.createElement("a")
    recipeCard.href = item.link
    recipeCard.classList.add("recipe-card")

    const name = item.name;
    const img = item.image;

    const recipeName = document.createElement("h3");
    recipeName.innerText = name
    recipeName.classList.add("recipeName");

    const recipeImg = document.createElement("img");
    recipeImg.src = img
    recipeImg.classList.add("recipeImg");

    const recipeBtn = document.createElement("h4")
    recipeBtn.innerText = "Go to Recipe"
    recipeBtn.classList.add("recipeBtn")

    recipeCard.appendChild(recipeName)
    recipeCard.appendChild(recipeImg)
    recipeCard.appendChild(recipeBtn)

    recipesContainer.appendChild(recipeCard)

    return recipeCard;

})








export { recipesContainer as recipes }