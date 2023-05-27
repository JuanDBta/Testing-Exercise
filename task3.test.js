import { Calculator } from "./task3.js";

const calculator = new Calculator();

describe('calculator', () => {

    describe('add', () => {
        test('adds two positive numbers correctly', () => {
          expect(calculator.add(2, 3)).toBe(5);
        });    
    });

    describe('substract', () => {
        test('substract two positive numbers correctly', () => {
          expect(calculator.substract(5, 3)).toBe(2);
        });    
    });

    describe('multiply', () => {
        test('multiply two positive numbers correctly', () => {
          expect(calculator.multiply(5, 3)).toBe(15);
        });    
    });

    describe('divide', () => {
        test('divide two positive numbers correctly', () => {
          expect(calculator.divide(5, 0)).toBe(Infinity);
        });    
    });
});
