//let resourceHTML = ""

//resources.map(resource => resourceHTML += `)

/*const menu = document.getElementById("menu")
const main = document.querySelector("main")
//hente kategorier fra ressurser
const categories = resources.map(resource => resource.category)

menu.innerHTML = ""
//lage <li> elementer og append til menu
categories.forEach(category => {
    const li = document.createElement("li")
    li.textContent = category
    li.setAttribute("data-category", category)
    li.classList.add("tab")
    menu.appendChild(li)
})
//Laget en funksjon her for å vise ressurser basert på kategorier
function displayMenu(category) {
    const selectedResources = resources.filter(resource => resource.category === category)

    main.innerHTML = selectedResources.map(resource => `
        <section>
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
            </ul>
            </section>
            `).join('')
}

//Laget eventlisteners for clikable tabs
menu.addEventListener("click", (Event) => {
    console.log("Tab clicked", Event.target)
    if (Event.target.tagName === "LI") {
        const selectedCategory = Event.target.getAttribute("data-category")
        console.log("Selected category:", selectedCategory)

        if (selectedCategory) {
        displayMenu(selectedCategory)
        //Fjerne "active" class fra alle tabs
        document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"))

        //sett "active" class til den tab som er clicked
        Event.target.classList.add("active")
        }     
    }
})

//Vis HTML-kategorien som standard ved sidelasting
displayMenu("HTML")
//Satt HTML som active tab
document.querySelector(`li[data-category="HTML"]`)?.classList.add("active")

console.log("Menu laget:" , categories)*/

let resourceHTML = ""

resources.map(resource => { resourceHTML += `
   <button class="tab" onclick="showContent('${resource.category}')" >${resource.category}</button>
   `
})

document.getElementById("menu").innerHTML = resourceHTML

function showContent(categoryname) {
    const filter = resources.filter(resource => resource.category === categoryname)
    const selectedCategory = filter[0]
    const contentHTML = `
            <h2 id="header">${selectedCategory.category}</h2>
            <p id = "text">${selectedCategory.text}</p>
            <nav id= "srclinks">
                <ul>
                    ${selectedCategory.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`)
                .join('')}
                </ul>
            </nav>
         `
const contentContainer = document.getElementById("contentVisible")
contentContainer.innerHTML = contentHTML

contentContainer.classList.add("content-box")

document.getElementById("contentVisible").innerHTML = contentHTML
document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"))
document.querySelector(`button[onclick="showContent('${categoryname}')"]`).classList.add("active")

}

showContent("HTML")