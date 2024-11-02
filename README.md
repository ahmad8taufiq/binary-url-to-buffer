## Convert Binary URL to Buffer

How to use

```
const binaryUrlToBuffer = require('binary-url-to-buffer')

binaryUrlToBuffer('https://example.s3.ap-southeast-1.amazonaws.com/sample.png')
.then(r => console.log(r))
.catch(e => console.log(e))
```
