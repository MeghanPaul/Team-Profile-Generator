const Intern = require('../lib/Intern');

test('correctly makes an Intern object that extends Employee',() => {
    const intern = new Intern('john',1,'john@business.com','KU');
    
    expect(intern.name).toBe('john');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('john@business.com');
    expect(intern.school).toBe('KU');
});

test('correctly gets school', () => {
    const intern = new Intern('john',1,'john@business.com','KU');

    expect(intern.getSchool()).toBe('KU');
});

test('correctly overloads the getRole method to return Intern', () => {
    const intern = new Intern('john',1,'john@business.com','KU');

    expect(intern.getRole()).toBe('Intern');
});