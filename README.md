# TrixVue Editor

![trix vue](https://cloud.githubusercontent.com/assets/2282642/25186952/e09adc1c-254b-11e7-9489-a6fe9f49129e.png)

# Install
_You can use Yarn or NPM_

```bash
$ npm install --save trix-vue2
```
**OR**
```bash
yarn add trix-vue2
```

# Usage

```javascript
import { TrixVue } from 'trix-vue2'

//... your code
```

# Props

Name           | Type   | Default                                            | Description
-------------- | ------ | -------------------------------------------------- | ----------------------------------------------------------------------
id | String | trix-container | Set the id (necessary if multiple editors in the same view)
inputId        | String | -                                                  | Set inputId when you want to embed trix editor inside a form.


## Example
**_Basic Setup_**

```html
<template>
  <div id="app">
    <div>
      <h1>TrixVue Editor</h1>
      <h3>1. Simple TrixVue example:</h3>
      <trix-vue></trix-vue>
    </div>
  </div>
</template>

<script>
  import { TrixVue } from '../src/index.js'

  export default {
    components: {
      TrixVue,
    }
  }
</script>
```

**_Use inside a form_**

```html
<template>
  <div id="app">
    <div>
      <h1>TrixVue Editor</h1>
      <h3>2. TrixVue inside form:</h3>
      <form id="cool-form">
        <input id="x" value="Editor content goes here" type="hidden" name="content">
        <trix-vue inputId="x"></trix-vue>
      </form>
    </div>
  </div>
</template>

<script>
  import { TrixVue } from '../src/index.js'

  export default {
    components: {
      TrixVue,
    }
  }
</script>
```

# License

MIT
