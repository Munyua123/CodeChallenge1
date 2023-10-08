// Write a program whose major task is to calculate an individual’s Net Salary
// In our calculations we will be using monthly taxable incoms because NSSF and NHIF deductions are done monthly 
// The equation salary > or < represents the different NHIF rates, since NHIF is tested against the salary.
function netSalary(salary, benefits) {
    // taxable represents tax payable
    const taxable = salary - benefits
    const nssfMonthly = salary * 0.06
    if (salary <= 5999 && taxable <= 24000) {
        console.log(salary-taxable * 0.1-nssfMonthly-150)
        // the equation being logged is the net salary 
       }
    else if (salary <= 7999 && taxable <= 24000){
        console.log(salary-taxable * 0.1-nssfMonthly-300)
    }
    else if (salary<= 11999 && taxable <= 24000) {
        console.log(salary-taxable * 0.1-nssfMonthly-400)
    }
    else if (salary <= 14999 && taxable <= 24000) {
        console.log(salary-taxable * 0.1-nssfMonthly-500)
    }
    else if (salary <= 19999 && taxable <= 24000) {
        console.log(salary-taxable * 0.1-nssfMonthly-600)
    }
    else if (salary <= 24000 && taxable <= 24000) {
        console.log(salary-taxable * 0.1-nssfMonthly-750)
    }
    else if (salary > 24000 && salary <= 24999 && taxable > 24000 && taxable <= 32333){
        console.log (salary-taxable * 0.25-nssfMonthly-750)
    }
    else if (salary <= 29999 && taxable > 24000 && taxable <= 32333) {
        console.log (salary-taxable * 0.25-nssfMonthly-850)
    }
    else if (salary <= 32333 &&taxable > 24000 && taxable <= 32333) {
        console.log (salary-taxable * 0.25-nssfMonthly-900)
    } 
    else if(salary <= 34999 && taxable > 32333 && taxable <= 500000){
        console.log(salary-taxable * 0.3-nssfMonthly-900)
    } 
    else if (salary <= 39999 && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-950)
    }
    else if (salary <= 44999 &&taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1000)
    }
    else if (salary <= 49999 && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1100)
    }
    else if (salary <= 59999 && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1200)
    }
    else if (salary <= 69999 && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1300)
    }
    else if (salary<= 79999 && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1400)
    }
    else if (salary <= 89999 && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1500)
    }
    else if (salary<=99999  && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1600)
    }
    else if (salary >= 100000  && taxable > 32333 && taxable <= 500000) {
        console.log(salary-taxable * 0.3-nssfMonthly-1700)
    }
    else if (salary >= 100000 && taxable > 500000 && taxable <= 800000){
        console.log(salary-taxable * 0.325-nssfMonthly-1700) 
    } 
    else{
        console.log(salary-taxable * 0.35-nssfMonthly-1700)
    }
}

netSalary(78000, 10000)