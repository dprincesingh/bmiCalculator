const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#Height").value);
    const results = document.querySelector("#results");
    const bmi = ((weight) / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: ${bmi}`;

});
