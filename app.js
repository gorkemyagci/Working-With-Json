var getEmployee = document.getElementById('getEmployee');

getEmployee.addEventListener('click',loadStudents);

function loadStudents(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','employees.json',true);
    xhr.onload = function(){
        if(this.status === 200){
          let employees = JSON.parse(this.responseText)
          var html = "";
          employees.forEach(employee => {
              html += 
              `
              <tr>
              
              <td>${employee.firstName}</td>
              <td>${employee.lastName}</td>
              <td>${employee.age}</td>
              <td>${employee.hobies}</td>
              
              </tr>

              `
          });
          document.getElementById('employeesList').innerHTML = html;
        }
    }
    xhr.send();
}