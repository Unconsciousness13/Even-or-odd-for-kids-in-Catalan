function calculate() {
    const inputValue = document.querySelector("#number");
    const resultValue = document.getElementById("result");
    const resultButton = document.getElementById("buttCalc");
    resultButton.addEventListener("click", calcule);

    function calcule(e) {
        e.preventDefault();
        let result = '';
        if (!inputValue.value == "" || !inputValue.value === "string") {
            if (inputValue.value % 2 == 0) {
                result = `El número ${inputValue.value} és parell
                `
            } else if (inputValue.value % 2 == 1) {
                result = `El número ${inputValue.value} és senar`
            } else if (inputValue.value % -2 == -1) {
                result = `El número ${inputValue.value} és senar`
            } else {
                result = `No és número !`
            }

        }
        inputValue.value = ''
        resultValue.textContent = result;
    }
}