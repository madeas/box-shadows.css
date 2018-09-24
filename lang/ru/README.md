[![flagru][flagru]][readmeru] [![flagen][flagen]][readmeen]


# Box-shadows.css [![releases](http://madeas.ru/img/git/release05.svg)](https://github.com/madeas/box-shadows.css/releases) [![changelog](http://madeas.ru/img/git/changelog.svg)](/CHANGELOG.md) [![npm](http://madeas.ru/img/git/npm-n.svg)](https://www.npmjs.com/package/box-shadows-css) [![cdn](http://madeas.ru/img/git/cdn-none.svg)](#) [![chat gitter](http://madeas.ru/img/git/gitter_im.svg)](https://gitter.im/andrejsharapov/box-shadows.css) [![license](http://madeas.ru/img/git/license.svg)](/LICENSE)

<p><a href="https://github.com/madeas/box-shadows.css"><img src="https://github.com/madeas/box-shadows.css/blob/master/logotype.png?raw=true" alt="Logo" width="74" height="74" align="right" data-canonical-src="https://github.com/madeas/box-shadows.css/blob/master/logotype.png" style="max-width:100%;"></a></p>

Кроссбраузерная коллекция css теней  
	+ Геренатор css файлов box-shadows.min.css  
	+ Генератор css теней (box-shadow)

<p align="center">Пробуйте, экспериментируйте, используйте все как хотите и где хотите!</p>

`box-shadows.css` представляет собой набор простых и приятных теней для ваших проектов. Они отлично подойдут для использования в таблицах, содержимого домашних страниц, контейнеров, навигации и других блоков вашего сайта.

	Версия v1.0.5 стала намного проще, поскольку поддержка префикса больше не требуется. Чтобы проверить это, проверьте поддержку своего браузера на сайте [caniuse](Can I Use)

