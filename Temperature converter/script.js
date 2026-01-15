function convert() {
    let input = document.getElementById("inputTemp").value;
    let type = document.getElementById("type").value;

    if (input === "") {
        alert("Please enter a temperature value!");
        return;
    }

    input = parseFloat(input);
    let result = "";

    if (type === "C") {
        // Celsius → Fahrenheit
        result = (input * 9/5) + 32;
        document.getElementById("result").innerText = 
            `Result: ${result.toFixed(2)} °F`;
    } 
    else {
        // Fahrenheit → Celsius
        result = (input - 32) * 5/9;
        document.getElementById("result").innerText = 
            `Result: ${result.toFixed(2)} °C`;
    }
}
