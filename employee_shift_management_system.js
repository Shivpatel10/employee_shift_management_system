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