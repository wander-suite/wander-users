import { add } from './model';

describe('add tests', () => {
  it('should return 4 when A is 1 and B is 3', () => {
    const A = 1;
    const B = 3;

    const result = add(A, B);

    expect(result).toBe(4);
  });
});
