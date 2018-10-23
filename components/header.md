# Header

Headers let you put usefull links to your page and logo / title.
Our header system is simple but rich.

## All code

```html
<header class="exy-header__container exy-color__red-600-back">
    <div class="exy-header__mobile-menu">
      <a class="exy-header__mobile-btn" href="#!"><i class="material-icons">menu</i></a>
    </div>
    <div class="exy-header__titler">
      <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-header__logo exy-img__round" />
      <span class="exy-header__title">ExyCSS</span>
    </div>
    <div class="exy-header__link-container">
      <a href="#!" class="exy-header__link">Home</a>
      <a href="#!" class="exy-header__link">Git repo</a>
      <a href="#!" class="exy-header__link">Wiki</a>
    </div>
  </header>
  <ul class="exy-header__mobile-nav exy-color__red-500-back">
    <li><a href="#!" class="exy-header__link">Home</a></li>
    <li><a href="#!" class="exy-header__link">Git repo</a></li>
    <li><a href="#!" class="exy-header__link">Wiki</a></li>
    <li><a href="#!" class="exy-header__link exy-header__close-mobile"><i class="material-icons">close</i></a></li>
  </ul>
```

## Step by step

**1.** Add a main header element with the class `exy-header__container`

```html
<header class="exy-header__container">
</header>
```

**2.** If you want, you can add a background color with the corresponding class. Without it, the header will be transparent.

```html
<header class="exy-header__container exy-color__red-600-back">
</header>
```

**3.** Let's put the 3 principal categories of the header : `exy-header__mobile-menu` for the mobile menu, `exy-header__titler` for the title and the logo and `exy-header__link-container` for the navigation links.

```html
<header class="exy-header__container exy-color__red-600-back">
    <div class="exy-header__mobile-menu">
    </div>
    <div class="exy-header__titler">
    </div>
    <div class="exy-header__link-container">
    </div>
</header>
```

**4.** In the title container, we will put our logo (optional) with the `exy-header__logo` class a span with `exy-header__title` class.

```html
<header class="exy-header__container exy-color__red-600-back">
    <div class="exy-header__mobile-menu">
    </div>
    <div class="exy-header__titler">
        <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-header__logo exy-img__round" />
        <span class="exy-header__title">ExyCSS</span>
    </div>
    <div class="exy-header__link-container">
    </div>
</header>
```

_Note : the class `exy-img__round` change the image to a rounded logo. Just go to [this wiki page](https://github.com/Exybore/exycss/wiki/Images) for more information_

**5.** Let's put our navigation links now. Just add `a` elements with the `exy-header__link` class.

```html
<header class="exy-header__container exy-color__red-600-back">
    <div class="exy-header__mobile-menu">
    </div>
    <div class="exy-header__titler">
        <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-header__logo exy-img__round" />
        <span class="exy-header__title">ExyCSS</span>
    </div>
    <div class="exy-header__link-container">
      <a href="#!" class="exy-header__link">Home</a>
      <a href="#!" class="exy-header__link">Git repo</a>
      <a href="#!" class="exy-header__link">Wiki</a>
    </div>
</header>
```

**6.** In the `exy-header__mobile-menu` container, we will add the menu button who opens the mobile navigation. Just put an `a`element and give it a `exy-header__mobile-btn` class. Only visible on phone (>400px).

```html
<header class="exy-header__container exy-color__red-600-back">
    <div class="exy-header__mobile-menu">
        <a class="exy-header__mobile-btn" href="#!"><i class="material-icons">menu</i></a>
    </div>
    <div class="exy-header__titler">
        <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-header__logo exy-img__round" />
        <span class="exy-header__title">ExyCSS</span>
    </div>
    <div class="exy-header__link-container">
        <a href="#!" class="exy-header__link">Home</a>
        <a href="#!" class="exy-header__link">Git repo</a>
        <a href="#!" class="exy-header__link">Wiki</a>
    </div>
</header>
```

_Note : it's recommended to put a material icon right here_

**7.** Now we have added our mobile button, let's make the real mobile menu. After the `header` elements, add a `ul` element with `exy-header__mobile-nav` class and a color (optional).

```html
<header class="exy-header__container exy-color__red-600-back">
    <div class="exy-header__mobile-menu">
        <a class="exy-header__mobile-btn" href="#!"><i class="material-icons">menu</i></a>
    </div>
    <div class="exy-header__titler">
        <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-header__logo exy-img__round" />
        <span class="exy-header__title">ExyCSS</span>
    </div>
    <div class="exy-header__link-container">
        <a href="#!" class="exy-header__link">Home</a>
        <a href="#!" class="exy-header__link">Git repo</a>
        <a href="#!" class="exy-header__link">Wiki</a>
    </div>
</header>
<ul class="exy-header__mobile-nav exy-color__red-500-back">
    <li><a href="#!" class="exy-header__link">Home</a></li>
    <li><a href="#!" class="exy-header__link">Git repo</a></li>
    <li><a href="#!" class="exy-header__link">Wiki</a></li>
</ul>
```

**8.** If you want a close button to your mobile navigation, just add an element who has `exy-header__close-mobile` class. We recommend to put a material icon right here.

```html
<header class="exy-header__container exy-color__red-600-back">
    <div class="exy-header__mobile-menu">
        <a class="exy-header__mobile-btn" href="#!"><i class="material-icons">menu</i></a>
    </div>
    <div class="exy-header__titler">
        <img src="https://exybore.github.io/img/exycss.png" alt="Logo" class="exy-header__logo exy-img__round" />
        <span class="exy-header__title">ExyCSS</span>
    </div>
    <div class="exy-header__link-container">
        <a href="#!" class="exy-header__link">Home</a>
        <a href="#!" class="exy-header__link">Git repo</a>
        <a href="#!" class="exy-header__link">Wiki</a>
    </div>
</header>
<ul class="exy-header__mobile-nav exy-color__red-500-back">
    <li><a href="#!" class="exy-header__link">Home</a></li>
    <li><a href="#!" class="exy-header__link">Git repo</a></li>
    <li><a href="#!" class="exy-header__link">Wiki</a></li>
    <li><a href="#!" class="exy-header__link exy-header__close-mobile"><i class="material-icons">close</i></a></li>
</ul>
```
