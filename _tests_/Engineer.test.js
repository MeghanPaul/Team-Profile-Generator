const Engineer = require('../lib/Engineer.js');

test('correctly makes an Engineer object that extends Employee',()=>{
    const engineer = new Engineer('john',1,'john@business.com','johnGH');

    expect(engineer.name).toBe('john');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('john@business.com');
    expect(engineer.gitHubUsername).toBe('johnGH');
});

test('correctly gets gitHub username',() => {
    const engineer = new Engineer('john',1,'john@business.com','johnGH');
    
    expect(engineer.getGitHub()).toBe('johnGH');
});

test('correctly returns proper role', () => {
    const engineer = new Engineer('john',1,'john@business.com','johnGH');

    expect(engineer.getRole()).toBe('Engineer');
})