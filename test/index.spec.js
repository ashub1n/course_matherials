import calculator from "../src/calc.js";
import assert from 'assert'; 
 
describe('Tasks', function () {
    describe('test', function () {
        it('test test', function () {
            
        });
    });
    describe('sum', function () {
        it('1+1=2', function () {
            assert.equal((new calculator(1,1)).sum(),2);
        });

        it('2+2=2', function () {
            //(new calculator(2,2)).sum()
            // let a = new calculator(2,2);
            // a.sum();
            assert.equal((new calculator(2,2)).sum(),4);
        });
        

        // it('trash', function () {
        //     assert.equal((new calculator("asd",2).sum(),"Error");
        // });

        // it('trash', function () {
        //     assert.equal(new calculator(2,"asdasdasd",'sum'),"Error");
        // });
    });
    
    describe('devide', function () {
        it('1-1=0', function () {
            assert.equal((new calculator(1,1)).minus(),0);
        });

        it('4-2=2', function () {
            assert.equal((new calculator(4,2)).minus(),2);
        });
    });

    describe('multiply', function () {
        it('4 * 2 ', function () {
            assert.equal((new calculator(4,2)).multiply(),8);
        });

        it('4 * 1 ', function () {
            assert.equal((new calculator(4,1)).multiply(), 4);
        });
        it('4 * 0 ', function () {
            assert.equal((new calculator(4,0)).multiply(),0);
        });
    });

    describe('del', function () {
        it('4 / 4 ', function () {
            assert.equal((new calculator(4,4)).del(),1);
        });
        it('4 / 2 ', function () {
            assert.equal((new calculator(4,2)).del(),2);
        });
        it('4 / 1 ', function () {
            assert.equal((new calculator(4,1)).del(), 4);
        });
        it('4 / 0 ', function () {
            assert.equal((new calculator(4,0)).del(),'Error');
        });
    });

    describe('memory', function () {
        it('1 + 1 + 1 + 1 + 2', function () {
            let obj = (new calculator(1,1, 'multiple'));
            obj =  obj.sum().sum(1).sum(1).sum(2);
            assert.equal(obj.res(),6)
        }); 
        it('2 + 2 + 2 + 2 + 2', function () {
            let obj = (new calculator(2,2, 'multiple'));
            assert.equal(obj.res(),10)
        }); 
        it('3 + 3 + 3 + 3 + 3', function () {
            let obj = (new calculator(3,3, 'multiple'));
            obj =  obj.sum().sum(3).sum(3).sum(3);
            assert.equal(obj.res(),15)
    });
});
});


describe('memory', function () {
    it('4 - 1 - 1 - 1 - 1', function () {
        let obj = (new calculator(4,1, 'multiple'));
        obj =  obj.minus().minus(1).minus(1).minus(1);
        assert.equal(obj.res(),0)
    }); 
    it('8 - 2 - 1 - 1 - 1', function () {
        let obj = (new calculator(8,2, 'multiple'));
        obj =  obj.minus().minus(1).minus(1).minus(1);
        assert.equal(obj.res(),3)
    }); 
    it('12 - 3 - 2 - 1 - 1', function () {
        let obj = (new calculator(12,3, 'multiple'));
        obj =  obj.minus().minus(2).minus(1).minus(1);
        assert.equal(obj.res(),5)
});
});

describe('memory', function () {
    it('4 * 2  * 1 * 2', function () {
        let obj = (new calculator(4,2, 'multiple'));
        obj =  obj.multiply().multiply(1).multiply(2);
        assert.equal(obj.res(),16)
    }); 
    it('2 * 2 * 2 * 2 * 2', function () {
        let obj = (new calculator(2,2, 'multiple'));
        obj =  obj.multiply().multiply(2).multiply(2).multiply(2);
        assert.equal(obj.res(),32)
    }); 
    it('1 * 2 * 3 * 4 * 5', function () {
        let obj = (new calculator(1,2, 'multiple'));
        obj =  obj.multiply().multiply(3).multiply(4).multiply(5);
        assert.equal(obj.res(),120)
});
});

describe('memory', function () {
    it('16 / 2  / 1 / 2', function () {
        let obj = (new calculator(16,2, 'multiple'));
        obj =  obj.del().del(1).del(2);
        assert.equal(obj.res(),4)
    }); 
    it('6 / 2 / 1 / 1', function () {
        let obj = (new calculator(6,2, 'multiple'));
        obj =  obj.del().del(1).del(1);
        assert.equal(obj.res(),3)
    }); 
    it('16 / 2 / 2 / 0', function () {
        let obj = (new calculator(1,2, 'multiple'));
        obj =  obj.del().del(2).del(0);
        assert.equal(obj.res(),'Error')
});
});