const Application = PIXI.Application;

const app = new Application({
  width: 256,
  height: 256,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 0x000033;

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xff3300);
rectangle.lineStyle(16, 0xffd900, 1);
rectangle.drawRect(0, 0, app.renderer.width / 2, app.renderer.height / 2);
rectangle.endFill();

app.stage.addChild(rectangle);

const polygon = new Graphics();
polygon
  .lineStyle(2, 0x0000ff, 1)
  .beginFill(0xffff0b, 0.25)
  .drawPolygon(
    // array of points for a hexagon
    [
      app.renderer.width / 2,
      app.renderer.height / 2 - 100,
      app.renderer.width / 2 + 100,
      app.renderer.height / 2 - 100,
      app.renderer.width / 2 + 50,
      app.renderer.height / 2,
    ]
  )
  .endFill();

// stage polygon
app.stage.addChild(polygon);

// create circle graphic
const circle = new Graphics();

circle.beginFill(0xffffff).drawCircle(400, 400, 100);

// stage circle
app.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(2, 0xffffff, 1).moveTo(0, 0).lineTo(800, 600);

// stage
app.stage.addChild(line);

const torus = new Graphics();
torus
  .beginFill(0xffffff)
  .drawTorus(500, 500, 100, 50, 0, Math.PI / 2)
  .endFill();

app.stage.addChild(torus);

const style = new PIXI.TextStyle({
  fontFamily: "Montserrat",
  fontSize: 36,
  fill: "hotpink",
  stroke: "#000000",
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
});

const myText = new PIXI.Text("Hello World", style);
app.stage.addChild(myText);

myText.text = "bloop aosuiygfiysagdliysagldiygsa";
myText.style.wordWrapping = true;
myText.style.wordWrapWidth = 100;
myText.align = "center";

app.ticker.add((delta) => loop(delta));

function loop(delta) {
  rectangle.rotation += 0.01;
}
