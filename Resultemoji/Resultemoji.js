/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Resultemoji extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("resultEmoji", "./Resultemoji/costumes/resultEmoji.png", {
        x: 120,
        y: 120
      })
    ];

    this.sounds = [
      new Sound("C2 Trumpet", "./Resultemoji/sounds/C2 Trumpet.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveResult() {
    yield* this.playSoundUntilDone("C2 Trumpet");
    this.visible = true;
    this.goto(-137, -68);
    yield* this.sayAndWait(
      "" + "You made " + ("" + this.stage.vars.moves + " moves!"),
      2
    );
    yield* this.sayAndWait("Minimum number of moves are 13!! ", 3);
  }
}
