<img src="./branding.png" width="400">

To use the Luminescent UI Qwik Library, you need to install the package from npm.

```bash
npm install @luminescent/ui
```

Once installed, since this is a tailwind based library, you need to include the following to your tailwind config

The theme and plugins properties are optional if you don't want to use blobs in the Card component

```javascript
/** @type {import('tailwindcss').Config} */

import tailwindConfig from '@luminescent/ui/config';

export default {
  // required
  content: [
    // ...
    ...tailwindConfig.content,
  ],
  // only for blobs in the Card component
  theme: {
    extend: {
      animation: {
        // ...
        ...tailwindConfig.theme.extend.animation,
      },
      keyframes: {
        // ...
        ...tailwindConfig.theme.extend.keyframes,
      },
    },
  },
  plugins: [
    // ...
    ...tailwindConfig.plugins,
  ],
};
```

Once finished, you can import the components you need from the package.

```javascript
import { Button } from '@luminescent/ui';
```
