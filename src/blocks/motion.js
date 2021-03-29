// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([{
  "type": "motion_gotoxy",
  "message0": "go to x: %1 y: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_movesteps",
  "message0": "move %1 steps",
  "args0": [
    {
      "type": "input_value",
      "name": "STEPS",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "move sprite in current direction",
  "helpUrl": ""
},
{
  "type": "motion_goto",
  "message0": "go to %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "random position",
          "__RANDOM__"
        ],
        [
          "mouse-pointer",
          "__MOUSE__"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_glideto",
  "message0": "glide %1 secs to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "SECS",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "TO",
      "options": [
        [
          "random position",
          "__RANDOM__"
        ],
        [
          "mouse-pointer",
          "__MOUSE__"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_pointindirection",
  "message0": "point in direction %1",
  "args0": [
    {
      "type": "input_value",
      "name": "DIRECTION",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "rotate sprite counterclockwise",
  "helpUrl": ""
},
{
  "type": "motion_turnright",
  "message0": "turn %1 %2 dregrees",
  "args0": [
    {
      "type": "field_image",
      "src": "https://raw.githubusercontent.com/LLK/scratch-blocks/f45afc10cd50492c827f1136f5fedc05a63ffdd6/media/rotate-right.svg",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "DEGREES",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "turn sprite clockwise",
  "helpUrl": ""
},
{
  "type": "motion_turnleft",
  "message0": "turn %1 %2 degrees",
  "args0": [
    {
      "type": "field_image",
      "src": "https://raw.githubusercontent.com/LLK/scratch-blocks/f45afc10cd50492c827f1136f5fedc05a63ffdd6/media/rotate-left.svg",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "DEGREES",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "rotate sprite counterclockwise",
  "helpUrl": ""
},
{
  "type": "motion_pointtowards",
  "message0": "point towards %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "SPRITE",
      "options": [
        [
          "mouse-pointer",
          "__MOUSE__"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_glidesecstoxy",
  "message0": "glide %1 secs to x: %2 y: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "SECS",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_changexby",
  "message0": "change x by %1",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_setx",
  "message0": "set x to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_changeyby",
  "message0": "change y by %1",
  "args0": [
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_sety",
  "message0": "set y to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_ifonedgebounce",
  "message0": "if on edge, bounce",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_setrotationstyle",
  "message0": "set rotation style %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "STYLE",
      "options": [
        [
          "left-right",
          "LEFT_RIGHT"
        ],
        [
          "don't rotate",
          "DONT_ROTATE"
        ],
        [
          "all around",
          "ALL_AROUND"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_xposition",
  "message0": "x position",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_yposition",
  "message0": "y position",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motion_direction",
  "message0": "direction",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);