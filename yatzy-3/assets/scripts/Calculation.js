/**
 * Function to calculate single 
 * @param {int} num single number
 */
calculateSingle = function(num) {
    return frequency[num] * num;
}

/**
 * Function to calculate one-pair 
 */
calculateOnePair = function() {
    let result = 0;

    for(let i = 1; i <= 6; i++) {
        if(frequency[i] > 1) {
            result = i*2;
        }
    }
    return result;
}

/**
 * Function to calculate two-pair 
 */
calculateTwoPairs = function() {

    let pair1 = 0;
    let pair2 = 0;

    for(let i = 1; i <= 6; i++) {
        if(frequency[i] > 1) {
            pair1 = i;
        }
    }

    for(let i = 0; i <= 6; i++) {
        if(frequency[i] > 1 && i != pair1) {
            pair2 = i;
        }
    }

    if(pair2 > 0) {
        return (pair1 + pair2) * 2;
    } else {
        return 0
    }
}

/**
 * Function to calculate treesame 
 */
calculateThreeSame = function() {

    let result = 0;

    for(let i = 1; i <= 6; i++) {
        if(frequency[i] > 2) {
            result = i * 3;
        }
    }

    return result;

}

/**
 * Function to calculate foursame 
 */
calculateFourSame = function() {

    let result = 0;

    for(let i = 1; i <= 6; i++) {
        if(frequency[i] > 3) {
            result = i * 4;
        }
    }

    return result;
}

/**
 * Function to calculate fullhouse
 */
calculateFullHouse = function() {

    let three = 0;
    let pair = 0;

    for(let i = 1; i <= 6; i++) {
        if(frequency[i] == 3) {
            three = i;
        }
    }
    if(three > 0) {
        for(let i = 1; i <= 6; i++) {
            if(frequency[i] == 2) {
                pair = i;
            }
        }
    }

    if(three > 0 && pair > 0) {
        return three*3 + pair*2;
    } else {
        return 0;
    }
}

/**
 * Function to calculate smallstraight
 */
calculateSmallStraight = function() {
    if(frequency[1] == 1 && frequency[2] == 1 && frequency[3] == 1 && frequency[4] == 1 && frequency[5] == 1) {
        return 15;
    } else {
        return 0;
    }
}

/**
 * Function to calculate largestraight 
 */
calculateLargeStraight = function() {
    if(frequency[2] == 1 && frequency[3] == 1 && frequency[4] == 1 && frequency[5] == 1 && frequency[6] == 1) {
        return 20;
    } else {
        return 0;
    }
}

/**
 * Function to calculate chance 
 */
calculateChance = function() {
    let result = 0;

    for(let i = 1; i <= 6; i++) {
        result += frequency[i] * i;
    }

    return result;
}

/**
 * Function to calculate yatzy 
 */
calculateYatzy = function() {
    let result = 0;

    for(let i = 1; i <= 6; i++) {
        if(frequency[i] == 5) {
            result = 50;
        }
    }

    return result;
}