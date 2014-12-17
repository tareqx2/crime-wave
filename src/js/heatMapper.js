var inherit = (function () {
	 var F = function () {};
	 return function (C, P) {
		 F.prototype = P.prototype;
		 C.prototype = new F();
		 C.uber = P.prototype;
		 C.prototype.constructor = C;
	 }
}());

// the parent constructor
function DataMap(data,latitudeKey,longitudeKey) {
 this.latKey = latitudeKey;
 this.lonKey = longitudeKey;
}
// adding functionality to the prototype
Parent.prototype.say = function () {
 return this.name;
Figure 6-5. A CatWings object inspected in Firebug
Classical Pattern #3—Rent and Set Prototype | 123
www.it-ebooks.info