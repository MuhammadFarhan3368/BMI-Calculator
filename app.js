let username = prompt("Enter your name: ") 
let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = parseInt(document.querySelector(".height").value);
    let weight = parseInt(document.querySelector(".weight").value);
    let msg = document.querySelector('.msg');

    let footHeight = height/3.28
    let totalHeight = footHeight*footHeight 
    const result = (weight / totalHeight).toFixed(2)
    msg.innerHTML = `dear ${username}, your BMI is ${result}`;

    if (result <= 18.5) {
        msg.innerHTML = `dear ${username}, your BMI is ${result}. You are underweighted`;
        
    } else if(result <= 25){
        msg.innerHTML = `dear ${username}, your BMI is ${result}. You are healthy`;
    } else if(result <= 29){
        msg.innerHTML = `dear ${username}, your BMI is ${result}. You are overweighted`;
    }else{
        msg.innerHTML = `dear ${username}, your BMI is ${result}. You are Obese`;
    }
})



//const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('.height').value);
//   const weight = parseInt(document.querySelector('.weight').value);
//   const results = document.querySelector('.results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height))).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

