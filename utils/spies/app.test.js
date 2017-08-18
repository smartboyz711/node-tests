const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App',() => {
    var db = {
        saveUser : expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly',() => {
        var spy = expect.createSpy();
        spy('tonz',25);
        expect(spy).toHaveBeenCalledWith('tonz',25);
    });

    it('Should Call saveUser with user Object',() => {
        var email = 'andrew@example.com';
        var password = '123abc';

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});