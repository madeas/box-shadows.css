# Box-shadows.css [![releases](http://madeas.ru/img/git/release03.svg)](https://github.com/madeas/box-shadows.css/releases) [![changelog](http://madeas.ru/img/git/changelog.svg)](/CHANGELOG.md) [![npm](http://madeas.ru/img/git/npm-n.svg)](https://www.npmjs.com/package/box-shadows-css) [![cdn](http://madeas.ru/img/git/cdn-none.svg)](#) [![chat gitter](http://madeas.ru/img/git/gitter_im.svg)](https://gitter.im/andrejsharapov/box-shadows.css) [![license](http://madeas.ru/img/git/license.svg)](/LICENSE)

<p><a href="https://github.com/madeas/box-shadows.css"><img src="https://github.com/madeas/box-shadows.css/blob/master/logotype.png?raw=true" alt="Logo" width="74" height="74" align="right" data-canonical-src="https://github.com/madeas/box-shadows.css/blob/master/logotype.png" style="max-width:100%;"></a></p>

A cross-browser collection of CSS box-shadow  
	+ Generator the file box-shadows.min.css  
	+ Box-shadow CSS Generator  

<p align="center">Try, experiment, use whatever you want and how you want!</p>

`box-shadows.css` is a collection of simple and pleasant shadows for you to use in your projects. Great for tables, homepages content, containers, navigation and other blocks your website.

## Content
* [Basic Usage](#basic-usage)
	- [Include the stylesheet](#1-include-the-stylesheet)
	- [Add the class](#2-add-the-class)
	- [Add the class number](#3-add-the-class-number)
	- [Hover effect](#4-hover-effect)
	- [Animation on CSS Transform](#5-animation-on-css-transform)
	- [Adding the inset parameter](#6-adding-the-inset-parameter)
* [WordPress Function.php](#wordpress-functionphp)
* [Generator the file box-shadows.min.css](#generator-the-file-box-shadowsmincss)
* [Box-shadow CSS Generator](#box-shadow-css-generator)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)

## Basic Usage

### 1. Include the stylesheet
Include the stylesheet on your document's `<head>`

```html
<head>
  <link rel="stylesheet" href="/box-shadows.css">
  <!-- or -->
  <link rel="stylesheet" href="/box-shadows.min.css">
</head>
```

#### Download

See [box-shadows.css][link1] and [box-shadows.min.css][link2]

You can use the [generator][link7] to create your own minimal file and reduce the load on the site.

### 2. Add the class
Add the class `.bShadow` to the block you want to use:

```html
<div class="bShadow"></div>
```

### 3. Add the class number
Finally you need to add an additional class to the existing `.bShadow-` with the number or use one of the classes separately, without class `.bShadow`. For example,

```html
<div class="bShadow bShadow-1"></div>
<!-- or -->
<div class="bShadow-1"></div>
```

* Now the collection consists of 53 variants of shadows with the number, as well as three independent classes: **.bShadow**, **.bShadow-light** and **.bShadow-inset**.

See [example][link3]

## 4. Hover effect

Add the class `h` to the element `.bShadow-` to create an hover effect.
For example,

```html
<div class="bShadow-38 bShadow-1h"></div>
```

See [example][link4] block one (.bShadow) / try, experiment, use whatever you want and how you want!

## 5. Animation on CSS Transform
Class `.bShadow` uses a smooth default animation in .2s `transition: transform 0.2s ease-in-out`, and also includes a property that warns the browser about the upcoming shadow transformation and position `will-change: transform, box-shadow;`.

Use this to make a beautiful animation of your blocks. For example,

```css
.transform-translateY-5:hover {
  -webkit-transform: translateY(-5px) translateZ(0);
  transform: translateY(-5px) translateZ(0);
}
```
```html
<div class="bShadow transform-translateY-5 bShadow-1h">bShadow</div>
```

See [example][link5]

## 6. Adding the *inset* parameter
To add a parameter, just insert the script on the html page and specify in it the classes for which you want to apply it.

Full example for `.bShadow-1`. A point in front of the class is required!

```JavaScript
[].forEach.call(document.querySelectorAll('.bShadow-1'), function(node) {
  var bsh = getComputedStyle(node).boxShadow;
  node.style.boxShadow = "inset " + bsh;
});
```

 See [example][link6]

## WordPress Function.php  
Use the library by including the stylesheet in your **function.php** your theme in **WordPress**.

>
	wp_enqueue_style( 'bShadows-style', '//madeas.github.io/box-shadows.min.css', array(), '1.0.4'  );

To update the version, change `1.0.4` on new.

## Generator the file box-shadows.min.css
The site also has a [box-shadows.min.css][link10] file **generator** with an instruction that allows the user to create her/his own file consisting only of the selected classes. This will help reduce the load on the site if your project uses less than two or three shadows.

  1. [go to the site][link10]
  2. сlick the button "show in blocks" and follow the instruction
  3. finally click the "download" button and connect the downloaded file to your site
	
It great!

## Box-shadow CSS Generator
You can use the classic [css box-shadow generator][link9] to supplement the collection with your own styles. By clicking the “Save and add next” button, you can create an infinite number of classes. The first generated and subsequent classes are assigned a sequence number that is not in the collection. You can copy the received styles and paste into the root css or the box-shadows.min.css file created on the site.

## Usage
To use box-shadows.css in your website, simply add the stylesheet into your document's `<head>`. Add the class `.bShadow` to an element, along with any of the `.bShadow- with number` or singly, add `hover` effect and javascript for create property `inset`. Optional. Download the entire library or create your own smaller one, using the css file generator. If you do not have enough classes, you can create them yourself in the generator and add them to the downloaded file. That's all! You've got a CSS block with shadow.

## License
Box-shadows.css.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing
If you have any suggestions, or you find an error, tell me in [twitter][link8] @andrejsharapov. I will answer you.

<p align="right"><a href="#content">↑ to top</a></p>

[link1]: https://madeas.github.io/box-shadows.css "box-shadows.css"
[link2]: https://madeas.github.io/box-shadows.min.css "box-shadows.min.css"
[link3]: https://madeas.github.io/box-shadows "all blocks with box-shadow"
[link4]: https://jsfiddle.net/madeas/8at5r1bL/1/ "hover effect"
[link5]: https://jsfiddle.net/madeas/8at5r1bL/ "animation"
[link6]: https://jsfiddle.net/madeas/8at5r1bL/3/ "inset javascript"
[link7]: #generator-the-file-box-shadowsmincss "generator min.css"
[link8]: https://twitter.com/andrejsharapov "twitter"
[link9]: https://madeas.github.io/box-shadows#gen "Box-shadow CSS Generator"
[link10]: https://madeas.github.io/box-shadows#css_gen "Generator the file min.CSS"
