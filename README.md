# collist
A simple way to arrange a list of elements in a column-like fashion without using cols

[Demo](http://jazcash.github.io/collist/)

[Download](https://raw.githubusercontent.com/Jazcash/collist/master/collist.css)

## Features
- Easily specify the number of items per row for phone, tablet and desktop widths
- Items have equal height on browsers that support flexbox (Pretty much everything above IE9)
- If you need support for browsers IE9 or below, you can either add the following HTML conditional comment below the collist.css include **OR** the single line of Javascript anywhere in your document.

```
<!--[if lte IE 9]>
	<style>
		.collist > li { display: inline-block; margin-right: -4px; }
	</style>
<![endif]-->
```

```javascript
<script>if (document.documentMode <= 9) document.documentElement.className = "oldIE";</script>
```

## Usage

Add the `collist` class to a `ul` element, followed by the number of items per row for each device width like so:

```HTML
<ul class="collist sm-row-1 md-row-3 lg-row-7 xl-row-12">
	<li>Your elements here</li>
	<li>Your elements here</li>
	...
```

### Gutter width
If you want to change the gutter width between the elements, you should checkout this repo and run `npm install`, then change the `$gutter` variable in the `collist.scss` file to be the width you want and run `gulp`.

### File size
If you're particulary concerned about file size, you can reduce the `$maxCols` variable to the highest number of items per row you wish to use. This value roughly equals the KB size of the file.
