const birthDate =
    document.getElementById("birthDate");

const calculateButton =
    document.getElementById("calculateAge");

const ageResult =
    document.getElementById("ageResult");

const yearsElement =
    document.getElementById("years");

const monthsElement =
    document.getElementById("months");

const daysElement =
    document.getElementById("days");


calculateButton.addEventListener("click", function () {

    const birth = new Date(birthDate.value);

    const today = new Date();


    // Check date

    if (!birthDate.value) {

        alert("Please enter your date of birth.");

        return;
    }


    // Check future date

    if (birth > today) {

        alert("Date of birth cannot be in the future.");

        return;
    }


    let years =
        today.getFullYear() -
        birth.getFullYear();

    let months =
        today.getMonth() -
        birth.getMonth();

    let days =
        today.getDate() -
        birth.getDate();


    // Adjust days

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }


    // Adjust months

    if (months < 0) {

        years--;

        months += 12;
    }


    // Show result

    yearsElement.textContent = years;

    monthsElement.textContent = months;

    daysElement.textContent = days;

    ageResult.style.display = "block";

});