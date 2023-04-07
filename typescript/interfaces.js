var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw2DImage = function () {
        console.log("drawing a 2d image");
    };
    Circle.prototype.drawPOint = function () {
        console.log("drawing lline");
    };
    return Circle;
}());
var cir = new Circle();
cir.drawPOint();
cir.draw2DImage();
