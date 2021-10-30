# Responsive Navbar

### HTML example
Following html code is an example of how to implement this navbar. Add the class `light` for a white navbar. If you do not add this class the navbar will be dark.

[Live Demo](https://jsfiddle.net/LukasWeixelbraun/Lm14qsny/3/)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    ...

    <!-- Dependencies for Navbar -->
    <link type="text/css" href="https://rawcdn.githack.com/lukasweixelbraun/responsive-navbar/6949410a9b76d30dba76b50c626212e8a5184930/min/navbar.css" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://rawcdn.githack.com/lukasweixelbraun/responsive-navbar/6949410a9b76d30dba76b50c626212e8a5184930/script/navbar.js"></script>
    
    ...
  </head>
  <body>
    <nav class="nav light">
      <div class="container">
        <div class="logo">
          <a href="#">Your Logo</a>
        </div>
        <div id="nav-list" class="main-list">
          <ul class="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <span class="nav-menu">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>

    ...
  </body>
</html>

```


### Override Css
Here is some css for you to override the two standard Font- and Background-Colors.
  
```css
/* ------   DARK color shema on top  ------ */

/* font color on top */
.nav div.logo a {
  color: #eee;
}
.nav div.main-list ul li a {
  color: #eee;
}
.nav .nav-menu i {
  background-color: #eee;
}

/* hover color on top */
.nav div.logo a:hover {
  color: #aaa;
}
.nav div.main-list ul li a:hover {
  color: #aaa;
}


/* ------   DARK color shema scrolled  ------ */

@media screen and (max-width:768px) {
  .nav.affix div.main-list ul {
    background-color: #222;
  }
}

/* font color scrolled */
.nav.affix div.main-list ul li a {
  color: #ccc;
}
.nav.affix div.logo a {
  color: #ccc;
}
.nav.affix .nav-menu i {
  background-color: #ccc;
}

/* background color scrolled */
.affix {
  background-color: #222;
}

/* hover color scrolled */
.nav.affix div.main-list ul li a:hover {
  color: #888;
}
.nav.affix div.logo a:hover {
  color: #888;
}





/* ------  LIGHT color shema on top  ------ */

/* font color on top */
.nav.light div.logo a {
  color: #111;
}
.nav.light div.main-list ul li a {
  color: #111;
}
.nav.light .nav-menu i {
  background-color: #111;
}

/* hover color on top */
.nav.light div.logo a:hover {
  color: #555;
}
.nav.light div.main-list ul li a:hover {
  color: #555;
}


/* ------   LIGHT color shema scrolled  ------ */

@media screen and (max-width:768px) {
  .nav.light.affix div.main-list ul {
    background-color: #eee;
  }
}

/* font color scrolled */
.nav.light.affix div.main-list ul li a {
  color: #111;
}
.nav.light.affix div.logo a {
  color: #111;
}
.nav.light.affix .nav-menu i {
  background-color: #111;
}

/* background color scrolled */
.light.affix {
  background-color: #eee;
}

/* hover color scrolled */
.nav.light.affix div.main-list ul li a:hover {
  color: #666;
}
.nav.light.affix div.logo a:hover {
  color: #666;
}

```
  
