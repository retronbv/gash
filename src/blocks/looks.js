import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([{
  "type": "looks_sayforsecs",
  "message0": "say %1 for %2 seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "SPEECH",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "SECS",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_say",
  "message0": "say %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SPEECH",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_thinkforsecs",
  "message0": "think %1 for %2 seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "THOUGHT",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "SECS",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_think",
  "message0": "think %1",
  "args0": [
    {
      "type": "input_value",
      "name": "THOUGHT",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_switchcostumeto",
  "message0": "switch costume to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "COSTUME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_costumemenu",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "COSTUME",
      "options": [
        [
          "costume 1",
          "1"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_nextcostume",
  "message0": "next costume",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_switchbackdropto",
  "message0": "switch backdrop to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "BACKDROP"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_backdropmenu",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "BACKDROP",
      "options": [
        [
          "backdrop 1",
          "1"
        ],
        [
          "next backdrop",
          "NEXT"
        ],
        [
          "previous backdrop",
          "PREVIOUS"
        ],
        [
          "random backdrop",
          "RANDOM"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_nextbackdrop",
  "message0": "next backdrop",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_changesizeby",
  "message0": "change size by %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SIZE",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_setsize",
  "message0": "set size to %1 %%",
  "args0": [
    {
      "type": "input_value",
      "name": "SIZE",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_changeeffectby",
  "message0": "change %1 effect by %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "EFFECT",
      "options": [
        [
          "color",
          "color"
        ],
        [
          "fisheye",
          "fisheye"
        ],
        [
          "whirl",
          "whirl"
        ],
        [
          "pixelate",
          "pixelate"
        ],
        [
          "mosaic",
          "mosaic"
        ],
        [
          "brightness",
          "brightness"
        ],
        [
          "ghost",
          "ghost"
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
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_seteffectto",
  "message0": "set %1 effect to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "EFFECT",
      "options": [
        [
          "color",
          "color"
        ],
        [
          "fisheye",
          "fisheye"
        ],
        [
          "whirl",
          "whirl"
        ],
        [
          "pixelate",
          "pixelate"
        ],
        [
          "mosaic",
          "mosaic"
        ],
        [
          "brightness",
          "brightness"
        ],
        [
          "ghost",
          "ghost"
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
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_cleargraphiceffects",
  "message0": "clear graphic effects",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_show",
  "message0": "show",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_hide",
  "message0": "hide",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_gotofrontback",
  "message0": "go to %1 layer",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FRONTBACK",
      "options": [
        [
          "front",
          "FRONT"
        ],
        [
          "back",
          "BACK"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_goforwardbackwardlayers",
  "message0": "go %1 %2 layers",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FORWARDBACKWARD",
      "options": [
        [
          "forward",
          "FORWARD"
        ],
        [
          "backward",
          "BACKWARD"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "LAYERS",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_costumenumbername",
  "message0": "costume %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NUMBERNAME",
      "options": [
        [
          "number",
          "NUMBER"
        ],
        [
          "name",
          "NAME"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_backdropnumbername",
  "message0": "backdrop %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NUMBERNAME",
      "options": [
        [
          "number",
          "NUMBER"
        ],
        [
          "name",
          "NAME"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "looks_size",
  "message0": "size",
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
}]);