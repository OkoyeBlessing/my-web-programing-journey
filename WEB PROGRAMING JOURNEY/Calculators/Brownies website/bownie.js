document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calorieForm");
    const results = document.getElementById("results");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const gender = document.getElementById("gender").value;
        const age = parseInt(document.getElementById("age").value);
        const height = parseInt(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);

        let calorieNeeds = 0;

        if (gender === "female") {
            calorieNeeds = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        } else if (gender === "male") {
            calorieNeeds = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }

        // Prompt user for additional information
        const name = prompt("Please enter your name:");
        const location = prompt("Please enter your location:");
        const phone = prompt("Please enter your phone number:");

        // Display results
        results.innerHTML = `
            <h2>Calorie Needs</h2>
            <p>Name: ${name}</p>
            <p>Location: ${location}</p>
            <p>Phone: ${phone}</p>
            <p>Calories Needed Per Day: ${calorieNeeds.toFixed(0)} cals</p>
        `;
    });
});
