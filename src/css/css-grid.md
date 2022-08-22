# CSS Grid Cheatsheet
Read the [MDN - CSS Grid Layout reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## Grid definition

```css
{
  display: grid;
  grid-template-columns: [start] / [end];
  grid-template-rows: [start] / [end];
  grid-auto-rows: ...;
  /* grid-auto-columns: ...; Experimental */
  grid-auto-flow: ...;
  grid-gap: ...;
}
```
Using the `{ display: grid }` CSS rule you can define columns and rows on your grid using the `grid-template-rows` and `grid-template-columns` properties.

**grid-template-rows:** defines the line names and track sizing functions of the grid columns.
```css
{ grid-template-rows:  }
```

**grid-template-columns:** defines the line names and track sizing functions of the grid columns.
```css
{ grid-template-columns:  }
```

**grid-column:** ---.
```css
{ grid-column: [start] / [end] }
```

**grid-row:** ---.
```css
{ grid-row: [start] / [end] }
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
