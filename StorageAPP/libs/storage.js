const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  keyFilename: "credentials.json",
});

const file = storage.bucket("tzuzulcode").file("img.jpg");

originalFile.pipe(file.createWriteStream());
