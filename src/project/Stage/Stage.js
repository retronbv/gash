/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  //Trigger,
  //Watcher,
  Costume,
  //Color,
  Sound
} from "../../leopard/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.t = 19;
  }
}
