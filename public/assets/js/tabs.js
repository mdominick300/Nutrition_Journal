var userId = $(".user-name")
document.querySelectorAll("#nav li").forEach(function(navEl) {
    navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
  });
  
  function toggleTab(selectedNav, targetId) {
    var navEls = document.querySelectorAll("#nav li");
  
    navEls.forEach(function(navEl) {
      if (navEl.id == selectedNav) {
        navEl.classList.add("is-active");
      } else {
        if (navEl.classList.contains("is-active")) {
          navEl.classList.remove("is-active");
        }
      }
    });
  
    var tabs = document.querySelectorAll(".tab-pane");
  
    tabs.forEach(function(tab) {
      if (tab.id == targetId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }


foodButton = document.querySelector("#foodButton")
  
if (foodButton) {
  foodButton.addEventListener("click", function (event) {

      event.preventDefault();
      foodSearch = $('#input').val();
      
      if(foodSearch !== ''){
        foodAjax()
        picture();
        document.querySelector(".foodSrchInfo").classList.remove('hidden');
      } else alert("Enter a Food!")


      // console.log(foodSearch);
      
      
  })
};

workoutButton = document.querySelector("#workoutButton")
 
if (workoutButton) {
  workoutButton.addEventListener("click", function (event) {
      event.preventDefault();

      workout = $('#workout').val().trim();
      time = $('#time').val().trim();
      exeInput = workout +" "+ time +" minutes"
      if(workout !== '' && time !== ''){
        workoutInfo();
      } else alert("Enter all info!")

      
      // console.log(today);
      // console.log(workout);
      

  })
};

exerciseLogButton = document.querySelector("#exerciseLog")
  
if (exerciseLogButton) {
  exerciseLogButton.addEventListener("click", function (event) {

      event.preventDefault();
      
      // console.log(time);
      // console.log(workout);
      // console.log(exeInput)
      // console.log(inverseToday);
      // console.log(calories)
      
      
      handleFormSubmit();
      exerciseSubmitted();
  })
};

// A function for handling what happens when the form to create a new post is submitted
function handleFormSubmit() {

  // Constructing a newPost object to hand to the database
  var newPost = {
    exercise_name: workout,
    duration: time,
    calories_burned: calories.toFixed(0),
    date: inverseToday,
    UserId: userId.data('name')


  };


  // console.log(newPost);

    submitPost(newPost);

}
// Submits a new post and brings user to blog page upon completion
function submitPost(post) {
  // console.log(post);
  $.post("/api/exercises", post
    
  )};
// Initialize all elements with carousel class.
// const carousels = bulmaCarousel.attach('.carousel', options);


  foodLogButton = document.querySelector("#logButton")
  
if (foodLogButton) {
  foodLogButton.addEventListener("click", function (event) {

      event.preventDefault();
    
      
      submitFood();

  })
};

function submitFood() {

  // Constructing a newPost object to hand to the database
  var newPost = {
    food_name: foodSearch,
    servings: serving,
    calories: calories,
    date: today,
    UserId: userId.data('name')


  };


  // console.log(newPost);
  foodSubmitted()
    submitPostFood(newPost);

}
// Submits a new post and brings user to blog page upon completion
function submitPostFood(post) {
  // console.log(post);
  $.post("/api/foods", post
    
  )};


function exerciseSubmitted() {
  document.querySelector(".exerciseInfo").classList.add('hidden');
  document.querySelector(".exerciseSubmit").classList.remove('hidden');
}

function foodSubmitted(){
  document.querySelector(".foodSrchInfo").classList.add('hidden');
  document.querySelector(".foodSubmit").classList.remove('hidden');
}

