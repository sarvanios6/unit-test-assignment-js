/**
 * Created by Sarvan on 29/08/17.
 */

module.exports = {

    arithmeticOperation (value1, value2, value3) {
        switch (value3) {
            case 0:
                return value1 + value2;
            case 1:
                return value1 - value2;
            case 2:
                return value1 / value2;
            case 3:
                return value1 * value2;
            default:
                break;
        }
    }
};