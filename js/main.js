console.log("JS fil add")

const bodyTag = document.querySelector("body")

bodyTag.innerHTML += `
<section id="groceries">
   <h2>Groceries</h2>
   <ul id="groceryList"></ul>
</section>
`

let groceryItems = ["apples", "bananas", "milk", "eggs", "bread", "dog food"]
const groceryUl = document.getElementById("groceryList")

// want to items one by one --- add "item of" (for what coming from where)
for(item of groceryItems){
    groceryUl.insertAdjacentHTML("beforeend", `<li>${item}</Li>`)
}

