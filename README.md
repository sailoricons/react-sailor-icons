## React Sailor Icons

[![npm version](https://img.shields.io/npm/v/react-sailor-icons.svg?style=flat-square)](https://www.npmjs.com/package/react-sailor-icons)
[![npm downloads](https://img.shields.io/npm/dm/react-sailor-icons.svg?style=flat-square)](https://www.npmjs.com/package/react-sailor-icons)
[![HitCount](http://hits.dwyl.io/sailoricons/react-sailor-icons.svg)](http://hits.dwyl.io/sailoricons/react-sailor-icons)

#### What is react-sailor-icons?
react-sailor-icons is a collection of nice open source icons for React.js. Each icon is designed with an emphasis on simplicity, consistency and readability.

[Explore icons](https://bit.dev/fdfd)

#### Based on Sailor Icons

#### Support for tree-shaking, to help you reduce bundle size.

### Installation
    npm install react-sailor-icons --save
    // or
    yarn add react-sailor-icons

### Usage

```javascript
import React from 'react';
import { Anchor } from 'react-sailor-icons';

const App = () => {
  return <Anchor />
};

export default App;
```

Icons can be configured with inline props:
```javascript
<Anchor color="red" size={48} />
```

If you can't use ES6 imports, it's possible to include icons from the compiled folder ./dist.
```javascript
var Anchor = require('react-sailor-icons/dist/icons/anchor').default;

var MyComponent = React.createClass({
  render: function () {
    return (
      <Anchor />
    );
  }
});
```
You can also include the whole icon pack:

```javascript
import React from 'react';
import * as Icon from 'react-sailor-icons';

const App = () => {
  return <Icon.Anchor />
};

export default App;
```
