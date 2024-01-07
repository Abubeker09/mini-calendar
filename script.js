let date = document.getElementById('date');
let days = document.getElementById('day');
let months = document.getElementById('month');
let years = document.getElementById('year');

function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  today = dd
  if(today < 10){
    return "0"+today;
    }else{
      return today;
    };
}

function getDayName(){
  const weekdays=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday"];
  var dayOfWeek = weekdays[new Date().getUTCDay()];
  return dayOfWeek;
}
function getMonths(){
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  var month = monthNames[new Date().getUTCMonth()] ;
  return month;
}
function getYears(){
  var year = new Date().getFullYear();
  return year;
}

date.innerHTML = getDate()
days.innerHTML = getDayName()
months.innerHTML = getMonths()
years.innerHTML = getYears()