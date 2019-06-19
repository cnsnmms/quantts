import { Matrix } from '../matrix';
import { Vector } from '../vector';

// const invalidMx = new Matrix([[1, 2], [4]]);
// const invalidMx2 = new Matrix([]);
const invalidMx3 = new Matrix([[],[]]);



const created = Matrix.create(5, 2);
const unit = Matrix.unit(3);
const diag = Matrix.diag(4, 2, 5);
const ones = Matrix.ones(10);
const zeros = Matrix.zeros(4);

console.log('Genereated Arrays *********************************************');
console.log('create:\n', created.data, '\n', 'unit:\n', unit.data, '\n', 'diag:\n', diag.data, '\n', 'ones:\n', ones.data, '\n', 'zeros:\n', zeros.data);
console.log('Generated objects *********************************************')
console.log(created, unit, diag, ones, zeros);

const a = new Matrix([[1, 2], [3, 4]]);
var mxScTest = a.mxScMult(2);
var mxVecTest = a.mxVecMult(new Vector([1, 2]));
var mxMxTest = a.mxMxMult(new Matrix([[1, 2], [3, 4]]));
console.log('mxScTest: \n', mxScTest.data);
console.log('mxVecTest: \n', mxVecTest.data);
console.log('mxMxTest: \n', mxMxTest.data);