/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 178.54556093966713,
        y: 77.69998500000001
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "clues" }, this.whenIReceiveClues),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameWindow" },
        this.whenIReceiveGamewindow
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveClues() {
    this.goto(51, -176);
    this.visible = true;
  }

  *whenIReceiveGamewindow() {
    this.visible = false;
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.chosenquestion == "q1") {
      this.broadcast("switch");
    }
  }
}
