const categoriesRef = document.querySelector('#categories');
const items = categoriesRef.children;

 console.log(`Number of categories: ${items.length}`);

function findCategory() {
    const categoriesItemsRef = document.querySelectorAll('.item');
    categoriesItemsRef.forEach(category => {
        
        const categoryName = category.firstElementChild.textContent;
        const subCategoryAmount = category.lastElementChild.children.length;
        console.log('Category: ' + categoryName);
        console.log('Elements: ' + subCategoryAmount);
    })
}

findCategory();