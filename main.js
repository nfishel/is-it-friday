// gets the current date from the computer
const today = new Date();


function checkForFriday(day){
  if(day.getDay() === 5){ //checks if the day is friday
    document.querySelector('#answer').innerHTML = 'YES!';
  } else {
    document.querySelector('#answer').innerHTML = 'NO :(';
  }

}// end of checkForFriday

checkForFriday(today);
