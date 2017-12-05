const Park = function () {
  this.enclosure = [];
}

Park.prototype.numberOfDinos = function () {
  return this.enclosure.length;
}

module.exports = Park;
