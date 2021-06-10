// Using Node.JS

// Triangle Display
const triangle = (row) => { 
    for (let i = 0 ; i <= row ; i++) {
        var result = "";

        for (let j = 0 ; j < (row-i) ; j++) { //Create space from left side from top of triangle to bottom
            result += " ";
        }

        for (let k = 0 ; k <= (2*i-1) ; k++) { //Create X and space
            if ( (i != row) && (k == 0 || k == (2*i-2))) { // Condition create X in left or right side of triangle
                result += "X";
            } else if (i == row && (k <= i || ( k == (2*i-3) ))) { // Condition create X in bottom side of triangle
                result += "X ";
            } else if (i == row) { // Condition block
                // None
            } else { // Condition create space in triangle (Hollow Triangle)
                result += " ";
            }
        }


        console.log(result); // Display it
    }
};


triangle(11); //Called Function