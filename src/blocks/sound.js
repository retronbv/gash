import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([{
  "type": "sound_playuntildone",
  "message0": "play sound %1 until done",
  "args0": [
    {
      "type": "input_value",
      "name": "SOUND"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_playsound",
  "message0": "play sound %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SOUND"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_stopallsounds",
  "message0": "stop all sounds",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_changeeffectby",
  "message0": "change %1 effect by %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "EFFECT",
      "options": [
        [
          "pitch",
          "pitch"
        ],
        [
          "pan",
          "pan"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_seteffectto",
  "message0": "set %1 effect to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "EFFECT",
      "options": [
        [
          "pitch",
          "pitch"
        ],
        [
          "pan",
          "pan"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_clearsoundeffects",
  "message0": "clear sound effects",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_changevolumeby",
  "message0": "change volume by %1",
  "args0": [
    {
      "type": "input_value",
      "name": "VOLUME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_setvolume",
  "message0": "set volume to %1 %%",
  "args0": [
    {
      "type": "input_value",
      "name": "VOLUME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_volume",
  "message0": "volume",
  "output": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sound_soundmenu",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "SOUND",
      "options": [
        [
          "Meow",
          "Meow"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}]);