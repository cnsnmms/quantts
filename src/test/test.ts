import { Matrix } from '../matrix';
import { Vector } from '../vector';
import { RandNumGen } from '../random';
import MersenneTwister from 'mersenne-twister';

// const invalidMx = new Matrix([[1, 2], [4]]);
// const invalidMx2 = new Matrix([]);
// const invalidMx3 = new Matrix([[],[]]);



// const created = Matrix.create(5, 2);
// const unit = Matrix.unit(3);
// const diag = Matrix.diag(4, 2, 5);
// const ones = Matrix.ones(10);
// const zeros = Matrix.zeros(4);

// console.log('Genereated Arrays *********************************************');
// console.log('create:\n', created.data, '\n', 'unit:\n', unit.data, '\n', 'diag:\n', diag.data, '\n', 'ones:\n', ones.data, '\n', 'zeros:\n', zeros.data);
// console.log('Generated objects *********************************************')
// console.log(created, unit, diag, ones, zeros);

// const a = new Matrix([[1, 2], [3, 4]]);
// var mxScTest = a.mxScMult(2);
// var mxVecTest = a.mxVecMult(new Vector([1, 2]));
// var mxMxTest = a.mxMxMult(new Matrix([[1, 2], [3, 4]]));
// console.log('mxScTest: \n', mxScTest.data);
// console.log('mxVecTest: \n', mxVecTest.data);
// console.log('mxMxTest: \n', mxMxTest.data);

// console.log('Second Col: ', a.getCol(1).data);
// console.log('Second Row: ', a.getRow(1).data);

// const rand = new RandNumGen();
// const stdRnd = rand.rand() as number;
// console.log(stdRnd);
// const stdRndMx = rand.rand(3, 4);
// const stdRndVec = rand.rand(3);
// console.log('Random NUm', stdRnd, '\n');
// console.log('RandoMX', stdRndMx, '\n');
// console.log('Random Vec', stdRndVec, '\n');

// const generator = new RandNumGen();
// console.log(generator.rand());
// const vec = generator.rand(2) as Vector;
// const vec2 = generator.rand(2,3) as Vector;

// console.log(vec, vec2);

// const generator = new RandNumGen();
// console.log(generator.gaussian());
// const vec = generator.gaussian(0,1,3) as Vector;
// const vec2 = generator.gaussian(0,1,32,46) as Matrix;

// console.log(vec, vec2);


// const generator = new RandNumGen();
// console.log(generator.uniform());
// const vec = generator.uniform(0,9,3) as Vector;
// const vec2 = generator.uniform(0,12,3,4) as Matrix;

// console.log(vec, vec2);

// const mx = new Matrix([[1,2], [3,4]]);
// console.log(mx.transpose().data);

const a = new Matrix([[3,2,9],[1,4,5],[7,12,21]]);
console.log(a.determinant());
