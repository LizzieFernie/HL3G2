import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Glasses from "./Glasses/Glasses.js";
import Button1 from "./Button1/Button1.js";
import Button2 from "./Button2/Button2.js";
import Resultemoji from "./Resultemoji/Resultemoji.js";
import Next from "./Next/Next.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Glasses: new Glasses({
    x: 209,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 1
  }),
  Button1: new Button1({
    x: 4,
    y: -6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Button2: new Button2({
    x: 119,
    y: -139,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 3
  }),
  Resultemoji: new Resultemoji({
    x: -137,
    y: -68,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 5
  }),
  Next: new Next({
    x: 159,
    y: -137,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 4
  }),
  Sprite1: new Sprite1({
    x: 49,
    y: -85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Sprite2: new Sprite2({
    x: 44,
    y: 98,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite3: new Sprite3({
    x: 48,
    y: 4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite4: new Sprite4({
    x: 51,
    y: -176,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
