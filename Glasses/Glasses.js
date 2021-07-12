/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Glasses extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "sunglass-removebg-preview (2)",
        "./Glasses/costumes/sunglass-removebg-preview (2).svg",
        { x: 116, y: 110.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameWindow" },
        this.whenIReceiveGamewindow
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      )
    ];
  }

  *whenIReceiveGamewindow() {
    this.visible = true;
    this.goto(-207, -150);
  }

  *whenGreenFlagClicked() {
    this.stage.vars.moves = 0;
    this.stage.vars.count = 0;
    this.stage.vars.score = 0;
    this.visible = false;
  }

  *whenKeyLeftArrowPressed() {
    this.stage.vars.moves += 1;
    this.x += -104;
    if (this.touching(Color.rgb(255, 174, 200))) {
      this.x += 35;
    }
  }

  *whenKeyDownArrowPressed() {
    this.stage.vars.moves += 1;
    this.y += -100;
    if (this.touching(Color.rgb(255, 174, 200))) {
      this.y += 31;
    }
  }

  *whenKeyRightArrowPressed() {
    this.stage.vars.moves += 1;
    this.x += 104;
    if (this.touching(Color.rgb(255, 174, 200))) {
      this.x += -33;
    }
  }

  *whenKeyUpArrowPressed() {
    this.stage.vars.moves += 1;
    this.y += 100;
    if (this.touching(Color.rgb(255, 174, 200))) {
      this.y += -33;
    }
  }

  *whenGreenFlagClicked2() {
    while (
      !(
        this.touching(Color.rgb(14, 209, 69)) &&
        (this.stage.vars.count == 4 || this.stage.vars.count > 4)
      )
    ) {
      yield;
    }
    this.broadcast("result");
  }

  *whenGreenFlagClicked3() {
    while (!this.touching(Color.rgb(255, 242, 0))) {
      yield;
    }
    this.stage.vars.count += 1;
    this.visible = false;
    this.stage.vars.chosenquestion = "q1";
    this.broadcast("q1");
  }

  *whenGreenFlagClicked4() {
    while (!this.touching(Color.rgb(63, 72, 204))) {
      yield;
    }
    this.stage.vars.count += 1;
    this.visible = false;
    this.stage.vars.chosenquestion = "q4";
    this.broadcast("q4");
  }

  *whenGreenFlagClicked5() {
    while (!this.touching(Color.rgb(210, 0, 215))) {
      yield;
    }
    this.stage.vars.count += 1;
    this.visible = false;
    this.stage.vars.chosenquestion = "q3";
    this.broadcast("q3");
  }

  *whenGreenFlagClicked6() {
    while (!this.touching(Color.rgb(255, 127, 39))) {
      yield;
    }
    this.stage.vars.count += 1;
    this.visible = false;
    this.stage.vars.chosenquestion = "q2";
    this.broadcast("q2");
  }

  *whenIReceiveSwitch() {
    this.visible = true;
  }
}
