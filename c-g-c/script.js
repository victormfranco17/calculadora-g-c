       // Get the form element
       var form = document.getElementById("body-fat-form");

       // Add an event listener to the form submit
       form.addEventListener("submit", function(event) {
         // Prevent the default form submit action
         event.preventDefault();
       
         // Get the form input values
         var weight = Number(document.getElementById("weight").value);
         var height = Number(document.getElementById("height").value);
         var age = Number(document.getElementById("age").value);
         var gender = Number(document.getElementById("gender").value);
       
         // Validate the input values
         if (weight <= 0 || height <= 0 || age <=0 || gender == "") {
           // Show an alert message if any input is invalid
           alert("Por favor, ingresa valores válidos para todos los campos.");
           return;
         }
       
         // Calculate the body mass index (BMI) using the formula of Quetelet
         var bmi = weight / ((height /100) * (height /100));
       
         // Calculate the body fat percentage (BFP) using the formula of Deurenberg et al.
         var bfp = (1.2 * bmi) + (0.23 * age) - (10.8 * gender) -5.4;
       
         // Round the BFP value to one decimal place
         bfp = bfp.toFixed(1);
       
         // Get the result element
         var result = document.getElementById("result");
       
         // Display the result in the result element
       result.textContent = "Tu porcentaje de grasa corporal es de " + bfp + "%.";
       });