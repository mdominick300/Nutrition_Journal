let foodCalorieCount = 0;
let exerciseCalorieCount = 0;
let value1
let total = 0
let dayChange = 0

$(document).ready(function () {

  $.get('/api/exercises').then(function (data) {

    console.log(Date())
    var today = new Date();
    today.setDate(today.getDate()-dayChange);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    let displayDate = mm +'/'+dd+'/'+yyyy
    $("#displayDate").append(displayDate);
    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {

        if (data[i].date === today) {
          exerciseCalorieCount = exerciseCalorieCount + data[i].calories_burned
          console.log(exerciseCalorieCount)
          var row = $("<div class='columns' id='removeExercise'>");

          
          row.append("<p class='column' style='text-indent: 10px;'>" + data[i].exercise_name + " (" + data[i].duration + "min)</p>" + "<span class='column' style='color:green';>" + data[i].calories_burned + "</p>");
          $(".exercisePost").prepend(row);


        }
      }
    }

  });
  $.get('/api/foods').then(function (data) {

    var today = new Date();
    today.setDate(today.getDate()-dayChange);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {

        if (data[i].date === today) {
          foodCalorieCount = foodCalorieCount + data[i].calories
          console.log(foodCalorieCount);
          var row = $("<div class='columns' id='removeFood'>");
        
          row.append("<p class='column' style='text-indent: 10px;'>" + data[i].food_name + " (" + data[i].servings + " servings)</p>" + "<p class='column' style='color:red';>" + data[i].calories + "</p>");

          $(".foodPost").prepend(row);

        }
      }
    }
    call()
    $("#caloriesremaining").text(total)

  });
});

function call() {
  value1 = $("#startcalorie").text();
  total = parseInt(value1) + exerciseCalorieCount - foodCalorieCount;
  if (total < 0) {
    $("#caloriesremaining").css("color", "red")
  }
}
function reset(){
  exerciseCalorieCount = 0
  foodCalorieCount = 0
}

function changeDay(){
  reset()
dayChange = dayChange + 1
console.log(dayChange)
$.get('/api/exercises').then(function (data) {

  console.log(Date())
  var today = new Date();
  today.setDate(today.getDate()-dayChange);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  
  let displayDate = mm +'/'+dd+'/'+yyyy
  $("#displayDate").replaceWith(`<p id='displayDate'>${displayDate}</p>`);
  $(".exercisePost").empty();
  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      if (data[i].date === today) {
        exerciseCalorieCount = exerciseCalorieCount + data[i].calories_burned
        console.log(exerciseCalorieCount)

        var row = $("<div class='columns' id='removeExercise'>");
        row.append("<p class='column' style='text-indent: 10px;'>" + data[i].exercise_name + " (" + data[i].duration + "min)</p>" + "<span class='column' style='color:green';>" + data[i].calories_burned + "</p>");
        $(".exercisePost").prepend(row);
      }
    }
  }

});
$.get('/api/foods').then(function (data) {

  var today = new Date();
  today.setDate(today.getDate()-dayChange);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);

  $(".foodPost").empty();
  if (data.length !== 0) {
    
    for (var i = 0; i < data.length; i++) {

      if (data[i].date === today) {
        foodCalorieCount = foodCalorieCount + data[i].calories
        console.log(foodCalorieCount);
        
        var row = $("<div class='columns' id='removeFood'>");
        row.append("<p class='column' style='text-indent: 10px;'>" + data[i].food_name + " (" + data[i].servings + " servings)</p>" + "<p class='column' style='color:red';>" + data[i].calories + "</p>");
        $(".foodPost").prepend(row);

      }
    }
  }
  
  call()
  $("#caloriesremaining").text(total)
});
}

function changeDayForward(){
  reset()
  dayChange = dayChange - 1
  console.log(dayChange)
  $.get('/api/exercises').then(function (data) {
  
    console.log(Date())
    var today = new Date();
    today.setDate(today.getDate()-dayChange);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
  
    today = yyyy + '-' + mm + '-' + dd;
    
    let displayDate = mm +'/'+dd+'/'+yyyy
    $("#displayDate").replaceWith(`<p id='displayDate'>${displayDate}</p>`);
    $(".exercisePost").empty();
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        if (data[i].date === today) {
          exerciseCalorieCount = exerciseCalorieCount + data[i].calories_burned
          console.log(exerciseCalorieCount)
  
          var row = $("<div class='columns' id='removeExercise'>");
          row.append("<p class='column' style='text-indent: 10px;'>" + data[i].exercise_name + " (" + data[i].duration + "min)</p>" + "<span class='column' style='color:green';>" + data[i].calories_burned + "</p>");
          $(".exercisePost").prepend(row);
        }
      }
    }
  
  });
  $.get('/api/foods').then(function (data) {
  
    var today = new Date();
    today.setDate(today.getDate()-dayChange);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
  
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
  
    $(".foodPost").empty();
    if (data.length !== 0) {
      
      for (var i = 0; i < data.length; i++) {
  
        if (data[i].date === today) {
          foodCalorieCount = foodCalorieCount + data[i].calories
          console.log(foodCalorieCount);
          
          var row = $("<div class='columns' id='removeFood'>");
          row.append("<p class='column' style='text-indent: 10px;'>" + data[i].food_name + " (" + data[i].servings + " servings)</p>" + "<p class='column' style='color:red';>" + data[i].calories + "</p>");
          $(".foodPost").prepend(row);
  
        }
      }
    }
    call()
    $("#caloriesremaining").text(total)
  
  });
  }
