const dobdate = document.getElementById("day-box");
const dobmonth = document.getElementById('month-box');
const dobyear = document.getElementById('year-box');
const arrow_btn = document.getElementById('line-img');

arrow_btn.addEventListener('click' , calculated);

function calculated() {
    const now = new Date(); 
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth()+1;   // considering month as 5
    const currentdate = now.getDate(); //23/12/2022

    const dobday = new Date(dobyear.value, dobmonth.value - 1, dobdate.value); // Creating Date object from input values
    const today = new Date(currentYear, currentMonth - 1, currentdate);
    if (dobday <= today) {

        if(date_validate(parseInt(dobdate.value),parseInt(dobmonth.value),parseInt(dobyear.value)) &&  month_validate(dobmonth.value) &&  year_validate(dobyear.value)){    
            const calcyear = Math.abs(dobyear.value - currentYear);
            const calcmonth = Math.abs(dobmonth.value - currentMonth);
            const calcdate = Math.abs(dobdate.value - currentdate);

            const year = document.getElementById("year-span");
            year.innerHTML = calcyear;
            const months = document.getElementById("months-span");
            months.innerHTML = calcmonth;
            const days = document.getElementById("days-span");
            days.innerHTML = calcdate;

            const  display_para = document.getElementsByClassName('error-para');
            display_para[0].style.display = "none";
            display_para[1].style.display = "none";
            display_para[2].style.display = "none";
        
        }
        else{
            const  display_para = document.getElementsByClassName('error-para');
            display_para[0].style.display = "block";
            const  display_box = document.getElementsByClassName('error-prompt');
            display_box[0].style.display = "flex";

            const year = document.getElementById("year-span");
            year.innerHTML = "- -";
            const months = document.getElementById("months-span");
            months.innerHTML = "- -";
            const days = document.getElementById("days-span");
            days.innerHTML = "- -";

        }
    }
    else{
        console.log(document.getElementById("year-span").innerText);
        const year = document.getElementById("year-span");
        year.innerHTML = "- -";
        const months = document.getElementById("months-span");
        months.innerHTML = "- -";
        const days = document.getElementById("days-span");
        days.innerHTML = "- -";

        if(dobdate.value > currentdate){
            const  display_para = document.getElementsByClassName('error-para');
            display_para[0].style.display = "block";
            const  display_box = document.getElementsByClassName('error-prompt');
            display_box[0].style.display = "flex";
        }
        if(dobmonth.value > currentMonth){
            const  display_para = document.getElementsByClassName('error-para');
            display_para[1].style.display = "block";
            const  display_box = document.getElementsByClassName('error-prompt');
            display_box[1].style.display = "flex";
        }
        if(dobyear.value > currentYear){
            const  display_para = document.getElementsByClassName('error-para');
            display_para[2].style.display = "block";
            const  display_box = document.getElementsByClassName('error-prompt');
            display_box[2].style.display = "flex";
        }

    }
}


function date_validate(date , month , year){
    // 22 2 2019
    // 30 03 2002
   
    if( date > 0 && date <= 31 &&  typeof(date) == "number"){
            if(month ==2 && year%4 ==0 &&  date >29){
                const  display_para = document.getElementsByClassName('error-para');
                display_para[0].style.display = "block";
                const  display_box = document.getElementsByClassName('error-prompt');
                display_box[0].style.display = "flex";
                return false;
            }
            if(month ==2 &&  year%4 !=0 &&  date > 28){
                const  display_para = document.getElementsByClassName('error-para');
                display_para[0].style.display = "block";
                const  display_box = document.getElementsByClassName('error-prompt');
                display_box[0].style.display = "flex";
                return false;
            }
            if(month <=7 &&  month != 2 &&  month%2==0 &&  date>30){ //31-06-2019
                const  display_para = document.getElementsByClassName('error-para');
                display_para[0].style.display = "block";
                const  display_box = document.getElementsByClassName('error-prompt');
                display_box[0].style.display = "flex";
                return false;
            }
            if(month >=8 &&  month%2!=0 &&  date>30){
                const  display_para = document.getElementsByClassName('error-para');
                display_para[0].style.display = "block";
                const  display_box = document.getElementsByClassName('error-prompt');
                display_box[0].style.display = "flex";
                return false;
            }
        }
    else if(date <= 0 || date > 31){
        const  display_para = document.getElementsByClassName('error-para');
        display_para[0].style.display = "block";
        const  display_box = document.getElementsByClassName('error-prompt');
        display_box[0].style.display = "flex";
        return false;
    }
          return true;
}


function month_validate(month){

    if(dobmonth.value <=12 &&  dobmonth.value != 0 &&  dobmonth.value <! 0 ){
            const  display_para = document.getElementsByClassName('error-para');
            display_para[1].style.display = "block";
            const  display_box = document.getElementsByClassName('error-prompt');
            display_box[1].style.display = "flex";
            return false;
        }
        return true;      
}


function year_validate(year){
    if(dobyear.value < 1900){
        const  display_para = document.getElementsByClassName('error-para');
        display_para[2].style.display = "block";
        const  display_box = document.getElementsByClassName('error-prompt');
        display_box[2].style.display = "flex";
        return false;
    }

    return true;

}

