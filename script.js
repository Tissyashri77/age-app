const dobdate = document.getElementById("day-box");
const dobmonth = document.getElementById('month-box');
const dobyear = document.getElementById('year-box');
const arrow_btn = document.getElementById('line-img');

// arrow_btn.addEventListener('click', function (){
//    const now = new Date();
//    const currentYear = now.getFullYear();
//    const currentMonth = now.getMonth();   // considering month as 5
//    const currentdate = now.getDate();

//    const calcyear = Math.abs(dobyear.value - currentYear);
//    const calcmonth = Math.abs(dobmonth.value - currentMonth);
//    const calcdate = Math.abs(dobdate.value - currentdate);

//    console.log(calcdate);
//    console.log(currentMonth);
//    console.log(calcyear);
//    console.log(now);
// }); 

arrow_btn.addEventListener('click' , calculated);


function calculated() {
    
    const now = new Date();
   const currentYear = now.getFullYear();
   const currentMonth = now.getMonth();   // considering month as 5
   const currentdate = now.getDate();

   const calcyear = Math.abs(dobyear.value - currentYear);
   const calcmonth = Math.abs(dobmonth.value - currentMonth);
   const calcdate = Math.abs(dobdate.value - currentdate);

    const year = document.getElementById("year-span");
    year.innerHTML = calcyear;

    const months = document.getElementById("months-span");
    months.innerHTML = calcmonth;

    const days = document.getElementById("days-span");
    days.innerHTML = calcdate;

}