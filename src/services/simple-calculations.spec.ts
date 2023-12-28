import 'jest';
import { add } from './simple-calculations'

describe('simple calculations', () => {
  describe('adding two numbers', () => {
    it('should produce the correct sum', () => {
      expect (add(1, 2)).toBe(3);
    });
  });
});
