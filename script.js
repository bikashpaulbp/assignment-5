
document.getElementById("search-btn").addEventListener("click", function () {
    const getLink = document.getElementById("meal-input").value;
    const link = `https://www.themealdb.com/api/json/v1/1/search.php?f=${getLink}`
    

    fetch(link)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))


    function displayMeal(data) {
        const meals = data.map(data => data)
        // const mealNames = data.map(data => data.strMeal)
        // const mealImages = data.map(data => data.strMealThumb)
        console.log(meals);
        meals.forEach(meal => {
            const mealName = meal.strMeal;
            const imageLink = meal.strMealThumb;

            
            

            const parentDiv = document.getElementById("main-div");
            const childDiv = document.createElement("div")
            parentDiv.appendChild(childDiv);

            childDiv.style.width = "250px";
            childDiv.style.height = "200px";
            childDiv.style.border = "1px solid gray";
            childDiv.style.margin = "10px 10px";
            childDiv.style.borderRadius = "10px";
            childDiv.style.boxShadow = "5px 5px 10px green";
            childDiv.style.cursor = "pointer";

            const mealImage = document.createElement("img");
            mealImage.setAttribute('src', imageLink);
            mealImage.style.width = "200px";
            mealImage.style.height = "150px";
            mealImage.style.paddingTop = "10px";
            mealImage.style.paddingBottom = "10px";
            mealImage.style.paddingLeft = "20px"
            childDiv.appendChild(mealImage);

        });


        
    }
})

