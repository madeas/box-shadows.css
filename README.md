# Box-shadows.css <a href="https://github.com/madeas/box-shadows.css/releases"><img src="http://madeas.ru/img/git/release02.svg" alt="releases"></a> <a href="/CHANGELOG.md"><img src="http://madeas.ru/img/git/changelog.svg" alt="changelog"></a> <a href="#"><img src="http://madeas.ru/img/git/cdn01.svg" alt="cdn"></a> <a href="https://gitter.im/andrejsharapov/box-shadows.css"><img src="http://madeas.ru/img/git/gitter.svg" alt="chat gitter"></a> <a href="/LICENSE"><img src="http://madeas.ru/img/git/license.svg" alt="license"></a>

<p><a href="https://github.com/madeas/box-shadows.css"><img src="https://github.com/madeas/box-shadows.css/blob/master/logotype.png?raw=true" alt="Logo" width="74" height="74" align="right" data-canonical-src="https://necolas.github.io/normalize.css/logo.svg" style="max-width:100%;"></a></p>

A cross-browser collection of CSS box-shadow. Try, experiment or use whatever you want and how you want!

<code>box-shadows.css</code> a collection of simple and pleasant shadows for you to use in your projects. Great for tables, homepages content, containers, navigation and other blocks your website.

## Content
* <a href="#basic-usage">Basic Usage</a>
	- <a href="#1-include-the-stylesheet">Include the stylesheet</a>
	- <a href="#2-add-the-class">Add the class</a>
	- <a href="#3-add-the-class-number">Add the class number</a>
	- <a href="#4-hover-effect">Hover effect</a>
	- <a href="#5-animation-on-css-transform">Animation on CSS Transform</a>
	- <a href="#6-adding-the-inset-parameter">Adding the inset parameter	</a>
* <a href="#wordpress-functionphp">WordPress Function.php</a>
* <a href="#generator-the-file-box-shadowsmincss">Generator the file box-shadows.min.css</a>
* <a href="#box-shadow-css-generator">Box-shadow CSS Generator</a>
* <a href="#usage">Usage</a>
* <a href="#license">License</a>
* <a href="#contributing">Contributing</a>

## Basic Usage

### 1. Include the stylesheet
1a. Include the stylesheet on your document's <code>&lt;head&gt;</code>

```html
<head>
  <link rel="stylesheet" href="https://madeas.github.io/box-shadows.css">
</head>
```

1b. Include the stylesheet min.css:

```html
<head>
  <link rel="stylesheet" href="https://madeas.github.io/box-shadows.min.css">
</head>
```

1c. Download

See [box-shadows.css][link1] and [box-shadows.min.css][link2]

If you use downloaded files, upload them to the directory of your site and set the stylesheet after the opening <code>&lt;head&gt;</code> tags:

```html
<head>
  <link rel="stylesheet" href="/box-shadows.min.css">
</head>
```

You can use the [generator][link7] to create your own minimal file and reduce the load on the site.

### 2. Add the class
Add the class <code>.bShadow</code> to the block you want to use:

```html
<div class="bShadow"></div>
```

### 3. Add the class number
Finally you need to add an additional class to the existing <code>.bShadow-</code> with the number or use one of the classes separately, without class <code>.bShadow</code>. For example,

```html
<div class="bShadow bShadow-1"></div>
<!-- or -->
<div class="bShadow-1"></div>
```

* Now the collection consists of 53 variants of shadows with the number, as well as three additional classes: <b>.bShadow</b>, <b>.bShadow-light</b> and <b>.bShadow-inset</b>.

See [example][link3]

## 4. Hover effect

Add the class <code>h</code> to the element <code>.bShadow-1</code> to create an hover effect.
For example,

```html
<div class="bShadow-38 bShadow-1h"></div>
```

See [example][link4] block one (.bShadow) / try, experiment, use whatever you want and how you want!

## 5. Animation on CSS Transform
Class <code>.bShadow</code> uses a smooth default animation in .2s <code>transition: transform 0.2s ease-in-out</code>, and also includes a property that warns the browser about the upcoming shadow transformation and position <code>will-change: transform, box-shadow;</code>.

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

## 6. Adding the <code>inset</code> parameter
To add a parameter, just insert the script on the html page and specify in it the classes for which you want to apply it.

Full example for <code>.bShadow-1</code>. A point in front of the class is required!

```JavaScript
[].forEach.call(document.querySelectorAll('.bShadow-1'), function(node) {
  var bsh = getComputedStyle(node).boxShadow;
  node.style.boxShadow = "inset " + bsh;
});
```

 See [example][link6]

## WordPress Function.php  
Use the library by including the stylesheet in your <b>function.php</b> your theme in <b>WordPress</b>.

>
	wp_enqueue_style( 'bShadows-style', '//madeas.github.io/box-shadows.min.css', array(), '1.0.2'  );

To update the version, change <code>1.0.2</code> on new.

## Generator the file box-shadows.min.css
If you do not want to connect the entire library to your site, you can <b>generate</b> your own file <b>min.css</b> from the selected classes.
1. [go to the site][link10]
2. сlick the button "show in blocks" and follow the instruction
3. finally click the "download" button and connect the downloaded file to your site
It great!

## Box-shadow CSS Generator
Use the [generator css box-shadow][link9] and complete the collection with your own styles. By clicking the "save and add the next" button, you can create several more classes. Then, copy the received styles and paste into your or created min.css file.

## Usage
To use box-shadows.css in your website, simply add the stylesheet into your document's <code>&lt;head&gt;</code>. Add the class <code>.bShadow</code> to an element, along with any of the <code>.bShadow- with number</code> or singly, add<code>hover</code> effect and javascript for create property <code>inset</code>. Optional. Download the entire library or create your own smaller one, using the css file generator. If you do not have enough classes, you can create them yourself in the generator and add it to the downloaded file.That's all! You've got a CSS block with shadow.

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
[link10]: https://madeas.github.io/box-shadows#gen_css "Generator the file min.CSS"
