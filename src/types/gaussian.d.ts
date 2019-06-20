declare module 'gaussian' {
    export default class Gaussian {
        constructor(mean: number, variance: number);
        public pdf(x: number): number;
        public cdf(x: number): number;
        public ppf(x: number): number;
        public mul(d: number | Gaussian): Gaussian;
        public div(d: number | Gaussian): Gaussian;
        public add(d: number | Gaussian): Gaussian;
        public sub(d: number | Gaussian): Gaussian;
        public scale(c: number): Gaussian
    }
}