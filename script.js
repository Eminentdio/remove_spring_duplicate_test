function InputValidation(input) {
    // Check if input is empty or contains non-alphabetic characters
    if (input === '' || !/^[a-zA-Z0-9]+$/.test(input)) {
        alert("Please enter a string containing only numbers and alphabetic characters.");
        window.location.href = "index.html";
        return false;
    }
    return true;
}

const getInput = localStorage.getItem('input-string');

if(!InputValidation(getInput)){
    
}

// Get the string
const basicString = document.getElementById('basic-string');
const resultString = document.getElementById("reformed-string");
basicString.textContent = `Input String: ${getInput}`;

let resultArray = getInput.split('');

resultString.textContent = `Result String: ${resultArray.join("")}`;

const cardContainer = document.getElementById('card-container');
resultArray.forEach( char => {
    let html = `<div class="card"> ${char}<div>`;
    cardContainer.innerHTML += html;
});

cardContainer.addEventListener("click", function (event) {
    let index = Array.from(cardContainer.children).indexOf(event.target);
    let clickContent = event.target.textContent.trim();

    // Removing duplicate after a click

    let tempResultArray = [];
   
    for (let i = 0; i < resultArray.length; i++) {
      if (index === i) {
        tempResultArray.push(resultArray[i]);
      }else {
          if (resultArray[i] !== clickContent) {
              tempResultArray.push(resultArray[i]);
          }
      }
    }

    resultArray = [...tempResultArray];
    resultString.textContent = `Result String: ${resultArray.join("")}`;
   
    cardContainer.innerHTML = "";
    resultArray.forEach( char => {
        let html = `<div class="card"> ${char}<div>`;
        cardContainer.innerHTML += html;
    });


   
});
