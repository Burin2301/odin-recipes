const aboutContainer = document.createElement("div")
aboutContainer.classList.add("about-container")

const titleContent = "About RECIPES 😀"
const aboutTitle = document.createElement("h2")
aboutTitle.textContent = titleContent
aboutTitle.classList.add("about-title")

const developerContent = "Developed by <span class='about-span'>Burin2301</span>"
const aboutDeveloper = document.createElement("p")
aboutDeveloper.innerHTML = developerContent
aboutDeveloper.classList.add("about-developer")

const githubContent = 'Github: <a class="github_link" href="https://github.com/Burin2301"><span>Profile</span></a>'
const aboutGitHub = document.createElement('p')
aboutGitHub.innerHTML = githubContent
aboutGitHub.classList.add("about-github")

const aboutTextContent = `
Created with Webpack, HTML, CSS and vanilla JavaScript as a part of The Odin Project Curriculum.
Basically this is a project where I am using knowledge that I have acquired in all of these months.
I have created a youtube channel to track all of my progress, haven't uploaded anything but well
I have to learn how to edit video first xDD . `
const aboutText = document.createElement('p')
aboutText.classList.add("about-text")
aboutText.innerText = aboutTextContent


aboutContainer.appendChild(aboutTitle)
aboutContainer.appendChild(aboutDeveloper)
aboutContainer.appendChild(aboutGitHub)
aboutContainer.appendChild(aboutText)

export{ aboutContainer as renderAbout}
