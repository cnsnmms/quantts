import _ from 'lodash';
export type vector = number[];

export class Vector {
    private _length: number;
    public readonly className: string = 'vector';

    constructor(private _data: vector) {
        this.init(_data);
    }

    private init(data: vector) {
        this.isValidVector(data);
        this._length = data.length;
    }

    // Checks the array whether is valid or not.
    private isValidVector(arr: vector) {
        if (!_.isArray(arr)) {
            throw 'Given data is not array.';
        }
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                throw 'All elements must be numbers in the vector';
            }
        };
    }

    /**
     * Returns vector length.
     *
     * @readonly
     * @type {number}
     * @memberof Vector
     */
    public get length(): number {
        return this._length;
    }

    /**
     * Returns current vector data as plain number array
     *
     * @readonly
     * @type {vector}
     * @memberof Vector
     */
    public get data(): vector {
        return this._data;
    }

    /**
     * Vector vector multiplication (dot product). 
     *
     * @param {Vector} b Vector to multiply with the current Vector.
     * @returns {number}
     * @memberof Vector
     */
    public vecVecMult(b: Vector): number {
        if (this.length !== b.length) {
            throw 'Dimension mismatch. Please check the input vector length.';
        }
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this._data[i] * b.data[i];
        }
        return sum;
    }

    /**
     * Vector scalar multiplication.
     *
     * @param {number} sc Scalar to multiply with the current Vector.
     * @returns {Vector}
     * @memberof Vector
     */
    public vecScMult(sc: number): Vector {
        const result = [];
        for (let i = 0; i < this._length; i++) {
            result.push(this._data[i] * sc);
        }
        return new Vector(result);
    }


    /**
     * Creates zeros vector with length of m
     *  
     * @static
     * @param {number} m number of elements
     * @returns {Vector}
     * @memberof Vector
     */
    static zeros(m: number): Vector {
        let result = [];
        for (let i = 0; i < m; i++) {
            result.push(0);
        }
        return new Vector(result);
    }


    /**
     * Gets element positioned @index
     *
     * @param {number} index
     * @returns {number}
     * @memberof Vector
     */
    getElement(index: number): number {
        if (index > this._length || index < 0) {
            throw 'Index out of bound.';
        }
        return this._data[index];
    }


    /**
     * Sets element positioned @index
     *
     * @param {number} value
     * @param {number} index
     * @memberof Vector
     */
    setElement(value: number, index: number): void {
        if (index > this._length || index < 0) {
            throw 'Index out of bound.';
        }
        this._data[index] = value;
    }
}