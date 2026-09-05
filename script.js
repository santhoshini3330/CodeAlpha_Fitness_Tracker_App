// Daily step goal
const STEP_GOAL = 10000;


// Get saved data from localStorage
let fitnessData = JSON.parse(
    localStorage.getItem("fitnessData")
);


// If there is no saved data
if (!fitnessData) {

    fitnessData = {
        steps: 0,
        calories: 0,
        workout: 0
    };
}


// Display data on the screen
function updateDashboard() {

    document.getElementById("stepsDisplay").textContent =
        fitnessData.steps;

    document.getElementById("caloriesDisplay").textContent =
        fitnessData.calories;

    document.getElementById("workoutDisplay").textContent =
        fitnessData.workout;


    // Calculate progress
    let percentage =
        (fitnessData.steps / STEP_GOAL) * 100;


    if (percentage > 100) {
        percentage = 100;
    }


    document.getElementById("progress").style.width =
        percentage + "%";


    document.getElementById("progressText").textContent =
        Math.round(percentage) + "% completed";


    // Summary
    document.getElementById("summaryText").textContent =
        "You walked " +
        fitnessData.steps +
        " steps, burned " +
        fitnessData.calories +
        " calories, and completed " +
        fitnessData.workout +
        " minutes of workout today.";
}


// Add fitness data
function addFitnessData() {

    let steps =
        document.getElementById("steps").value;

    let calories =
        document.getElementById("calories").value;

    let workout =
        document.getElementById("workout").value;


    // Check whether values are entered
    if (
        steps === "" &&
        calories === "" &&
        workout === ""
    ) {

        alert("Please enter your fitness data.");

        return;
    }


    // Update values
    if (steps !== "") {

        fitnessData.steps =
            parseInt(steps);
    }


    if (calories !== "") {

        fitnessData.calories =
            parseInt(calories);
    }


    if (workout !== "") {

        fitnessData.workout =
            parseInt(workout);
    }


    // Save data
    localStorage.setItem(
        "fitnessData",
        JSON.stringify(fitnessData)
    );


    // Clear inputs
    document.getElementById("steps").value = "";

    document.getElementById("calories").value = "";

    document.getElementById("workout").value = "";


    updateDashboard();


    alert("Fitness data saved successfully!");
}


// Reset data
function resetData() {

    let confirmation =
        confirm("Are you sure you want to reset today's data?");


    if (confirmation) {

        fitnessData = {
            steps: 0,
            calories: 0,
            workout: 0
        };


        localStorage.removeItem("fitnessData");


        updateDashboard();


        alert("Today's data has been reset.");
    }
}


// Load dashboard when the app opens
updateDashboard();