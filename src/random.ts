import MersenneTwister from 'mersenne-twister';
import Gaussian from 'gaussian';
import { Matrix } from './matrix';
import { Vector } from './vector';

export class RandNumGen {

    private _rnd: MersenneTwister;
    /**
     *Creates an instance of RandNumGen.
     * @param {MersenneTwister} _rnd
     * @param {number} [seed] initial seed value. 
     * @memberof RandNumGen
     */
    constructor(seed?: number) {
        seed ? (this._rnd = new MersenneTwister(seed)) : (this._rnd = new MersenneTwister());
    }

    /**
     * Generates a random number or a random matrix / vector in the interval of (0,1); You can cast to output to proper value using as Matrix | Vector notation
     *
     * @returns {number}
     * @memberof RandNumGen
     */
    public rand(rows?: number, cols?: number): Matrix | Vector | number {
        const randFunc = (): number => {
            const value = this._rnd.random_excl();
            return value;
        };
        if (rows && cols) {
            return this.createMatrix(rows, cols, randFunc);
        } else if (rows) {
            return this.createVector(rows, randFunc);
        }
        return randFunc();
    }

    /**
     * Generates a random number or a random matrix / vector in the interval of (lowerLimit,upperLimit); You can cast to output to proper value using as Matrix | Vector notation
     *
     * @param {number} lowerLimit
     * @param {number} upperLimit
     * @param {number} [rows]
     * @param {number} [cols]
     * @returns {(Matrix | Vector | number)}
     * @memberof RandNumGen
     */
    public uniform(lowerLimit: number = 0, upperLimit: number = 1, rows?: number, cols?: number): Matrix | Vector | number {
        const uniFn = (): number => {
            return lowerLimit + (upperLimit - lowerLimit) * this._rnd.random_excl();
        }
        if (lowerLimit >= upperLimit) {
            throw 'Lower limit must be bigger than upper limit.';
        }
        return this.createOutput(uniFn, rows, cols);
    }


    /**
     * Generates a gaussian random number or a random matrix / vector with [mean, variance]; You can cast to output to proper value using as Matrix | Vector notation
     * 
     * @param {number} mean
     * @param {number} variance
     * @param {number} [rows]
     * @param {number} [cols]
     * @returns {(Matrix | Vector | number)}
     * @memberof RandNumGen
     */
    public gaussian(mean: number = 0, variance: number = 1, rows?: number, cols?: number): Matrix | Vector | number {
        const gauss = new Gaussian(mean, variance);
        const gaussFn = (): number => {
            const value = this._rnd.random_excl();
            return gauss.ppf(value);
        }
        return this.createOutput(gaussFn, rows, cols);
    }

    /**
     * Generates a random number in the interval of [0,1];
     *
     * @returns {number}
     * @memberof RandNumGen
     */
    public randIncluded(): number {
        return this._rnd.random_incl();
    }

    /**
     * Generates a random number in the interval of [0, 4294967295]
     *
     * @returns {number}
     * @memberof RandNumGen
     */
    public randInt(): number {
        return this._rnd.random_int();
    }

    /**
     * Changes the seed for existing generator instance:
     *
     * @param {number} seed
     * @returns
     * @memberof RandNumGen
     */
    public setSeed(seed: number) {
        return this._rnd.init_seed(seed);
    }

    // Creates a matrix with given callback values
    private createMatrix(rows: number, cols: number, callback: () => number) {
        const result = Matrix.zeros(rows, cols);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                result.setElement(callback(), i, j);
            }
        }
        return result;
    }

    // Creates a vector with given callback values
    private createVector(length: number, callback: () => number) {
        const result = Vector.zeros(length);
        for (let i = 0; i < length; i++) {
            const value = callback();
            result.setElement(value, i);
        }
        return result;
    }

    // Creates the resulting output object.
    private createOutput(callback: () => number, rows?: number, cols?: number): Matrix | Vector | number {
        if (rows && cols) {
            return this.createMatrix(rows, cols, callback);
        } else if (rows) {
            return this.createVector(rows, callback);
        }
        return callback();
    }
}