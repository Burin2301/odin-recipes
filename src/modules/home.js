const homePage = document.createElement('div')
homePage.classList.add("home-container")
const homeContent = `
        <h2 class="home-title">Welcome to Recipes :)</h2>
        <p class="home-intro">
            This page was created for us to share our best recipes for all situations!.
            <br>
            It could be that dessert that makes you feel happy and energized,
            <br>
            that special tea you drink and makes you feel at home,
            <br>
            that chicken dish you grandma used to cook that always made you want more!
            <br>
            Share that recipe with us and let us become a great community that shares the best dishes we had ever taste!
        </p>
        <button class="home-button" id="toRecipes">Go to the recipe list</button>
`

homePage.innerHTML = homeContent

export { homePage as home }