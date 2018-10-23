# Grid

The framework is based on a grid, who allows developers to simply scale things, and to make them responsive.  
Our grid can contain a maximum of 20 cells in a row.  
To implement a cell container, just put a `div` element with `exy-grid__container`.

```html
<div class="exy-grid__container">
</div>
```

To implement a basic cell, add any element with `exy-grid__1-s` class. You can resize it by replacing "1" by a value in a range of 1 - 20.

```html
<div class="exy-grid__container">
  <div class="exy-grid__1-s">
    1 cell
  </div>

  <div class="exy-grid__1-s">
    1 cell
  </div>

  <div class="exy-grid__2-s">
    2 cells
  </div>

  <div class="exy-grid__5-s">
    5 cells
  </div>

  <div class="exy-grid__1-s">
    1 cell
  </div>

  <div class="exy-grid__4-s">
    4 cells
  </div>

  <div class="exy-grid__6-s">
    6 cells
  </div>
</div>
```

Now it's time for responsive. Just add one class by device type and your elements will adapt their size when the device change.

**Desktop (>992px):** exy-grid**1-d  
**Tablet (600px-992px):** exy-grid**1-t  
**Phone (<600px) :** exy-grid\_\_1-s

If you want to put elements who are at the same size on any device, only put elements with _exy-grid\_\_1-s_ class.

```html
<div class="exy-grid__container">
  <div class="exy-grid__1-s exy-grid__5-t exy-grid__10-d">
    1-s 5-t 10-d
  </div>

  <div class="exy-grid__1-s exy-grid__5-t exy-grid__10-d">
    1-s 5-t 10-d
  </div>

  <div class="exy-grid__2-s exy-grid__2-t exy-grid__5-d">
    2-s 2-t 5-d
  </div>

  <div class="exy-grid__6-s">
    6 on all
  </div>
</div>
```

[Go to the demo page](https://exybore.github.io/exycss/grid)
