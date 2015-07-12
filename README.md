# Future-Elements-Selector
An replacement of jQuery's Future Elements Selector using without jQuery.

###Usage
 1. Include future.js in your Project:
  ```html
  <script src="./future.js"></script>
  ```
 2. Pass Arguments to bind Function:
  ```Javascript
  bind(object, eventName, selector, callback);
  ```

  \*object: an DOM element

  \*eventName: standard or non-standard Javascript Event Name

  \*selector: a CSS Style Selector

  \*callback: a function will bu executed after the event has been fired, it passes an argument referenced to the event.

  Example:
  ```
  bind(document, "click", "body", function (event) {
      event.target.style.backgroundColor = "rgb(245, 245, 245)";
  });
  ```

For more Information, please check out `demo.htm`

###License

The MIT License (MIT)

Copyright (c) 2015 Futur Solo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
