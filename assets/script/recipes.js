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
                    const container = document.createElement("div");
                    recipeDetail.classList.add("recipe__detail");
                    const recipeIngridients = `
                    <p>
                        ${meals[button.value].strInstructions}
                    </p>
                    `;
                    container.innerHTML = recipeIngridients;
                    recipeDetail.appendChild(container);
                    mainContent.appendChild(recipeDetail);
                    const itemList = document.querySelectorAll(".result__meal");
                    itemList.forEach(item => {
                        recipesList.removeChild(item);
                    })
                })
            })
        })
})
