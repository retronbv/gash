import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([
	{
		"type": "control_wait",
		"message0": "wait %1 seconds",
		"args0": [
			{
				"type": "input_value",
				"name": "SECS"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "control_forever",
		"message0": "forever %1 %2",
		"args0": [
			{
				"type": "input_dummy"
			},
			{
				"type": "input_statement",
				"name": "SCRIPT"
			}
		],
		"previousStatement": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "control_waituntil",
		"message0": "wait until %1",
		"args0": [
			{
				"type": "input_value",
				"name": "CONDITION",
				"check": "Boolean"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "control_repeatuntil",
		"message0": "repeat until %1 %2",
		"args0": [
			{
				"type": "input_value",
				"name": "CONDITION",
				"check": "Boolean"
			},
			{
				"type": "input_statement",
				"name": "SCRIPT"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "control_stop",
		"message0": "stop %1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "STOP",
				"options": [
					[
						"all",
						"ALL"
					],
					[
						"this script",
						"THIS_SCRIPT"
					],
					[
						"other scripts in sprite",
						"OTHER_SCRIPTS_IN_SPRITE"
					]
				]
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "control_whenistartasaclone",
		"message0": "when I start as a clone %1 %2",
		"args0": [
			{
				"type": "input_dummy"
			},
			{
				"type": "input_statement",
				"name": "SCRIPT"
			}
		],
		"inputsInline": true,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "control_createclone",
		"message0": "create clone of %1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "SPRITE",
				"options": [
					[
						"myself",
						"__MYSELF__"
					],
					[
						"Sprite1",
						"sprite1"
					]
				]
			}
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "control_deletethisclone",
		"message0": "delete this clone",
		"inputsInline": true,
		"previousStatement": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	}	
]);