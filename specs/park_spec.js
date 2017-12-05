const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Park', function() {
 let park;
 let dino1;
 let dino2;

 beforeEach( function () {
   park = new Park();
   dino1 = new Dinosaur('Velociraptor', 2);
   dino2 = new Dinosaur('Triceratops', 3);
 });

 it('enclosure should start empty', function () {
   assert.strictEqual(park.numberOfDinosInEnclosure(), 0);
 });

 it('should be able to add dinosaur', function () {
   park.addToEnclosure(dino1);
   assert.strictEqual(park.numberOfDinosInEnclosure(), 1);
 })

});
