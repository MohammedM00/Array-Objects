// Add the randomMeal function
const randomMeal = function() {
    // Get a random number between 0 and the length of the array, meals
    let mealNumber = Math.floor(Math.random() * meals.length);
  
    showMeal(mealNumber);
  };
  
  // Add the showMeal function
  const showMeal = (mealNumber) => {
    // Create a template literal to display the meal information
    const str = `
  Start with ${meals[mealNumber].starter},
  followed by ${meals[mealNumber].main},
  and finish off your meal with ${meals[mealNumber].dessert}.
  `;
  
    // Get the area element where the meal information will be displayed
    const area = document.querySelector('.randomMeal');
  
    // Set the innerHTML of the area element to the template literal
    area.innerHTML = str;
  };
  