export default class Calculator{
    val1; 
    val2;
    mode;
    result = 0;

    constructor(val1, val2, mode = 'single'){
        this.val1 = val1;
        this.val2 = val2;
        if (mode) {
            this.mode = mode;
        }
    }

    sum(val3){
        if (this.mode === 'single') {
            return this.val1 + this.val2;
        }

        this.result = val3 ? this.result + val3 : this.val1 + this.val2;
        return this;
    }

    minus(){
        return this.val1 - this.val2;
    }

    multiply(){
        return this.val1 * this.val2;
    }
    
    del(){
        if (this.val2 === 0) {
            return 'Error';
        }
        return this.val1 / this.val2;
    }

    res() {
        return this.result;
    }
}