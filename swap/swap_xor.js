let a = 5, b = 8;
a = a ^ b; // a = 5 ^ 8    b = 8
b = b ^ a; // a = 5 ^ 8    b = 8 ^ 5 ^ 8 = 5
a = a ^ b; // a = 5 ^ 8 ^ 5 = 8    b = 5
console.log("a =", a, "b =", b)
