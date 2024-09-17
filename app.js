function CallFoodData(searchTerm) {
    //const searchTerm = 'Potato';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        const data_Object = localStorage.getItem("data_Object") || 0;
        localStorage.setItem("data_Object", data.meals);
        let text = " <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>";
        for (let x in data.meals) {
          text += "<div class='card bg-base-100 w-80 md:w-96 lg:w-72 h-96 md:h-96 lg:h-400px shadow-xl'>";
          text += "<figure class='px-10 pt-10'><img src='" + data.meals[x]['strMealThumb'] + "' alt='Shoes'class='rounded-xl'  /></figure>";
          text += "<div class='card-body items-left text-left'><h3 class='card-title'>" + data.meals[x]['strMeal'].substr(0, 20) + "..." + "</h3>";
          text += "<p>" + data.meals[x]['strInstructions'].substr(0, 50) + "..." + "</p>";
          text += "<div class='card-actions justify-end'><button class='btn btn-info' onclick='my_modal_3.showModal()' id='btn'+ x+'details'>Details</button> </div>";
          text += "</div></div>";         
          //console.log('btn'+ x+'details');
          document.getElementById("modal_meal").innerHTML = "<b>Meal:</b><i> " +data.meals[x]['strMeal']+"</i>";
          document.getElementById("modal_category").innerHTML = "<b>Category:</b><i> " +data.meals[x]['strCategory']+"</i>";
          document.getElementById("modal_area").innerHTML = "<b>Area:</b><i> " +data.meals[x]['strArea']+"</i>";
          document.getElementById("modal_instructions").innerHTML = "<b>Instructions:</b><i> "+data.meals[x]['strInstructions']+"</i>";
        }
        text += "</div>"
        document.getElementById("container").innerHTML = text;
        //const myJSON = JSON.stringify(data_Object);
        var data = JSON.parse(JSON.stringify(data_Object));
        console.log(data);
       
        console.log('typeof retrievedObject: ' + typeof data_Object);
        console.log('Value of retrievedObject: ' + data_Object);

      }
      )
      .catch(error => console.error(error));

    //Large Device lg
    if (searchTerm == 'Potato') {
      document.getElementById("potato").style.backgroundColor = "tomato";
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("vegetarian").style.backgroundColor = null;
      document.getElementById("seafood").style.backgroundColor = null;
      document.getElementById("potato").style.borderRadius = "10px";
    }
    if (searchTerm == 'Soup') {
      document.getElementById("soup").style.backgroundColor = "tomato";
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("vegetarian").style.backgroundColor = null;
      document.getElementById("seafood").style.backgroundColor = null;
      document.getElementById("soup").style.borderRadius = "10px";
    }
    if (searchTerm == 'Chicken') {
      document.getElementById("chicken").style.backgroundColor = "tomato";
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("vegetarian").style.backgroundColor = null;
      document.getElementById("seafood").style.backgroundColor = null;
      document.getElementById("chicken").style.borderRadius = "10px";
    }
    if (searchTerm == 'Beef') {
      document.getElementById("beef").style.backgroundColor = "tomato";
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("vegetarian").style.backgroundColor = null;
      document.getElementById("seafood").style.backgroundColor = null;
      document.getElementById("beef").style.borderRadius = "10px";
    }
    if (searchTerm == 'Vegetarian') {
      document.getElementById("vegetarian").style.backgroundColor = "tomato";
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("seafood").style.backgroundColor = null;
      document.getElementById("vegetarian").style.borderRadius = "10px";
    }
    if (searchTerm == 'Seafood') {
      document.getElementById("seafood").style.backgroundColor = "tomato";
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("vegetarian").style.backgroundColor = null;
      document.getElementById("seafood").style.borderRadius = "10px";
    }

    //Large Device sm and md
    if (searchTerm == 'Potato') {
      document.getElementById("potato_sm").style.backgroundColor = "tomato";
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("potato_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Soup') {
      document.getElementById("soup_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Chicken') {
      document.getElementById("chicken_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Beef') {
      document.getElementById("beef_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Vegetarian') {
      document.getElementById("vegetarian_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Seafood') {
      document.getElementById("seafood_sm").style.backgroundColor = "tomato";
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.borderRadius = "10px";
    }

  }