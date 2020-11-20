window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th></tr>";
    const innerHtml = `${headerHtml}
        <tr> 
            <td><img class = "profile" src = "../assets/Ellipse -1.png" alt = ""></td>
            <td>Sakshat Bagadi</td>
            <td>Male</td>
            <td>
                <div class = "dept-label">HR</div>
                <div class = "dept-label">Finance</div>
            </td>
            <td>3000000</td>
            <td>1 April 2020</td>
            <td>
                <img id = "1" src = "../assets/create-black-18dp.svg" onclick = "update(this)" alt = "edit">
                <img id = "1" src = "../assets/delete-black-18dp.svg" onclick = "remove(this)" alt = "delete">
            </td>
        </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}