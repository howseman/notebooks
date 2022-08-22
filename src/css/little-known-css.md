# Little known CSS Cheatsheet


### _@supports_
```css
{
  @supports(grid-template-columns: initial) {
    /* write your normal css here */
  }
}
```
```css
{
  @supports not (grid-template-columns: initial) {
    /* write your normal css here */
  }
}
```
The `@supports`  CSS at-rule lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule.

Read [here](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) the @supports() documentation at MDN.

### CSS.supports()
This CSS function returns a Boolean value indicating if the browser supports a given CSS feature, or not.

**Syntax:**
```js
CSS.supports(propertyName, value);
CSS.supports(supportCondition);
```

Read [here](https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports) the CSS.supports() documentation  at MDN.
