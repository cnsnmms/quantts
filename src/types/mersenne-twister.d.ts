declare module 'mersenne-twister' {
    export default class MersenneTwister {
        constructor(seed?: number);
        public init_seed(x: number): void;
        public random(): number;
        public random_int(): number;
        public random_incl(): number;
        public random_excl(): number;
        public random_long(): number;
        public random_int31(): number;
    }
}
