/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Stage/costumes/1.svg", {
        x: 241.4999999999995,
        y: 182.0083713850834
      }),
      new Costume("2", "./Stage/costumes/2.png", { x: 480, y: 360 }),
      new Costume("result", "./Stage/costumes/result.svg", {
        x: 241.16493749592112,
        y: 180
      }),
      new Costume("q1", "./Stage/costumes/q1.png", { x: 458, y: 360 }),
      new Costume("q2", "./Stage/costumes/q2.png", { x: 458, y: 360 }),
      new Costume("q3", "./Stage/costumes/q3.png", { x: 458, y: 360 }),
      new Costume("q4", "./Stage/costumes/q4.png", { x: 458, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      ),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      )
    ];

    this.vars.reply = "sad";
    this.vars.moves = 13;
    this.vars.count = 4;
    this.vars.chosenquestion = "q4";
    this.vars.ans = "POP CORN";
    this.vars.score = 0;
    this.vars.checkpoints = ["A"];
  }

  *whenGreenFlagClicked() {
    this.broadcast("startGame");
  }

  *whenIReceiveStartgame() {
    this.costume = 1;
  }

  *whenIReceiveResult() {
    this.costume = "result";
  }

  *whenIReceiveQ1() {
    this.costume = "q1";
    yield* this.wait(4);
    this.broadcast("clues");
  }

  *whenIReceiveQ2() {
    this.costume = "q2";
    yield* this.wait(4);
    this.broadcast("clues");
  }

  *whenIReceiveQ3() {
    this.costume = "q3";
    yield* this.wait(4);
    this.broadcast("clues");
  }

  *whenIReceiveQ4() {
    this.costume = "q4";
    yield* this.wait(4);
    this.broadcast("clues");
  }

  *whenIReceiveSwitch() {
    this.costume = 2;
  }
}
