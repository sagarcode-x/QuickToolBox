// Calculator 1
// What is X% of Y?

const percentValue =
    document.getElementById("percentValue");

const totalValue =
    document.getElementById("totalValue");

const calculatePercent =
    document.getElementById("calculatePercent");

const percentResult =
    document.getElementById("percentResult");


calculatePercent.addEventListener("click", function () {

    const percentage =
        Number(percentValue.value);

    const total =
        Number(totalValue.value);


    if (percentValue.value === "" ||
        totalValue.value === "") {

        alert("Please enter both values.");

        return;
    }


    const result =
        (percentage / 100) * total;


    percentResult.textContent =
        "Result: " + result;

});


// Calculator 2
// What percentage is X of Y?

const partValue =
    document.getElementById("partValue");

const wholeValue =
    document.getElementById("wholeValue");

const calculateWhatPercent =
    document.getElementById("calculateWhatPercent");

const whatPercentResult =
    document.getElementById("whatPercentResult");


calculateWhatPercent.addEventListener("click", function () {

    const part =
        Number(partValue.value);

    const whole =
        Number(wholeValue.value);


    if (partValue.value === "" ||
        wholeValue.value === "") {

        alert("Please enter both values.");

        return;
    }


    if (whole === 0) {

        alert("Total value cannot be zero.");

        return;
    }


    const result =
        (part / whole) * 100;


    whatPercentResult.textContent =
        "Result: " + result.toFixed(2) + "%";

});


// Calculator 3
// Percentage increase / decrease

const oldValue =
    document.getElementById("oldValue");

const newValue =
    document.getElementById("newValue");

const calculateChange =
    document.getElementById("calculateChange");

const changeResult =
    document.getElementById("changeResult");


calculateChange.addEventListener("click", function () {

    const oldNumber =
        Number(oldValue.value);

    const newNumber =
        Number(newValue.value);


    if (oldValue.value === "" ||
        newValue.value === "") {

        alert("Please enter both values.");

        return;
    }


    if (oldNumber === 0) {

        alert("Original value cannot be zero.");

        return;
    }


    const change =
        ((newNumber - oldNumber) / oldNumber) * 100;


    if (change > 0) {

        changeResult.textContent =
            "Increase: " + change.toFixed(2) + "%";

    } else if (change < 0) {

        changeResult.textContent =
            "Decrease: " +
            Math.abs(change).toFixed(2) +
            "%";

    } else {

        changeResult.textContent =
            "No change: 0%";

    }

});