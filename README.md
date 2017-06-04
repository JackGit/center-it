## description

`CenterIt` calculates width, height, ratio and offset when you want to center one rectangle into another, with designated center type (cover or contain)

## demo

[demo](https://jackgit.github.io/center-it/index.html)

## include

by script

```html
<script src="center-it.js"></script>
```

by npm

```bash
npm install center-it --save
```

```js
var CenterIt = require('center-it')
```

## usage

```js
var centerIt = new CenterIt({
  containerWidth: 100,
  containerHeight: 100,
  originWidth: 600,
  originHeight: 400,
  centerType: 'cover' // "cover" or "contain"
})

centerIt.width() // return resized width in px
centerIt.height() // return resized height in px
centerIt.ratio() // return resized ratio of origin
centerIt.offset() // return offset {top, left} of origin in px
```

it provides two helper functions

```js
// this is a helper function to set top left width height
centerIt.setPosition(el)

// this is a helper function to draw image into a canvas
centerIt.drawImage(context, image)
```
