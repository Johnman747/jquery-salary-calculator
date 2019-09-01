$(document).ready(readyNow);

let employees = [];


function readyNow(){
   $("#submit").on('click', function(){
    createEmployee();
}   );
   $("#employeeOut").on('click', "#deleteBtn", function(){
    $(this).parent().parent().remove();
    employees.splice(employee,1);
    calcMonthly();
   });
   calcMonthly();
   displayEmployee();
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
    empEl.append(`<tr id="tableHead">
    <td>First Name</td>
    <td>Last Name</td>
    <td>ID</td>
    <td>Title</td>
    <td>Annual Salary</td>
    <td></td>
    </tr>
    `);
    for(employee of employees){
    empEl.append(`<tr id="tableData">
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.id}</td>
    <td>${employee.title}</td>
    <td>$ ${employee.annualSalary.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
    <td><button id="deleteBtn">Delete</button></td>
    </tr>`);
    }//end for
}

function calcMonthly(){
    let totalMonthSpend = 0;
    for( employee of employees){
        totalMonthSpend += Number(employee.annualSalary / 12); 
    }//end for
    if(totalMonthSpend >= 20000){
        $("#monthlyTotal").addClass('alert');
    }
    else{
        $("#monthlyTotal").removeClass('alert');

    }
    let totalEl = $("#monthlyTotal");
    totalEl.empty();
    totalEl.append(totalMonthSpend.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $("#monthlyTotal").html(totalMonthSpend.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}