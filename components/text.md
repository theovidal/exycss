# Text

The framework contains a lot of stuff helping developers to make text elements.  
[Go to the demo page](https://css.exybore.fr/text/)

## Alignment

First, you have the different classes `exy-text__right`, `exy-text__left`, `exy-text__center` and `exy-text__justify` for the text alignment.

```html
<p class="exy-text__right">Right aligned text</p>
<p class="exy-text__center">Center aligned text</p>
<p class="exy-text__left">Left aligned text</p>
<p class="exy-text__justify">Justified text</p>
```

You can also make a vertical text (rotation of -90°, or 270° in the clockwise) with the `exy-text__vertical` class.

```html
<p class="exy-text__vertical">Vertical aligned text</p>
```

## Sizing

In ExyCSS, you can resize texts at the same size of headings. That's simple to use : tiny (h6), small (h5), medium (h4), large (h3), XL (h2) or XXL (h1).

```html
<p class="exy-text__tiny">Tiny text</p>
<p class="exy-text__small">Small text</p>
<p class="exy-text__medium">Medium text</p>
<p class="exy-text__large">Large text</p>
<p class="exy-text__xl">XL text</p>
<p class="exy-text__xxl">XXL text</p>
```

## Text formatting

The framework include different variations of bold text : 300, 400, 600, 900 and default (which is 500). You can choose what you want, and what is the most adapted at the situation.

```html
<p class="exy-text__bold-300">Bold text 300</p>
<p class="exy-text__bold-400">Bold text 400</p>
<p class="exy-text__bold-600">Bold text 600</p>
<p class="exy-text__bold-900">Bold text 900</p>
<p class="exy-text__bold">Default bold text</p>
```

You can also make classic text formatting :

```html
<p class="exy-text__underline">Underlined text</p>
<p class="exy-text__overline">Over-lined text</p>
<p class="exy-text__line-through">Lined-through text</p>
<p class="exy-text__italic">Italic text</p>
<p class="exy-text__oblique">Oblique text</p>
```

## Horizontal rules (hr)

You have a choice of five different horizontal rules : classic, dotted, dashed, double or with a gradient.  
Just add the `exy-hr__type` class to an `hr` element. Replace type by a choice listed above.

```html
<p>HR with a gradient :</p>
<hr class="exy-hr__gradient" />
<p>Double line HR</p>
<hr class="exy-hr__double" />
<p>Dashed HR</p>
<hr class="exy-hr__dashed" />
<p>Dotted HR</p>
<hr class="exy-hr__dotted" />
<p>Classic HR</p>
<hr />
```

## Text transformation

You can easily transform a text in uppercase, lowercase or capitalize. Simply add `exy-text__type` class to your element. Replace type by a choice listed above.

```html
<p class="exy-text__uppercase">text in uppercase</p>
<p class="exy-text__lowercase">TEXT IN LOWERCASE</p>
<p class="exy-text__capitalize">capital letter to each word</p>
```
