const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

const categoriesTitle = categoriesItem.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const qty = item.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${qty}`);
    
    
})






