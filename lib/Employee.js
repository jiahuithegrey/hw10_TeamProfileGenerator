class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.title = title;
        this.role = "Employee";
    }
    getName(){
        console.log(`Name: ${this.name}`);
        return this.name;
    }
    getId(){
        console.log(`Id: ${this.id}`);
    }
    getEmail(){
        console.log(`Email: ${this.email}`);
    }
    getRole(){
        console.log("Role: Employee"); //not sure
    }
}
module.exports = Employee;