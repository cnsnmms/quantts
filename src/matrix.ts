import { Vector, vector } from './vector';
import _ from 'lodash';
export type matrix = number[][];

export class Matrix {

    private _rowSize: number;
    private _colSize: number;
    private _isSquare: boolean;
    public readonly className: string = 'matrix';

    /**
     * Matrix Class Constructor
     * 
     * @param {matrix} _data Initial values for the instance. This parameter must be given at the instantiation.
     * @memberof Matrix
     */
    constructor(private _data: matrix) {
        this._init(_data);
    }

    // Initialization function
    private _init(initData: matrix) {
        this.isMatrixValid(initData);
        this._rowSize = initData.length;
        this._colSize = initData[0].length;
    }

    // Checks whether the given array data is a valid matrix or not.
    private isMatrixValid(arr: matrix) {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].length === 0) {
                    throw `Matrix can't have empty rows.`;
                }
                // Check if the row is an array.
                if (!_.isArray(arr[i])) {
                    throw `Array element ${i} is not an instance of array.`;
                }
                // Check the column size equality.
                if (i > 0 && arr[0].length !== arr[i].length) {
                    throw 'Column sizes are not equal in the given array.';
                }
                // Check if all the elements are numbers.
                for(let j=0; j < arr[i].length; j++) {
                    if(typeof arr[i][j] !== 'number') {
                        throw 'All elements must be numbers in the initial array.';
                    }
                }
            };
        } else {
            throw 'Initial array data is empty. You must provide a non-empty array for instantiation.';
        }
    }

    /**
     * Returns the current data of the matrix as plain array.
     *
     * @readonly
     * @type {matrix}
     * @memberof Matrix
     */
    public get data(): matrix {
        return this._data;
    }

    /**
     *
     *
     * @returns Number of rows.
     * @memberof Matrix
     */
    public get rowSize(): number {
        return this._rowSize;
    }

    /**
     *
     *
     * @returns Number of columns
     * @memberof Matrix
     */
    public get colSize(): number {
        return this._colSize;
    }

    /**
     * Returns the matrix dimensions as vector. First element represents the number of rows and the second element represents the number of columns.
     *
     * @readonly
     * @type {number[]}
     * @memberof Matrix
     */
    public get size(): vector {
        return [this._rowSize, this._colSize];
    }

    /**
     * Returns true if the matrix is square and vice versa.
     *
     * @readonly
     * @type {boolean}
     * @memberof Matrix
     */
    public get isSquare(): boolean {
        return this._isSquare;
    }

    /**
     * Creates n x n unit matrix instance.
     *
     * @static
     * @param {number} n Column and row size of the square matrix
     * @returns {matrix}
     * @memberof Matrix
     */
    static unit(n: number): Matrix {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push([]);
            for (let j = 0; j < n; j++) {
                if (i === j) {
                    result[i][j] = 1;
                } else {
                    result[i][j] = 0;
                }
            }
        }
        return new Matrix(result);
    }

    /**
     * Creates n x n zeros matrix instance.
     *
     * @static
     * @param {number} n Column and row size of the square matrix
     * @returns {matrix}
     * @memberof Matrix
     */
    static zeros(n: number): Matrix {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push([]);
            for (let j = 0; j < n; j++) {
                result[i][j] = 0;
            }
        }
        return new Matrix(result);
    }

    /**
     * 
     * Creates n x n ones matrix instance.
     * @static 
     * @param {number} n Column and row size of the square matrix
     * @returns {matrix}
     * @memberof Matrix
     */
    static ones(n: number): Matrix {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push([]);
            for (let j = 0; j < n; j++) {
                result[i][j] = 1;
            }
        }
        return new Matrix(result);
    }

    /**
     *
     * Creates n x n matrix instance filled by a given value. 
     * @static
     * @param {number} n Column and row size of the square matrix
     * @param {number} [fill=0] The value will be filled in.
     * @returns {matrix}
     * @memberof Matrix
     */
    static create(n: number, fill: number = 0): Matrix {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push([]);
            for (let j = 0; j < n; j++) {
                result[i][j] = fill;
            }
        }
        return new Matrix(result);
    }

    /**
     * Creates n 
     *
     * @static
     * @param {number} n
     * @param {number} [diagFill=1]
     * @param {number} [nonDiagFill=0]
     * @returns {Matrix}
     * @memberof Matrix
     */
    static diag(n: number, diagFill: number = 1, nonDiagFill: number = 0): Matrix {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push([]);
            for (let j = 0; j < n; j++) {
                if (i === j) {
                    result[i][j] = diagFill;
                } else {
                    result[i][j] = nonDiagFill;
                }
            }
        }
        return new Matrix(result);
    }

    /**
     * Gets the i th row of the matrix.
     *
     * @param {number} index Row Index
     * @returns
     * @memberof Matrix
     */
    getRow(index: number): Vector {
        if (index >= this._data.length || index < 0) {
            throw `Index out of bound. Matrix has ${this._data.length} rows and maximum row index can be between 0 and ${this._data.length - 1}.`;
        }
        return new Vector(this._data[index]);
    }

    /**
     * Sets row values with given index value and vector.
     *
     * @param {number} index
     * @param {Vector} row
     * @memberof Matrix
     */
    setRow(index: number, row: Vector) {
        if (row.length !== this._colSize) {
            throw `Dimension is wrong. Given vector has ${row.length} elements while matrix column length is ${row.length}.`;
        }
        if (index >= this._data.length || index < 0) {
            throw `Index out of bound. Matrix has ${this._data.length} rows and maximum row index can be between 0 and ${this._data.length - 1}.`;
        }
        // Creates a shallow copy of the given vector data.
        this._data[index] = row.data.slice(0);
    }

    /**
     * Gets the i th column of the matrix.
     *
     * @param {number} index
     * @returns
     * @memberof Matrix
     */
    getCol(index: number): Vector {
        if (index >= this._data[0].length || index < 0) {
            throw `Index out of bound. Matrix has ${this._data.length} columns and maximum column index can be between 0 and ${this._data[0].length - 1}.`;
        }
        const col = [];
        this._data.forEach((x: vector) => {
            col.push(x[index])
        });
        return new Vector(col);
    }

    /**
     * Sets column values with given index value and vector.
     *
     * @param {number} index
     * @param {Vector} col
     * @memberof Matrix
     */
    setCol(index: number, col: Vector) {
        if (col.length !== this._rowSize) {
            throw `Dimension is wrong. Given vector has ${col.length} elements while matrix column length is ${col.length}.`;
        }
        if (index >= this._data[0].length || index < 0) {
            throw `Index out of bound. Matrix has ${this._data[0].length} rows and maximum row index can be between 0 and ${this._data[0].length - 1}.`;
        }
        this._data.forEach((vec: vector, i: number) => {
            vec[i] = col[i];
        });
    }

    /**
     * Gets the diagonal elements of the current matrix. The matrix must be square for this operation.
     *  
     * @readonly
     * @type {Vector}
     * @memberof Matrix
     */
    public get diag(): Vector {
        if (!this._isSquare) {
            throw 'Matrix is not square.';
        }
        const result = [];
        for (let i = 0; i < this._rowSize; i++) {
            result.push(this._data[i][i]);
        }
        return new Vector(result);
    }

    /**
     * Matrix multiplication (inner product). Multiplication doesn't effect the current matrix object values instead it returns a new matrix or vector object.
     * So you chain muliplication operations.
     * try -> const result = a.multiply(b).multiply(c);
     * @param {(Matrix | Vector | number)} b can be Matrix, Vector or plain number.
     * @returns
     * @memberof Matrix
     */
    public multiply(b: Matrix | Vector | number): Matrix | Vector {
        if (typeof b !== 'number') {
            if (b.className === 'matrix') {
                return this.mxMxMult(b as Matrix);
            } else if (b.className === 'vector') {
                return this.mxVecMult(b as Vector);
            }
        } else {
            return this.mxScMult(b);
        }
    }

    // Matrix Matrix multiplication Ab -->  A represents the current instance data b is the external matrix argument;
    public mxMxMult(b: Matrix): Matrix {
        if (this._colSize !== b.rowSize) {
            throw 'Dimension mismatch. Please check the input matrix row size.';
        }
        var result = [];
        for (let i = 0; i < this._rowSize; i++) {
            result.push([]);
            for (let j = 0; j < this._colSize; j++) {
                result[i][j] = this.getRow(i).vecVecMult(b.getCol(j));
            }
        }
        return new Matrix(result);
    }

    // Matrix Vector multiplication Ab -->  A represents the current instance data b is the external vector argument;
    public mxVecMult(b: Vector): Vector {
        if (this._colSize !== b.length) {
            throw 'Dimension mismatch. Please check the input vector length.';
        }
        var result = [];
        for (let i = 0; i < this._rowSize; i++) {
            let sum = 0;
            for (let j = 0; j < this._colSize; j++) {
                sum += this._data[i][j] * b.data[j];
            }
            result.push(sum);
        }
        return new Vector(result);
    }

    // Matrix Scaler multiplication Ab -->  A represents the current instance data b is the external scalar coefficient argument;
    public mxScMult(sc: number): Matrix {
        var result = [];
        for (let i = 0; i < this._rowSize; i++) {
            result.push([]);
            for (let j = 0; j < this._colSize; j++) {
                result[i].push(this._data[i][j] * sc);
            }
        }
        return new Matrix(result);
    }
}
