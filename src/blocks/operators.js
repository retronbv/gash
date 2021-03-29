import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([
	{
		"type": "operators_join",
		"message0": "join %1 %2",
		"args0": [
			{
				"type": "input_value",
				"name": "INPUT1"
			},
			{
				"type": "input_value",
				"name": "INPUT2"
			}
		],
		"inputsInline": true,
		"output": null,
		"colour": 120,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "operators_letterof",
		"message0": "letter %1 of %2",
		"args0": [
			{
				"type": "input_value",
				"name": "INDEX"
			},
			{
				"type": "input_value",
				"name": "STRING"
			}
		],
		"inputsInline": true,
		"output": null,
		"colour": 120,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "operators_contains",
		"message0": "%1 contains %2",
		"args0": [
			{
				"type": "input_value",
				"name": "STRING"
			},
			{
				"type": "input_value",
				"name": "SUBSTRING"
			}
		],
		"inputsInline": true,
		"output": null,
		"colour": 120,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "operators_pickrandom",
		"message0": "pick random %1 to %2",
		"args0": [
			{
				"type": "input_value",
				"name": "NUM1"
			},
			{
				"type": "input_value",
				"name": "NUM2"
			}
		],
		"inputsInline": true,
		"output": null,
		"colour": 120,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "operators_mod",
		"message0": "%1 mod %2",
		"args0": [
			{
				"type": "input_value",
				"name": "NUM1"
			},
			{
				"type": "input_value",
				"name": "NUM2"
			}
		],
		"inputsInline": true,
		"output": null,
		"colour": 120,
		"tooltip": "",
		"helpUrl": ""
	}	
]);