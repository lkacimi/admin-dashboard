class Helper {

    public static isPrime(n: number) {
        for (let i = 2; i < n; i++) {
            if( n % i == 0) {
                return false;
            }
        }

        return true;
    }

}
//Defines a suite of tests, defines the component which is under tests
describe("Helper", () => {
    //Writes a unit test
    it("isPrime should state that 5 is a prime number", () => {

        const result = Helper.isPrime(5);
        expect(result).toBe(true);
    });

    it("isPrime should state that 15 is not a  prime number", () => {
        const result = Helper.isPrime(15);
        expect(result).toBe(false);
    });
})
