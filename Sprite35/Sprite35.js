/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite35 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 (18)",
        "./Sprite35/costumes/pixil-frame-0 (18).png",
        { x: 21, y: 33 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite35/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "blood rain" },
        this.whenIReceiveBloodRain
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath)
    ];
  }

  *whenIReceiveBloodRain() {
    yield* this.wait(2);
    for (let i = 0; i < 12; i++) {
      this.visible = true;
      this.goto(132, this.random(-117, 77));
      while (!this.touching("edge")) {
        this.x -= 6;
        yield;
      }
      this.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }
}
