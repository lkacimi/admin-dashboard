export class Helper {

    public static isPrime(n: number) {
        for (let i = 2; i < n; i++) {
            if( n % i == 0) {
                return false;
            }
        }

        return true;
    }

}