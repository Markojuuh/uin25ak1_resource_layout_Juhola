//laget menu/tab buttons dynamisk her
let resourceHTML = ""

resources.map(resource => { resourceHTML += `
   <button class="tab" onclick="showContent('${resource.category}')" >${resource.category}</button>
   `
})

document.getElementById("menu").innerHTML = resourceHTML
//laget en funksjon for å vise innholdet i html fra valgt categorrier fra resusser
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
//Laget en contentContainer her
const contentContainer = document.getElementById("contentVisible")
contentContainer.innerHTML = contentHTML

contentContainer.classList.add("content-box")

document.getElementById("contentVisible").innerHTML = contentHTML
//Fjernet "active" fra alle tabs og satt for bare den som er klikket på
document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"))
document.querySelector(`button[onclick="showContent('${categoryname}')"]`).classList.add("active")

}
//vise HTML category som default når siden lastes opp
showContent("HTML")