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
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds()
    var session = "AM";
  
    if(h === 0){
      h = 12
    }
  
    if(h > 12){
      h = h - 12
      session = "PM"
    }
  
    h = (h < 10)? "0" + h : h;
    m = (m < 10)? "0" + m : m;
    s = (s < 10)? "0" + s : s;
  
    var time = `${h}:${m}:${s} ${session}`;
    const dateIn = document.querySelector(".dateTime");
   dateIn.innerHTML = `${time}`;
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

