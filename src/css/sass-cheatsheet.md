# SASS Cheatsheet
Read the [Full docs here](https://sass-lang.com/guide)

## Debugging in SASS _(@debug)_:
```css
$color: #CDCDCD;

.whatever {
  @debug $color;
}
```
Acts like `console.log()` in JS. If you are compiling your SASS files from CLI, yow will see in your terminal something like:
```sh
your-file.scss:4 Debug: #CDCDCD
```

## mixins:
Are basically chunks of reusable code that can receive **optional** params
```css
@mixin name-of-mixin($param) {
  /* styles to be applied to all rules that will import it */
}
```
```css
.rule {
  @include name-of-mixin(argument)
}
```
## functions:


## loops:
```css
@for $i from 0 through 2 {
  .l--m-t-#{$i * 10} {
    margin-top: $i * 10
  }
}
```
will generate:
```css
.l--m-t-0 {
  margin-top: 0;
}

.l--m-t-10 {
  margin-top: 10;
}

.l--m-t-20 {
  margin-top: 20;
}
```


---

## Footnotes:
### _repeat_ function
The `repeat(howMany, lengthValue)` function repeats `howMany` times the `lengthValue` in a size/length rule.

```css
{ grid-template-columns: repeat(3, 100px) }
/* is equivalent to: */
{ grid-template-columns: 100px, 100px, 100px}
```
For a better explanation go to: [MDN repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)

### _fr_ unit
The `fr` unit (“fraction”) can be used when defining grids, just like any other CSS length unit such as `%`, `px`, `em`, etc. It represents a fraction of the available space, applying something like: `available-space / sum of all fr in the rule`. ie: if you have an availbale space of 500px then:

| Rule             | Math              | Value of each fr | Result           |
|------------------|:-----------------:|:----------------:|:----------------:|
|1fr               | `500px / (1)`     | 500px            | `|<500>|`        |
|1fr 1fr           | `500px / (1+1)`   | 250px            | `|<250>|<250>|`  |
|2fr 1fr 3fr       | `500px / (2+1+3)` | 83.33px          | `|<166.6>|<83.3>|249.99>|` |
