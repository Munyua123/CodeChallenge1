// Student Grade Generator
//REQUIREMENTS
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentGrades(grade) {
    if(grade >= 79){
        console.log("A")
    }else if(grade >= 60 && grade < 79){
        console.log("B")
// We used the <= because in the question they said the grade C should start from 49 to 59
    } else if(grade >= 49 && grade <= 59){
        console.log("C")
    } else if(grade >= 40 && grade < 49) {
        console.log("D")
    } else{
        console.log("E")
    }
}

// This is the calling feature of the code above to run it. You have to call your function for it to run.
studentGrades(59)