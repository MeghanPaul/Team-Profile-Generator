const Manager = require('../lib/Manager');

test('correctly creates manager object that extends Employee', () => {
    const manager = new Manager('john',1,'john@business.com',9139139933);

    expect(manager.name).toBe('john');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('john@business.com');
    expect(manager.officeNumber).toBe(9139139933);
});

test('correctly gets the office number',() => {
    const manager = new Manager('john', 1, 'john@business.com',9139139933);

    expect(manager.getOfficeNumber()).toBe(9139139933);
})

test('correctly gets the proper manager role', () => {
    const manager = new Manager('john',1,'john@business.com',9139139933);

    expect(manager.getRole()).toBe('Manager');
});

