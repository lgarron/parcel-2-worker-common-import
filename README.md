# Parcel 2 worker bug

To reproduce:

```shell
npm install
npx parcel src/both-call/index.html
```

This reliably produces an error like the following:

```
Uncaught Error: Cannot find module 'kWHRk'
    at newRequire (index.41ef55f5.js:59)
    at newRequire (index.41ef55f5.js:43)
    at localRequire (index.41ef55f5.js:81)
    at Object.2mo7L../worker.ts (bundle-manifest.js:23)
    at newRequire (index.41ef55f5.js:69)
    at index.41ef55f5.js:118
    at index.41ef55f5.js:141
```

## Explanation

The following library function is called from both a worker and its wrapper:

```js
import { parse } from "cubing/alg";
// ...
parse("R U R'");
```

This common use of code causes Parcel 2 to run into issues.

To see that this is due to the common use of code, try both of these.

```shell
npx parcel src/wrapper-call/index.html
npx parcel src/worker-call/index.html
```

Observe that the error does not occur if there is only one call to the library.
