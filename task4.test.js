import { capitalizeString } from "./task4.js";

    describe('capitalize', () => {
        test('Capitalize first letter of a given string correctly', () => {
          expect(capitalizeString("test")).toBe("Test");
        });    
    });