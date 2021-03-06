/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

function factorial(n) {
  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
}

function factorialIterative(n) {
  if (n < 2 ) {
    return 1;
  }

  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }

  return product;
}

function factorialIterativeDoWhile(n) {
  if (n < 2 ) {
    return 1;
  }

  do {
    n *= n-1
    n--;
  } while (n)

  return n;
}

const factorialIterativeFor = (n) => {
  if (n < 2 ) {
    return 1;
  }
  
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }

  return n;
}

// unit tests
// do not modify the below code
test("factorials", () => {
  expect(factorial(1)).toEqual(1);
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(10)).toEqual(3628800);
});

test("factorials Iterative", () => {
  expect(factorialIterative(1)).toEqual(1);
  expect(factorialIterative(2)).toEqual(2);
  expect(factorialIterative(3)).toEqual(6);
  expect(factorialIterative(10)).toEqual(3628800);
});

test("factorials Iterative Do While", () => {
  expect(factorialIterative(1)).toEqual(1);
  expect(factorialIterative(2)).toEqual(2);
  expect(factorialIterative(3)).toEqual(6);
  expect(factorialIterative(10)).toEqual(3628800);
});

test("factorials Iterative For Loop", () => {
  expect(factorialIterativeFor(1)).toEqual(1);
  expect(factorialIterativeFor(2)).toEqual(2);
  expect(factorialIterativeFor(3)).toEqual(6);
  expect(factorialIterativeFor(10)).toEqual(3628800);
});
