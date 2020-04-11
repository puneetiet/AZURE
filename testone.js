/*function cword(w) {
  var count = 1;
  // var words = w.split(" " && "\n");
  for (i = 0; i < w.length; i++) {
    // inner loop -- do the count
    if (w[i] === " " || w[i] === "\n" || w[i] === "\t") {
      count += 1;
    }
  }

  return (count);
}
let foo = "Bob\tWoolmer esrt"*/

function isValidDate(year, month, day) {
  month = month - 1;
  var d = new Date(year, month, day);
  if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
    return true;
  }
  return false;
}

function getDay(inputdate){
let arrayinput = inputdate.split("/");
year = arrayinput[2]
month = arrayinput[1]
date = arrayinput[0]
if(isValidDate(year,month,date))
{
let d1 = new Date(`${year}/${month}/${date}`);
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
return weekday[d1.getDay()];
}
else
{
  return "INVALID DATE";
}
}

let input ="31/09/2016"
 
console.log(getDay(input));


