// import calculator from "../src/calc";
// import assert from 'assert';
const {calculator} = require("../src/calc");
const assert = require("assert");
 
describe('Tasks', function () {
    describe('test', function () {
        it('test test', function () {
            
        });
    });
    describe('sum', function () {
        it('1+1=2', function () {
            assert.equal(calculator(1,1,'sum'),2);
        });

        it('2+2=2', function () {
            assert.equal(calculator(2,2,'sum'),4);
        });
        

        it('trash', function () {
            assert.equal(calculator("asd",2,'sum'),"Error");
        });

        it('trash', function () {
            assert.equal(calculator(2,"asdasdasd",'sum'),"Error");
        });
    });
    
    describe('devide', function () {
        it('1-1=0', function () {
            assert.equal(calculator(1,1,'minus'),0);
        });

        it('4-2=2', function () {
            assert.equal(calculator(4,2,'minus'),2);
        });
    });

    describe('multiply', function () {
        it('4 * 2 ', function () {
            assert.equal(calculator(4,2,'multiply'),8);
        });

        it('4 * 1 ', function () {
            assert.equal(calculator(4,1,'multiply'), 4);
        });
        it('4 * 0 ', function () {
            assert.equal(calculator(4,0,'multiply'),0);
        });
    });

    describe('del', function () {
        it('4 / 4 ', function () {
            assert.equal(calculator(4,4,'del'),1);
        });
        it('4 / 2 ', function () {
            assert.equal(calculator(4,2,'del'),2);
        });
        it('4 / 1 ', function () {
            assert.equal(calculator(4,1,'del'), 4);
        });
        it('4 / 0 ', function () {
            assert.equal(calculator(4,0,'del'),'Error');
        });
    });
});