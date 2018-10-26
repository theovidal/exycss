# ExyCSS - Setup

You can setup your project including ExyCSS with many options listed below.

## Option 1 : Clone the repository

Clone or download the repository and get files from the `dist` folder. Then, add them to your project with the folowing code :

```html
<head>
  <link rel="stylesheet" type="text/css" href="/path/to/exy.min.css"/>
  <script type="text/javascript" href="/path/to/exy.min.js"></script>
</head>
```

## Option 2 : Use files on the framework's website

Include this snippet in your code :

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://css.exybore.fr/dist/exy.min.css"/>
  <script type="text/javascript" href="https://css.exybore.fr/dist/exy.min.js"
</head>
```

## Option 3 : Use npm

Download the framework using `npm i exycss`. Then, load it in your main Javascript file :

```javascript
import 'exycss/dist/exy.min.js'
import 'exycss/dist/exy.min.css' // Ensure you are using css-loader
```

## Import font and icons

The framework uses the Roboto font, and the Material Icons. Import them in your code :

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900" rel="stylesheet"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
```

## 👍 You're ready !

Check the [rest of the wiki](summary.md) to explore the framework's possibilities !
