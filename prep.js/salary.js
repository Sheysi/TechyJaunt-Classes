const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary({name: "Sasha", salary: 2000}));