## Содержание
* [Применение](#Применение)
	- [Подключение стилей](#1-Подключение-стилей)
	- [Добавление класса](#2-Добавление-класса)
	- [Добавление класса с номером](#3-Добавление-класса-с-номером)
	- [Эффекты при наведении](#4-Эффекты-при-наведении)
	- [Плавная трансформация](#5-Плавная-трансформация-и-анимация)
	- [Добавление параметра inset](#6-Добавление-параметра-inset)
* [WordPress Function.php](#wordpress-functionphp)
* [Геренатор css файлов min.css](#Геренатор-css-файлов-box-shadowsmincss)
* [Генератор css box-shadow](#Генератор-css-box-shadow)
* [Использование](#Использование)
* [Лицензия](#Лицензия)
* [Сотрудничество](#Сотрудничество)

## Применение

### 1. Подключение стилей
Подключите таблицу стилей к вашей html странице, после открывающего тега `<head>` удобным для вас методом.

```html
<head>
  <link rel="stylesheet" href="/box-shadows.css">
  <!-- or -->
  <link rel="stylesheet" href="/box-shadows.min.css">
</head>
```

#### Загрузка

[box-shadows.css][link1] или [box-shadows.min.css][link2]

Вы можете использовать [генератор][link7], чтобы создать свой собственный минимальный файл и уменьшить нагрузку на сайт.

### 2. Добавление класса
Добавьте класс `.bShadow` к блоку, который вы хотите использовать:

```html
<div class="bShadow"></div>
```

### 3. Добавление класса с номером
Примените класс `.bShadow-` с номером к уже существующему `.bShadow` или используйте его отдельно, без основного. Например,

```html
<div class="bShadow bShadow-1"></div>
<!-- or -->
<div class="bShadow-1"></div>
```

* Сейчас коллекция состоит более чем из 50 вариантов теней с номером, а также четырех независимых классов: **.bShadow**, **.bShadow-light**, **.bShadow-inset** и **.bSnone**.

See [example][link3]

## 4. Эффекты при наведении

Чтобы придать hover-эффект вашему блоку, добавьте понравившийся класс `.bShadow-` с номером и напишите после цифры латинскую букву `h` таким образом:

```html
<div class="bShadow-38 bShadow-1h"></div>
```

Посмотрите [на примере][link4] класса *.bShadow*. При наведении он присваивает теневые значения класса *.bShadow-1* / пробуйте, экспериментируйте, используйте все что хотите и как хотите.

Если вы хотите, чтобы при наведении или клике тень не появлялась, добавьте класс **.bSnone**

## 5. Плавная трансформация и анимация
Класс `.bShadow` по умолчанию использует плавную анимацию в .2s `transition: transform 0.2s ease-in-out`, а также включает свойство, которое предупреждает браузер о предстоящей трансформации тени и позиции `will-change: transform, box-shadow;`.  

Используйте это, чтобы сделать красивую анимацию ваших блоков. Например, вы можете добавить свой класс или свойства с трансформацией:

```css
.transform-translateY-5:hover {
  -webkit-transform: translateY(-5px) translateZ(0);
  transform: translateY(-5px) translateZ(0);
}
```

Затем, добавьте их в нужный вам контейнер

```html
<div class="bShadow transform-translateY-5 bShadow-1h">bShadow</div>
```

И вы увидите [результат][link5]

## 6. Добавление параметра *inset*
Чтобы добавить параметр внутренней тени, просто вставьте скрипт на страницу html и укажите в нем классы, для которых вы хотите применить его.

Например `.bShadow-1`. Чтобы указать несколько классов, разделяйте их запятыми, как в примере ниже. Не забывайте ставить точку перед классом!

```JavaScript
[].forEach.call(document.querySelectorAll('.bShadow-1, .bShadow-2h, .bShadow-3'), function(node) {
  var bsh = getComputedStyle(node).boxShadow;
  node.style.boxShadow = "inset " + bsh;
});
```

 [Пример][link6]

## WordPress Function.php  
Используйте библиотеку, включив таблицу стилей в файле **function.php** вашей темы на **WordPress**.

>
	wp_enqueue_style( 'bShadows-style', '//madeas.github.io/box-shadows.min.css', array(), '1.0.4'  );

Чтобы обновить версию, измените ее номер на новый, например `1.0.4`.

## Геренатор css файлов box-shadows.min.css
На сайте также есть **генератор** файлов [box-shadows.min.css][link10] с инструкцией, который позволяет пользователю создать собственный файл, состоящий только из выбранных классов. Это поможет снизить нагрузку на сайт, если ваш проект использует менее двух или трех теней.

  1. [Перейдите на сайт][link10]
  2. нажмите кнопку «показать в блоках» и следуйте инструкции
  3. наконец, нажмите кнопку «загрузить» и подключите скаченный файл к своему сайту
	
Готов!

## Генератор css box-shadow
Вы можете использовать классический [генератор теней][link9], чтобы дополнять коллекцию своими собственными стилями. Нажав кнопку «Сохранить и добавить следующий», вы можете создавать бесконечное количество классов. Первому сгенерированному и последующим классам присваивается порядковый номер, который не находится в коллекции. Вы можете скопировать полученные стили и вставить в корневой файл css или файл box-shadows.min.css, созданный на сайте.

## Использование
Используйте `box-shadows.css` на вашем веб-сайте, просто добавив таблицу стилей в документ, после открывающего тега `<head>`. Добавьте класс `.bShadow` к элементу вместе с любым из `.bShadow-` с номером или по отдельности. Воспользуйтесь дополнительными функциями, чтобы создать `hover` эффект и javascript, для добавления внутренней тени - `inset` (По желанию). Загрузите всю библиотеку или создайте свой собственный файл min.css, используя генератор файлов. Если у вас недостаточно классов, вы можете создать их самостоятельно в генераторе и добавить их в загруженный файл. Это все! У вас есть блок CSS с тенью.

## Лицензия
Box-shadows.css.css предоставляется по лицензии MIT. (http://opensource.org/licenses/MIT)

## Сотрудничество
Если у вас есть какие-либо предложения или вы обнаружите ошибку, пожалуйста, сообщите мне в [twitter][link8] @andrejsharapov.

<p align="right"><a href="#Содержание">↑ наверх</a></p>

[link1]: https://madeas.github.io/box-shadows.css "box-shadows.css"
[link2]: https://madeas.github.io/box-shadows.min.css "box-shadows.min.css"
[link3]: https://madeas.github.io/box-shadows "all blocks with box-shadow"
[link4]: https://jsfiddle.net/madeas/8at5r1bL/1/ "hover effect"
[link5]: https://jsfiddle.net/madeas/8at5r1bL/ "animation"
[link6]: https://jsfiddle.net/madeas/8at5r1bL/3/ "inset javascript"
[link7]: #Геренатор-css-файлов-box-shadowsmincss "геренатор min.css"
[link8]: https://twitter.com/andrejsharapov "twitter"
[link9]: https://madeas.github.io/box-shadows#gen "Box-shadow CSS Generator"
[link10]: https://madeas.github.io/box-shadows#css_gen "Generator the file min.CSS"

[readmeru]: https://github.com/madeas/box-shadows.css/blob/master/lang/ru/README.md "Ru"
[flagru]: https://madeas.github.io/img/ru.png

[readmeen]: https://github.com/madeas/box-shadows.css/blob/master/README.md "En"
[flagen]: https://madeas.github.io/img/en.png
[caniuse]: https://caniuse.com/#search=box-shadow
