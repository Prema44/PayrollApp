class EmployeePayrollData {

    get name() { return this._name; }
    set name(name) {
        const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else throw 'Name is incorrect!';
    }

    get id() { return this._id;}
    set id(id) {
        this._id = id;
    }

    get profilePic() { return this._profilePic; }
    set profilePic (profilePic){
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender (gender) {
        this._gender = gender;
    }

    get salary() { return this._salary;}
    set salary (salary) {
        this._salary = salary;
    }

    get department() { return this._department; }
    set department (department) {
        this._department = department ;
    }

    get notes() { return this._notes; }
    set notes (notes) {
        this._notes = notes;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate){
        this._startDate = startDate;
    }

    toString() {
        const options = {year : 'numeric', month : 'long', day : 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" : 
        this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", gender = " + this.gender + 
               ", salary = " + this.salary + ", ProfilePic = " + this.profilePic + ", department = " + this.department + 
               ", start date = " + empDate + ", Notes = " + this.notes;
    }
}

const createEmployeePayrollData = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }
    catch(e){
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.salary = getInputValueById('#salary');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
               getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

window.addEventListener('DOMContentLoaded', () => {

    const textError = document.querySelector('.text-error');
    const name = document.querySelector('#name');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });

});
