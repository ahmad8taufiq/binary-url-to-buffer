const urlToBuffer = require("./index.js");

urlToBuffer(
  "https://patra-logistic.s3.ap-southeast-1.amazonaws.com/1724906519684-nota.png"
)
  .then((buffer) => {
    console.log(buffer);
  })
  .catch((err) => {
    console.log(err);
  });
