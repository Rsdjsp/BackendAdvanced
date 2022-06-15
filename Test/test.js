const assert = require("assert");
const deleteFile = require("./index");

//eliminar archivo

deleteFile("no-existe", (err, result) => {
  assert.ok(err); // verificamos si existe error
  assert.ok(err instanceof Error); // verificamos el tipo de error
  assert.match(err.message, /does not exist/);
});
