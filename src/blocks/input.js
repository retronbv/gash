import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "input_secs",
    "message0": "%1",
    "args0": [
      {
        "type": "field_number",
        "name": "SECS",
        "value": 1,
        "min": 0
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "input_direction",
    "message0": "%1",
    "args0": [
      {
        "type": "field_angle",
        "name": "DIRECTION",
        "angle": 90
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "input_color",
    "message0": "color with hue %1 saturation %2 value %3",
    "args0": [
      {
        "type": "field_number",
        "name": "HUE",
        "value": 0
      },
      {
        "type": "field_number",
        "name": "SATURATION",
        "value": 0
      },
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 0
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);