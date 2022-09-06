const recipeFormn = document.querySelector(".recipes__search");

recipeFormn.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.getElementById("input__search");
    const apiKey = "1";
    const inputValue = userInput.value;
    console.log(inputValue);
    const recipesList = document.getElementById("result__list");
    const mainContent = document.querySelector("main");
    const apiUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?s=${inputValue}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const {meals} = data;
            console.log(data);
            for(let i = 0; i < meals.length; i++) {
                const li = document.createElement("li");
                li.classList.add("result__meal");
                const containerResultSearch = `
                <figure class="container__meal">
                    <img src="${meals[i].strMealThumb}" alt="Meal Thumnail" class="recipes__image">
                    <h3 class="name__recipes">${meals[i].strMeal}</h3>
                </figure>
                <figure class="container__country">
                    <img src="./assets/img/${meals[i].strArea}.png" alt="Recipe Country" class="flag__image">
                    <h2 class="name__flag">${meals[i].strArea}</h2>
                </figure>
                <button class="button__check" value=${i}>OPEN</button>
                `;
                li.innerHTML = containerResultSearch;
                recipesList.appendChild(li);
            }

            const buttons = document.querySelectorAll(".button__check");
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    const recipeDetail = document.createElement("section");
                    recipeDetail.classList.add("recipe__detail");
                    const container = document.createElement("div");
                    const recipeIngridients = `
                    <aside class="destail__recipe">
                    <h2>How to do it?</h2>
                    <p>
                        ${meals[button.value].strInstructions}
                    </p>
                    </aside>
                    <figure class="recipe__summary">
                        <h2 class="recipe__tittle">${meals[button.value].strMeal}</h2>
                        <img src="${meals[button.value].strMealThumb}" alt="Recipe Country" class="recipe__image">
                        <h3>Ingredients List</h3>
                        <ul class="recipe__ingridients">
                            <li class="recipe_ingridient">${meals[button.value].strIngredient1} ${meals[button.value].strMeasure1}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient2} ${meals[button.value].strMeasure2}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient3} ${meals[button.value].strMeasure3}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient4} ${meals[button.value].strMeasure4}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient5} ${meals[button.value].strMeasure5}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient6} ${meals[button.value].strMeasure6}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient7} ${meals[button.value].strMeasure7}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient8} ${meals[button.value].strMeasure8}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient9} ${meals[button.value].strMeasure9}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient10} ${meals[button.value].strMeasure10}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient11} ${meals[button.value].strMeasure11}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient12} ${meals[button.value].strMeasure12}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient13} ${meals[button.value].strMeasure13}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient14} ${meals[button.value].strMeasure14}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient15} ${meals[button.value].strMeasure15}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient16} ${meals[button.value].strMeasure16}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient17} ${meals[button.value].strMeasure17}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient18} ${meals[button.value].strMeasure18}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient19} ${meals[button.value].strMeasure19}</li>
                            <li class="recipe_ingridient">${meals[button.value].strIngredient20} ${meals[button.value].strMeasure20}</li>
                        </ul>
                    </figure>
                    `;
                    recipeDetail.innerHTML = recipeIngridients;
                    mainContent.appendChild(recipeDetail);
                    const itemList = document.querySelectorAll(".result__meal");
                    itemList.forEach(item => {
                        recipesList.removeChild(item);
                    })
                    const listIngridientsPrinted = document.querySelectorAll(".recipe_ingridient");
                    const masterList = document.querySelector(".recipe__ingridients");
                    listIngridientsPrinted.forEach(item => {
                        if(item.innerHTML === " ") {
                            masterList.removeChild(item);
                        }
                    })
                })
            })
        })
})
