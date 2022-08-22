Number.isNaN(NaN) // true
Number.isNaN(8) // false
Number.isNaN(null) // false
Number.isNaN(undefined) // false

// unary operator +
const numberString = '8' // '8'
const number = +numberString // 8
+null // 0
+undefined // NaN
+[] // 0
+{} // NaN
+NaN // NaN

//
"10" + 1 // 101
"10" - 1 // 9
