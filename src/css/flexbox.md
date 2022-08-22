# Flexbox Cheatsheet

```css
{ display: flex; ... }
```

## _Parent properties_

* `display: flex` defines the flex container
* Children items are displayed in a row by default having **_x_** as its **_main axis_**.
* The items start from the start edge of the *main axis*.
* The items do not stretch on the *main axis*, but can shrink.
* The items will stretch to fill the available space of the _cross axis_.
* Margins for flex tiems **never** collapses or shrinks regardless of whether there is space available or not in its flex container.

**flex-direction:** Specifies the direction of the **main axis**.

```css
{ flex-direction: row* | row-reverse | column | column-reverse }
```

**flex-wrap :** Specifies whether the flex items should wrap or not.

```css
{ flex-wrap: nowrap* | wrap | wrap-reverse }
```

**flex-flow :** Shorthand property for `flex-direction` and `flex-wrap`.

```css
{ flex-flow: row nowrap* | flex-direction flex-wrap }
```

**justify-content :** Aligns flex items on the **main axis**.

```css
{ justify-content: flex-start* | flex-end | center | space-around | space-between | space-evenly }
```

**align-content :** Aligns flex container lines on the **cross axis** when space is _available_.

```css
{ align-content: stretch* | flex-start | flex-end | center | space-around | space-between }
```

**align-items :** Aligns flex items on the **cross axis**.

```css
{ align-items: stretch* | flex-start | flex-end | center | baseline }
```

## _Children properties (flex items)_

**flex-basis :** Specifies the intial **size** of a flex item on the **main axis**.

* **_Note_**: the value assigned to this property is _weighter_ than `witdh` or `height`.

```css
{ flex-basis: auto* | size }
```

**align-self:** Overrides the `align-items` property defined in the flex container thus allowing the flex item to be independently aligned in the **cross axis**.

```css
{ align-self: auto* | flex-start | flex-end | center | stretch | baseline }
```

**flex-grow :** Specifies how much a flex item will grow in relation to the **_available space_**<sup>[1](#available-space "Click to see the footnote")</sup> inside the parent flex container.

```css
{ flex-grow: 0* | <number> }
```

**flex-shrink :** Specifies how much a flex item will shrink in relation to the **_negative available space_**<sup>[1](#available-space "Click to see the footnote")</sup> in the parent flex container.

```css
{ flex-shrink: 1* | <number> }
```

**flex :** Shorthand property for `flex-grow`, `flex-shrink` and `flex-basis`.

```css
{ flex: 0 1 auto* | flex-grow flex-shrink flex-basis }
```

* **_Note_**: There are some additional "magic" values for this property:

```css
{ flex: none } => { flex: 0 0 auto }
{ flex: auto } => { flex: 1 1 auto }
{ flex: <number> } => { flex: <number> 0 0 }
```

**order :** Controls the order in which flex items are laid out in the **main axis** of a flex container.

```css
{ order: 0* | -<number> | 0 | <number> }
```

---

### Footnotes:
<strong id="available-space">Available space</strong>
```js
[flex container size] - SUM(space occupied by the flex items) - SUM(space assigned to flex items margins)
```

* **_shrink / grow factor_**
```js
x = available space = [flex container size] - SUM[space occupied by the flex items] - SUM[space assigned to flex items margins]
y = SUM(flex-[shrink|grow]) fo flex items
x/y = shrink|grow factor
```

---

* In this document, semicolons at the end of the line in rules are ommited intentionally by visualization purposes ;)
