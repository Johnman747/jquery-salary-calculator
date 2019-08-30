$(document).ready(readyNow);

let employees = [];


function readyNow(){
   $("#submit").on('click', function(){
    createEmployee();
});
   $("#employeeOut").on('click', "#deleteBtn", function(){
    $(this).parent().remove();
    let deleteItem = employee;
    employees.splice($.inArray(deleteItem, employees),1);
    calcMonthly();
   });
   calcMonthly();
}

function createEmployee(){
    let fName = $('#firstNameInput').val();
    let lName = $('#lastNameInput').val();
    let idNum = $('#idInput').val();
    let title = $('#titleInput').val();
    let salary = $('#salaryInput').val();
    let newObject = {
        firstName: fName,
        lastName: lName,
        id: idNum,
        title: title,
        annualSalary: salary
        };
        employees.push(newObject);
    $('#firstNameInput').val('');
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    displayEmployee();
    calcMonthly();
}

function displayEmployee(){
    let empEl = $("#employeeOut");
    empEl.empty();
    for(employee of employees){
    empEl.append(`<li>First: ${employee.firstName} Last: ${employee.lastName} ID: ${employee.id} Title: ${employee.title} Annual Salary: ${employee.annualSalary} <button id="deleteBtn">Delete</button></li>`);
    }//end for
}

function calcMonthly(){
    let totalMonthSpend = 0;

    for( employee of employees){
        
        totalMonthSpend += employee.annualSalary / 12; 
    }//end for
    if(totalMonthSpend >= 20000){
        $("#totalMonthOut").addClass('alert');
    }
    else{
        $("#totalMonthOut").removeClass('alert');

    }
    let totalEl = $("#monthlyTotal");
    totalEl.empty();
    totalEl.append(totalMonthSpend);
    $("#monthlyTotal").html(totalMonthSpend);
}

