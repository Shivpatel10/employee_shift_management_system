// Task 1: Create an Employees Array of Employee Objects
const employees = [
    { name: 'Joe', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Friday', hours: 7 }] },    
    { name: 'Sam', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'Dave', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Zach', shifts: [{ day: 'Friday', hours: 8 }] }
];


// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employeeInfo) { //creating a displayEmployeeShifts function
    console.log(`Employee Name: ${employeeInfo.name}`); // will display employees name
    employeeInfo.shifts.find(shift => {  // using find to display the shift schedule in the employees array.
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`) // this will show the employee shift in terms of Day and Hours
    });
};
displayEmployeeShifts(employees[1]); // This will output the employee shift schedule for Sam

// Task 3: Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours) {
    let employee = employees.find(Employee => Employee.name === employeeName) // this find() finds the employee name
        if (employee) {
            let assignedShift = employee.shifts.find(shift => shift.day === day); // looks for employee and checks to see if they are assigned a shift that day already
            if (assignedShift) {
                console.log( `ERROR: shift is already assigned to ${employeeName} on ${employee.shift.day}`);
            } else {
                employee.shifts.push({day}); // will push the new day into the employees array  and give it to the specified employee
                employee.shifts.push({hours}); // will push the new hour into employees array and give it to the specified employee
            console.log(`Update: ${employeeName} has now been assigned ${hours} hours on ${day}.`); 
            };
        };
};

assignShift('Zach', 'Tuesday', 7); // Will assign Zach 7 hours on tuesday


// Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName, shifts) {
    let employee = employees.find(Employee => Employee.name === employeeName) // reusing this find() finds the employee name
        if (employee) {
            let totalHoursWorked = employee.shifts.reduce((totalHours, shift) => totalHours + shift.hours, 0); // used reduce to sum the hours up for all shifts.
        console.log(`${employeeName}'s total hours work this week are ${totalHoursWorked} hours.`) // logging total hours worked
        } else 
            console.log('ERROR please recheck!'); // if the employee name isnt found.
};
calculateTotalHours(`Dave`); // used to test if the code works should say dave has 8 hours this week


// Task 5: Create a Function to List Employees with Free Days
 function listAvailableEmployees(day) {
    employees.forEach(employee => { // loops through each employee in the array
        let employeeWithShift = employee.shifts.some(shift => shift.day === day); // checks if the employee does NOT have a shift on specific day
            if (!employeeWithShift) { // if the employee doesn't have a shift on that day it logs their name
        console.log(`${employee.name} is available on ${day}.`);
        }
    });
 };
 listAvailableEmployees("Tuesday"); // test will output who doesnt have shifts on tuesday