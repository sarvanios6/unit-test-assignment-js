/**
 * Created by Sarvan on 29/08/17.
 */
let assert = require('chai').assert;
const mainApp = require('../main');


describe('Main', function () {
    describe('arithmeticOperation()', function () {
        let X = 10;
        let XL = 40;
        let L = 50;
        let C = 100;
        let I = 1;
        let XCIX = 99;
        // Question One
        it('XL + X = L is true', function () {
            let result = mainApp.arithmeticOperation(XL, X, 0);
            assert.equal(result, L)
        });
        // Question Two
        it('C - I = XCIX is true', function () {
            let result = mainApp.arithmeticOperation(C, I, 1);
            assert.equal(result, XCIX)
        });
        // Question Three
        it('C/X = X is true', function () {
            let result = mainApp.arithmeticOperation(C, X, 2);
            assert.equal(result, X)
        });
        // Question four
        it('X * X = C is true', function () {
            let result = mainApp.arithmeticOperation(X, X, 3);
            assert.equal(result, C)
        });

    });
});