// Using Node.JS


const triangle = (row) => {
    for (let i = 0 ; i <= row ; i++) {
        var result = "";
        
        for (let j = 0 ; j < (row-i) ; j++) {
            result += " ";
        }
        
        for (let k = 0 ; k <= (2*i-1) ; k++) {
            if ( (i != row) && (k == 0 || k == (2*i-2))) {
                result += "X";
            } else if (i == row && ( k == (2*i-3) )) {
                result += "X";
            } else if (i == row && k <= i) {
                result += "X ";
            } else if (i == row) {
                
            } else {
                result += " ";
            }
        }


        console.log(result);
    }
};


triangle(11);