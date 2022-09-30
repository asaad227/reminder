const btn = document.querySelector(".getReminder");
function reminder(month, day){
    var today =new Date();
    var userInput = new Date();
    userInput.setMonth(month, day)
    const datIn = document.querySelector(".userEntry")
    datIn.innerHTML = `Reminder Set for: ${userInput}`;
    var dif = Math.round((userInput - today)/1000/60/60/24);
    const daysLeft = document.querySelector(".daysLeft");
    daysLeft.innerHTML = `${dif} day's left`
    if (userInput > today) {
       alert (`Reminder Set`)
    } else {
        alert("Invalid entry")
    }
  
}


function userid(){
    const dayInput = document.querySelector(".dayInput").value;
    const monthInput = document.querySelector(".monthInput").value - 1;
    
    return reminder(monthInput, dayInput);
    
}

function dated(){
    const dateIn = document.querySelector(".dateTime");
    dateIn.innerHTML = new Date();
}

window.addEventListener("load", dated)
btn.addEventListener("click", userid);




// var num = new Date();
// var month = 8;
// var date = 30;
// num.setMonth(month, date)
// console.log(num)

