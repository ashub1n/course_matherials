module.exports = { 
    calculator: (val1, val2, operation) => {
        console.log(val1,val2,parseInt(val1),parseInt(val2), parseInt(val1) == NaN , parseInt(val2) === NaN);
        if( parseInt(val1) === NaN && parseInt(val2) === NaN ) {
            return 'Error';
        }
       let result;
        switch (operation) {
            case 'sum':
                result = val1 + val2;
                break;
            case 'minus':
                result = val1 - val2;
                break;
            case 'multiply':
                result = val1 * val2;
                break;
            case 'del':
                if (val2 === 0) {
                    return 'Error';
                }
                result = val1 / val2;
                break;
            
        }
        
        return result;
    }
}