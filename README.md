# jQuery.backgroundParallax.js
A small jQuery plugin to make parallax background image animation.

### Usage:

**Markup**
````html
<div class="parallax-panel" data-src="images/01.png"></div>
````
Please note: `data-src` is optional if you added background image via CSS.

**Styles** - optional
````css
.parallax-panel {
  min-height: 400px;
}
````

**Initialization:**
````javascript
$('.parallax-panel').backgroundParallax();
````

### Options:
You need to pass a object for options.

#### `css` To add custom style.

**Defaults:**
````javascript
{
  backgroundSize: 'cover',
  backgroundPosition: '50% 0',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden'
}
````

#### `isMobile` Enable disable in mobile device.

**Default:** `true` if mobile device found.

### Options example:
````javascript
$('.parallax-panel').backgroundParallax({
	css: {
		backgroundSize: 'cover',
		backgroundPosition: '50% 0',
		backgroundRepeat: 'no-repeat',
		overflow: 'hidden'
	},
	isMobile: false
});
````