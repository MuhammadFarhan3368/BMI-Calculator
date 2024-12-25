let username = prompt("Enter your name: ");
let form = document.querySelector("form");
let msgContainer = document.querySelector(".msgContainer")
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = parseInt(document.querySelector(".height").value);
    let weight = parseInt(document.querySelector(".weight").value);
    let msg = document.querySelector('.msg');

    let footHeight = height/3.28
    let totalHeight = footHeight*footHeight
    result = (weight / totalHeight).toFixed(2);

    if (weight === '' || weight <= 0 || isNaN(weight)) {
        msg.innerHTML = `Enter a valid weight`
    }else if(height === '' || height <= 0 || isNaN(height)) {
        msg.innerHTML = `Enter a valid height`
    }else{
        if (result <= 18.5) {
            msg.innerHTML = `dear ${username}, your BMI is ${result}. You are underweighted`;
            msgContainer.style.backgroundColor = '#f9a620'
        } else if(result <= 25){
            msg.innerHTML = `dear ${username}, your BMI is ${result}. You are healthy`;
            msgContainer.style.backgroundColor = '#70e000'
        } else if(result < 30){
            msg.innerHTML = `dear ${username}, your BMI is ${result}. You are overweighted`;
            msgContainer.style.backgroundColor = '#f9a620'
        }else{
            msgContainer.style.backgroundColor = '#c00000'
            msg.innerHTML = `dear ${username}, your BMI is ${result}. You are Obese`;
        }
    }
});