
const renderRecipes = (recipes) => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    recipes.forEach(rep => {
        const card = document.createElement('div')
        card.className = 'card'

        card.innerHTML = `
           <div class="card-content">
                <img src="${rep.image}">
                    <h3 class="food-name">${rep.title}</h3>
                    <p class="ingre"><strong>Ingredients:</strong>
                        ${rep.extendedIngredients.map(x => x.name)}
                    </p>
                    <div class="link">
                        <a href="${rep.sourceUrl}">VIEW RECIPE</a>
                    </div>
                </div>`;
        container.appendChild(card);
    })
}

const fetchData = async () => {
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const recipes = data.recipes;
        renderRecipes(recipes);
    } catch (error) {
        console.error("Error fetching", error);
    }
}

fetchData();