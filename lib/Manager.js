const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, title, officeNumber){
        super(name, id, title);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole(){
       return this.officeNumber;
    }
}

module.exports = Manager;