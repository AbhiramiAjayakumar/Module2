interface Paint{
    drawPOint():void;
}
interface Paint2D{
draw2DImage():void;
}
class Circle implements Paint,Paint2D{

draw2DImage():void{
    console.log("drawing a 2d image");
}
drawPOint(): void {
    console.log("drawing lline");
}
}
var cir=new Circle();
cir.drawPOint();
cir.draw2DImage();