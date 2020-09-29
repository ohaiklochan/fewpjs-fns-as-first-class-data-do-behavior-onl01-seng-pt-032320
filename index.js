/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hourInString = time.split(":");
  const hoursInInt = parseInt(hourInString, 10);
  
  if (hoursInInt < 12) {
    return displayMessage('Good Morning');
  }
  
  else if (hoursInInt >=12 && hoursInInt <= 17){
    return displayMessage('Good Afternoon');
  }
  
  else {
    return displayMessage('Good Evening');
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  const element = document.getElementById("greeting");
  element.innerText = msg;
  return msg;
}
