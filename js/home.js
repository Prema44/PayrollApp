window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th></tr>";
    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
        <tr> 
            <td><img class = "profile" src = "${empPayrollData._profilePic}" alt = ""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name = "${empPayrollData._id}" src = "../assets/create-black-18dp.svg" onclick = "update(this)" alt = "edit">
                <img name = "${empPayrollData._id}" src = "../assets/delete-black-18dp.svg" onclick = "remove(this)" alt = "delete">
            </td>
        </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for (const dept of deptList){
        deptHtml = `${deptHtml}<div class = "dept-label">${dept}</div>`;
    }
    return deptHtml;
}

createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: " Sakshat Bagadi",
            _gender: " male",
            _department: ['Engineering' , 'Finance'],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _notes: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/Ellipse -1.png'
        },

        {
            _name: " Leena Sarode",
            _gender: " female",
            _department: ['Finance'],
            _salary: '400000',
            _startDate: '2 Oct 2019',
            _notes: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}