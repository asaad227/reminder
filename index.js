const btn = document.querySelector(".getReminder");
function reminder(month, day){
    var today =new Date();
    var userInput = new Date();
    userInput.setMonth(month, day)
    const datIn = document.querySelector(".userEntry")
    
    var dif = Math.round((userInput - today)/1000/60/60/24);
    const daysLeft = document.querySelector(".daysLeft");
    
    if (userInput > today) {
       alert (`Reminder Set`)
       datIn.innerHTML = `Reminder Set for: ${userInput}`;
       daysLeft.innerHTML = `${dif} day's left`;
    } else {
        alert("Invalid entry")
    }
  
}


function userid(){
    const dayInput = document.querySelector(".dayInput").value;
    const monthInput = document.querySelector(".monthInput").value - 1;
    
    return reminder(monthInput, dayInput);
    
}

function showTime(){
    let currentDate = new Date();
    let time= currentDate.toLocaleTimeString()
    let date = currentDate.toDateString()

    const dateIn = document.querySelector(".dateTime");
    dateIn.innerHTML = `${date} ${time}`;
  //  document.querySelector("#MyClockDisplay").textContent = `${time}`;
  
  
   setTimeout(showTime, 1000)
  }

window.addEventListener("load", showTime)
btn.addEventListener("click", userid);




// var num = new Date();
// var month = 8;
// var date = 30;
// num.setMonth(month, date)
// console.log(num)

