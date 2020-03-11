const Employee = require("./Employee");
class Manager extends Employee{
    constructor(name, id, title, officeNumber){
        super(name, id, title);
        this.officeNumber = officeNumber;
        this.rol = "Manager";
    }

    getRole(){
        console.log("Role: Manager");
    }
}