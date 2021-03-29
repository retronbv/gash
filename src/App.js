import React from "react";
import "./App.css";

import BlocklyJS from "blockly/javascript";

import "./blocks/test";
import "./blocks/input";
import "./blocks/motion";
import "./blocks/looks";
import "./blocks/sound";
import "./blocks/events";
import "./blocks/control";
import "./blocks/sensing";
import "./blocks/operators";

import "./generator/test_generator";
import "./generator/input_generator";
import "./generator/motion_generator";
import "./generator/looks_generator";
import "./generator/sound_generator";
import "./generator/events_generator";
import "./generator/control_generator";
import "./generator/sensing_generator";
import "./generator/operators_generator";

import BlocklyInjection from "./components/blocklyInjection.jsx";
import Leopard from "./components/leopard.jsx";

const fs = require("fs");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
    code =
      `import {
  Sprite,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
} from "../../leopard/dist/index.esm.js";
    
export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);
    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }
` +
      code +
      "}";
    console.log(code);
    fs.rename("./project/Sprite1/Sprite1.js", code, (err) => {
      console.error(err);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.generateCode}>Convert</button>
        </header>
        <BlocklyInjection />
        <Leopard />
      </div>
    );
  }
}

export default App;
