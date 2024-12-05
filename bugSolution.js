function foo(a, b) {
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  console.log(a + b);
}

foo(1, 2); // Output: 3
foo(null, 2); // Output: 2
foo(1, null); // Output: 1
foo(null, null); // Output: 0