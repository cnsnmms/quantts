import { Matrix, matrix } from './matrix';

export class EigenDecomposition extends Matrix {
    private readonly EPSILON: number = 1e-12;
    private maxIter: number = 30;
    private main: number[];
    private secondary: number[];

    constructor(_data: matrix) {
        super(_data);
    }
}
