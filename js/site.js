//get range values from The App page
//Start / controller function
function getValues(){
    //get values from the page
    let startingValue = document.getElementById("startingValue").value;
    let endingValue = document.getElementById("endingValue").value;
    //parse values into integers
    startingValue = parseInt(startingValue);
    endingValue = parseInt(endingValue);
    

    if(Number.isInteger(startingValue) && Number.isInteger(endingValue)){
        //call generateNumbers
        numbers = generateNumbers(startingValue, endingValue);
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("Error: Values Entered Must Be Integers")
    }

}

//generate the numbers from the startingValue to endingValue
//logic function(s)
function generateNumbers(sValue, eValue){
    let numbers = [];
    for (let i = sValue; i <= eValue; i++){
        numbers.push(i);
    }
    return numbers;
}

//display the numbers and mark even numbers bold
//display or view function
function displayNumbers(numbers){

    let templateRows = "";

    for(let i = 0; i < numbers.length; i++){

        let className = "even";

        let number = numbers[i];

        if(number % 2 === 0){
            className = "even";
        }
        else {
            className = "odd";
        }
        templateRows += `<tr class="${className}"><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}