
document.getElementById("search-btn").addEventListener("click", function () {



    const getLink = document.getElementById("meal-input").value;

    if (isNaN(getLink) && getLink.length < 2) {

        const link = `https://www.themealdb.com/api/json/v1/1/search.php?f=${getLink}`
        fetch(link)
            .then(res => res.json())
            .then(data => displayMeal(data.meals))


        function displayMeal(data) {
            const meals = data.map(data => data)

            meals.forEach(meal => {
                const mealName = meal.strMeal;
                const imageLink = meal.strMealThumb;




                const parentDiv = document.getElementById("main-div");
                const childDiv = document.createElement("div")
                parentDiv.appendChild(childDiv);

                childDiv.style.width = "250px";
                childDiv.style.height = "230px";
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
                mealImage.style.paddingLeft = "20px";
                childDiv.appendChild(mealImage);


                const hTag = document.createElement("h6");
                hTag.innerText = mealName;
                hTag.style.color = "red ";
                hTag.style.textAlign = "center";
                childDiv.appendChild(hTag);


                childDiv.addEventListener("click", function () {
                    const mealNameLink = mealName;
                    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealNameLink}`
                    fetch(url)
                        .then(res => res.json())
                        .then(data => displayMealDetail(data.meals))
                });

            });

            function displayMealDetail(data) {
                const detailMeals = data.map(data => data)
                detailMeals.forEach(meal => {
                    const mealName = meal.strMeal;
                    const imageLink = meal.strMealThumb;

                    const parentDiv = document.getElementById("detail-div");
                    const childDiv = document.createElement("div");

                    parentDiv.appendChild(childDiv);

                    childDiv.style.position = "center"
                    childDiv.style.width = "400px";
                    childDiv.style.height = "1000px";
                    childDiv.style.border = "1px solid gray";
                    childDiv.style.margin = "10px 10px";
                    childDiv.style.borderRadius = "10px";
                    childDiv.style.boxShadow = "5px 5px 10px blue";
                    childDiv.style.cursor = "pointer";

                    const mealImage = document.createElement("img");
                    mealImage.setAttribute('src', imageLink);
                    mealImage.style.width = "300px";
                    mealImage.style.height = "150px";
                    mealImage.style.paddingTop = "10px";
                    mealImage.style.paddingBottom = "10px";
                    mealImage.style.paddingLeft = "30%";
                    childDiv.appendChild(mealImage);


                    const hTag = document.createElement("h6");
                    hTag.innerText = mealName;
                    hTag.style.color = "red ";
                    hTag.style.textAlign = "center";
                    childDiv.appendChild(hTag);

                    const hTag2 = document.createElement("h6");
                    hTag2.innerText = "Ingredient: ";
                    hTag2.style.color = "black ";
                    hTag2.style.textAlign = "center";
                    childDiv.appendChild(hTag2);

                    if (meal.strIngredient1 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient1;
                    }



                    if (meal.strIngredient2 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient2;
                    }


                    if (meal.strIngredient3 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient3;
                    }


                    if (meal.strIngredient4 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient4;
                    }


                    if (meal.strIngredient5 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient5;
                    }

                    if (meal.strIngredient6 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient6;
                    }

                    if (meal.strIngredient7 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient7;
                    }

                    if (meal.strIngredient8 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient8;
                    }

                    if (meal.strIngredient9 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient9;
                    }

                    if (meal.strIngredient10 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient10;
                    }

                    if (meal.strIngredient11 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient11;
                    }

                    if (meal.strIngredient12 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient12;
                    }

                    if (meal.strIngredient13 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient13;
                    }

                    if (meal.strIngredient14 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient14;
                    }

                    if (meal.strIngredient15 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient15;
                    }

                    if (meal.strIngredient16 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient16;
                    }

                    if (meal.strIngredient17 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient17;
                    }

                    if (meal.strIngredient18 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient18;
                    }

                    if (meal.strIngredient19 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient19;
                    }


                    if (meal.strIngredient20 === "") {

                    }
                    else {

                        const parentUl = document.getElementById("detail-ul");
                        childDiv.appendChild(parentUl);
                        const childList = document.createElement("li");
                        parentUl.appendChild(childList);
                        childList.innerText = meal.strIngredient20;
                    }




                });
            }



        }


    }
    else if (getLink.length > 1) {
        alert("please input one letter");
    }
    else {
        alert("please input first letter");
    }





})

