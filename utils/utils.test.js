const utils = require('./utils');
const expect = require('expect');

describe('Utils',() => {

    describe('#add',() => {
        it('should async add two numbers',(done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    it('should async square two numbers',(done) => {
        utils.asyncsquare(4,(square) => {
            expect(square).toBe(16).toBeA('number');
            done();
        });
    });

    it('should square number',() => {
        var res = utils.square(11);
        expect(res).toBe(121).toBeA('number');
    });

    it('should expect some value',() => {
        //expect(12).toNotBe(12);
        //expect({name : 'tonz'}).toEqual({name : 'tonz'});
        //expect([2,3,4]).toInclude(2);
        expect({
            name: 'Andrew',
            age: 25,
            location: 'Philadelphia'
        }).toExclude({
            age: 24
        });
    });

    it('should verify frist and last names are set',() => {
        var user = {
            location : 'Bangkok',
            age : 25
        };
        var fullname = 'Theedanai Poomilamnao';
        var result = utils.setname(user, fullname);
        expect(result).toInclude({
            firstName : 'Theedanai',
            lastName : 'Poomilamnao'
        });
    });
});

