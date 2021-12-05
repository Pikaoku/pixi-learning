const Application = PIXI.Application;

const app = new Application({
  width: 256,
  height: 256,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 0x000033;

// resize pixi app to be full screen
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);
