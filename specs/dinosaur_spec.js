var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {
  var tRex;

  beforeEach(function() {
    dino1 = new Dinosaur("Tyrannosaurus", 3);
  });

  it("should have a type", function() {
    assert.strictEqual(dino1.type, "Tyrannosaurus");
  });

  it("should have a number of offspring per year", function() {
    assert.strictEqual(dino1.numberOfOffspring, 3);
  });

})
