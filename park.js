const Park = function () {
  this.enclosure = [];
}

Park.prototype.numberOfDinosInEnclosure = function () {
  return this.enclosure.length;
}

Park.prototype.addToEnclosure = function (dino) {
  this.enclosure.push(dino);
}

module.exports = Park;
