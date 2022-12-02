# Responsive menu
Responsive menu (using es6 classes)

# Description
A very simple responsive menu.

# Usage
It needs to be added to the html document inside head tag

```html
<link rel="stylesheet" href="menu.css">
```
It needs to be added to the html document before </body> tag

```html
<script src="menu.js"></script>
```
HTML code must be like this
```html
  <div class="responsive-nav" id="YOUR_ID">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Catalog</a></li>
      <li><a href="#">Compare</a></li>
      <li><a href="#">User</a></li>
      <li><a href="#">Shipping</a></li>
      <li><a href="#">Payment</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">News & updates</a></li>
      <li><a href="#">Privacy policy</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
  </div>
```

It needs to be added to the custom js file
```js script
  const menu = new FlexibleMenu({
    el: '#id',
    openPopup: false
  })
```

# API Documentation
HTML code must be like this
Property      | Type    | Description                                                    | Default value
------------- | ------- | -------------------------------------------------------------- | --------
**el**        | string  | ID of your element. Just like this '#id'                       | -
**openPopup** | boolean | This option opens the "more" popup on click. Default by hover. | false
