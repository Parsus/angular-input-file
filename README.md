# angular-input-file
Adds directives for input[file]

## Install

You can install this package with `bower`.

### bower

```shell
bower install angular-input-file
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-input-file/angular-input-file.js"></script>
```

Then add `ngInputFile` as a dependency for your app:

```javascript
angular.module('myApp', ['ngInputFile']);
```

## Documentation

**Directive**

### ngModel
Extends the `ngModel` directive to bind a data URL to the scope.

**Example:**

```
<input type="file" accept="image/*" capture="camera" ng-model="photo">
<img ng-if="photo" src={{photo}}>
```

## License

The MIT License

Copyright (c) 2015 Parsus Solutions, LLC. http://parsus.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
