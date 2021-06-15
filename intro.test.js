const intro = require('./intro');

test('adds 1 + 2 to NOT equal 0', () => {
   expect(intro(1, 2)).not.toBe(0);
});

test('adds 1 + 2 to equal 3', () => {
   expect(intro(1, 2)).toBe(3);
});

test('null', () => {
   const n = null;
   expect(n).toBeNull();
   expect(n).toBeDefined();
   expect(n).not.toBeUndefined();
   expect(n).not.toBeTruthy();
   expect(n).toBeFalsy();
});

test('zero', () => {
   const z = 0;
   expect(z).not.toBeNull();
   expect(z).toBeDefined();
   expect(z).not.toBeUndefined();
   expect(z).not.toBeTruthy();
   expect(z).toBeFalsy();
});

test('adding floating point numbers', () => {
   const value = 0.1 + 0.2;
   expect(value).not.toBe(0.3); //This won't work because of rounding error: 0.300xxx04
   expect(value).toBeCloseTo(0.3); // This works.
});

/**
 * For Checking Exceptions
 */
function compileAndroidCode() {
   throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
   // When using the toThrow matcher, when invoking the function it must be wrapped with a function itself: () => compileAndroidCode() instead of just compileAndroidCode()
   expect(() => compileAndroidCode()).toThrow();
   expect(() => compileAndroidCode()).toThrow(Error);

   // You can also use the exact error message or a regexp
   expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
   expect(() => compileAndroidCode()).toThrow(/JDK/);
});
