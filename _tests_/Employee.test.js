const Employee = require('../lib/Employee.js');


test('creates an employee object',() => {
    const employee = new Employee('john','1','john@business.com');

    expect(employee.name).toBe('john');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('john@business.com');
});

test('get employee member variables', () => {
    const employee = new Employee('john','1','john@business.com');

    expect(employee.getName()).toBe('john');
    expect(employee.getId()).toBe('1');
    expect(employee.getEmail()).toBe('john@business.com');
});

test('gets the employee role',() => {
    const employee = new Employee('john','1','john@business.com');

    expect(employee.getRole()).toBe('Employee');
});