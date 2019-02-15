function Employee(name, jobTitle, salary, status="Full Time"){
  this.name = name
  this.jobTitle = jobTitle
  this.salary = salary
  this.status = status

  this.print = function printEmployeeForm(){
    return "Name: " + this.name + " Job Title: " + this.jobTitle + " Salary: " + this.salary + " Status: " + this.status
  }
}

var employees = [];

var beyonce = new Employee("Beyonce", "Bo$$", "$100000000/month")
var shaq = new Employee("Shaq", "Baller", "$100000/month", "Part Time")
var danny = new Employee("Danny DaVito", "Oompa Loompa", "$infinity/day", "Contract")

employees.push(beyonce)
employees.push(shaq)
employees.push(danny)

console.log(beyonce.print())
console.log(shaq.print())
console.log(danny.print())

console.log(employees)
