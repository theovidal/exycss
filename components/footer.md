# Footer

Footers let you put others link and infos on the bottom of your website. It can contains a maximum of 5 groups and much links.

## All code

```html
<footer class="exy-footer__container exy-color__grey-800-back">
 <div class="exy-footer__titler">
    <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-footer__logo exy-img__round" />
    <span class="exy-footer__title">ExyCSS</span>
  </div>
  <div class="exy-footer__info-container">
    <span class="exy-footer__info-container-title">Sitemap</span>
    <ul class="exy-footer__list">
      <li><a class="exy-footer__link" href="#!">Home</a></li>
      <li><a class="exy-footer__link" href="#!">Git repo</a></li>
      <li><a class="exy-footer__link" href="#!">Wiki</a></li>
    </ul>
  </div>
  <div class="exy-footer__info-container">
    <span class="exy-footer__info-container-title">Contact</span>
    <ul class="exy-footer__list">
      <li><a class="exy-footer__link" href="#!">Email</a></li>
      <li><a class="exy-footer__link" href="#!">Twitter</a></li>
      <li><a class="exy-footer__link" href="#!">GitHub</a></li>
      <li><a class="exy-footer__link" href="#!">Google+</a></li>
    </ul>
  </div>
</footer>
```

## Step by step

**1.** Place a `footer` element with the `exy-footer__container` class.

```html
<footer class="exy-footer__container">
</footer>
```

**2.** If you want to add a color, then put the corresponding class to your footer (in _back_ mode).

```html
<footer class="exy-footer__container exy-color__grey-800-back">
</footer>
```

**3.** We're going to place our logo and site title (this is optionnal). Just add a `div` with the `exy-footer__titler` class.

```html
<footer class="exy-footer__container exy-color__grey-800-back">
  <div class="exy-footer__titler">
  </div>
</footer>
```

**4.** For our logo, we're going to add an image with the `exy-footer__logo` class. For the title, just add a `span` with `exy-footer__title` class.

```html
<footer class="exy-footer__container exy-color__grey-800-back">
  <div class="exy-footer__titler">
    <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-footer__logo exy-img__round" />
    <span class="exy-footer__title">ExyCSS</span>
  </div>
</footer>
```

**5.** For an information part, place a `div` element with `exy-footer__info-container` class. If you want a title to it, put a `span` element with `exy-footer__info-container-title` class.

```html
<footer class="exy-footer__container exy-color__grey-800-back">
  <div class="exy-footer__titler">
    <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-footer__logo exy-img__round" />
    <span class="exy-footer__title">ExyCSS</span>
    <div class="exy-footer__info-container">
      <span class="exy-footer__info-container-title">Sitemap</span>
    </div>
  </div>
</footer>
```

**6.** Now it's time to place our list. Simply add an `ul` with `exy-footer__list` class and `li` elements in. For links, just put `a` elements with `exy-footer__link` class.

```html
<footer class="exy-footer__container exy-color__grey-800-back">
  <div class="exy-footer__titler">
    <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-footer__logo exy-img__round" />
    <span class="exy-footer__title">ExyCSS</span>
    <div class="exy-footer__info-container">
      <span class="exy-footer__info-container-title">Sitemap</span>
      <ul class="exy-footer__list">
        <li><a class="exy-footer__link" href="#!">Home</a></li>
        <li><a class="exy-footer__link" href="#!">Git repo</a></li>
        <li><a class="exy-footer__link" href="#!">Wiki</a></li>
      </ul>
    </div>
  </div>
</footer>
```

**7.** You can up to 4 info containers ! Just test it, depending on your vision.

```html
<footer class="exy-footer__container exy-color__grey-800-back">
 <div class="exy-footer__titler">
    <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-footer__logo exy-img__round" />
    <span class="exy-footer__title">ExyCSS</span>
  </div>
  <div class="exy-footer__info-container">
    <span class="exy-footer__info-container-title">Sitemap</span>
    <ul class="exy-footer__list">
      <li><a class="exy-footer__link" href="#!">Home</a></li>
      <li><a class="exy-footer__link" href="#!">Git repo</a></li>
      <li><a class="exy-footer__link" href="#!">Wiki</a></li>
    </ul>
  </div>
  <div class="exy-footer__info-container">
    <span class="exy-footer__info-container-title">Contact</span>
    <ul class="exy-footer__list">
      <li><a class="exy-footer__link" href="#!">Email</a></li>
      <li><a class="exy-footer__link" href="#!">Twitter</a></li>
      <li><a class="exy-footer__link" href="#!">GitHub</a></li>
      <li><a class="exy-footer__link" href="#!">Google+</a></li>
    </ul>
  </div>
</footer>
```
