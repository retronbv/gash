import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([
	{
		"type": "sensing_touching",
		"message0": "touching %1 ?",
		"args0": [
			{
				"type": "input_value",
				"name": "SPRITE"
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_touchingmenu",
		"message0": "%1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "SPRITE",
				"options": [
					[
						"mouse-pointer",
						"__MOUSE__"
					],
					[
						"edge",
						"__EDGE__"
					],
					[
						"Sprite1",
						"sprite1"
					]
				]
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_touchingcolor",
		"message0": "touching color %1 ?",
		"args0": [
			{
				"type": "input_value",
				"name": "COLOR"
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_coloristouchingcolor",
		"message0": "color %1 is touching color %2 ?",
		"args0": [
			{
				"type": "input_value",
				"name": "COLOR1"
			},
			{
				"type": "input_value",
				"name": "COLOR2"
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_distanceto",
		"message0": "distance to %1",
		"args0": [
			{
				"type": "input_value",
				"name": "SPRITE"
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_distancetomenu",
		"message0": "%1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "SPRITE",
				"options": [
					[
						"mouse-pointer",
						"__MOUSE__"
					],
					[
						"Sprite1",
						"sprite1"
					]
				]
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_askandwait",
		"message0": "ask %1 and wait",
		"args0": [
			{
				"type": "input_value",
				"name": "QUESTION"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_answer",
		"message0": "answer",
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_keypressed",
		"message0": "key %1 pressed?",
		"args0": [
			{
				"type": "input_value",
				"name": "KEY"
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_keypressedmenu",
		"message0": "%1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "KEY",
				"options": [
					[
						"space",
						"space"
					],
					[
						"right arrow",
						"right arrow"
					],
					[
						"any",
						"any"
					],
					[
						"a",
						"a"
					],
					[
						"1",
						"1"
					]
				]
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_mousedown",
		"message0": "mouse down?",
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_mousex",
		"message0": "mouse x",
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_mousey",
		"message0": "mouse y",
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_setdragmode",
		"message0": "set drag mode to %1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "DRAGGABLE",
				"options": [
					[
						"draggable",
						"true"
					],
					[
						"not draggable",
						"false"
					]
				]
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 0,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_loudness",
		"message0": "loudness",
		"output": null,
		"colour": 0,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_timer",
		"message0": "timer",
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_resettimer",
		"message0": "reset timer",
		"previousStatement": null,
		"nextStatement": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_of",
		"message0": "%1 of %2",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "PROPERTY",
				"options": [
					[
						"x position",
						"x"
					],
					[
						"y position",
						"y"
					],
					[
						"direction",
						"direction"
					],
					[
						"costume #",
						"costumeNumber"
					],
					[
						"costume name",
						"costume.name"
					],
					[
						"size",
						"size"
					],
					[
						"volume",
						"volume /* not currently available */"
					]
				]
			},
			{
				"type": "input_value",
				"name": "SPRITE"
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_ofmenu",
		"message0": "%1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "SPRITE",
				"options": [
					[
						"Stage",
						"__STAGE__"
					],
					[
						"Sprite 1",
						"sprite1"
					]
				]
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_current",
		"message0": "current %1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "UNIT",
				"options": [
					[
						"year",
						"FullYear"
					],
					[
						"month",
						"Month"
					],
					[
						"date",
						"Date"
					],
					[
						"day of week",
						"Day"
					],
					[
						"hour",
						"Hours"
					],
					[
						"minute",
						"Minutes"
					],
					[
						"second",
						"Seconds"
					]
				]
			}
		],
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_dayssince2000",
		"message0": "days since 2000",
		"output": null,
		"colour": 165,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "sensing_username",
		"message0": "username",
		"output": null,
		"colour": 0,
		"tooltip": "",
		"helpUrl": ""
	}
]);