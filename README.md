#### TreeThunk
将多参数函数转成单参数函数

```javascript
var TreeThunk = require('./TreeThunk');

var calc = (a, b, c, d, e, f) => {
  return a + b + c + d - e - f;
}

var thunkCalc0 = TreeThunk(calc, 3);
console.log(thunkCalc0(1, 2)(3, 4)(5, 6));

var thunkCalc1 = TreeThunk(calc, 5);
console.log(thunkCalc1(1, 2)(3)(4)(5)(6));

var thunkCalc2 = TreeThunk(calc, 6);
console.log(thunkCalc2(1)(2)(3)(4)(5)(6));
```
