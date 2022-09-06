const recipeFormn = document.querySelector(".recipes__search");

recipeFormn.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.getElementById("input__search");
    const apiKey = "1";
    const inputValue = userInput.value;
    console.log(inputValue);
    const recipesList = document.getElementById("result__list");
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
                <p>${meals[i].strArea}</p>
                <aside class="buttons_interface">
                    <button class="button__check">Check Recipe</button>
                </aside>
                `;
                li.innerHTML = containerResultSearch;
                recipesList.appendChild(li);
            }
        })
})
