This repository represents solutions for codeChallenge 1. Codechallenges are questions that you are provided with and you have to come up with solutions. 

Below is the questions together with the solutions for the different javaScript problems prvided.
The javaScript element being investigated below are functions, the if ...else statements. 

PROBLEM 1. (STUDENT GRADES)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

STEPS TO SOLUTION

1. You have to declare the function, for example studentGrades(grade) {}. 

2. Your values for the grades will be stored in the grades parameter.

3. You then put in your else ... if statements because we will have many conditions and statements representing all the grades.

4. After you put your else ... if statements you should call your function so as to run them. This is how you call your function studentGrades(grade). grade is the marks that the person has, for example if john has 40 marks you will put studentGrades(40), this should bring back the grade D, as per our question.


PROBLEM 2. (SPEED DETECTOR)

REQUIREMENTS
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

STEPS TO SOLUTION.
1. You first declare your function, i.e function speedDetector(speed) {} in this you should use speed as your parameter.

2. You should declare your points variable, the points variable will contain the Equation required to calculate the number of points.

3. Since the speed limit is 70, you should start with defining what to do when they go above the speed limit.

4. In our situation, we will have 2 if statements and one else statement unlike the if ... else, because in our situation we will be passing 1 parameter but you will log 2 outputs at one specific momment, in which it will log both the points and the statement that your licence has been suspended.

5. Then you finally call your function.

PROBLEM 3. (Salary Calculator)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.



