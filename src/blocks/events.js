import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.defineBlocksWithJsonArray([
	{
		"type": "events_whenflagclicked",
		"message0": "when green flag clicked %1 %2",
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
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_whenkeypressed",
		"message0": "when %1 key pressed %2 %3",
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
			},
			{
				"type": "input_dummy"
			},
			{
				"type": "input_statement",
				"name": "SCRIPT"
			}
		],
		"inputsInline": true,
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_whenspriteclicked",
		"message0": "when this sprite clicked %1 %2",
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
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_whenbackdropswitchesto",
		"message0": "when backdrop switches to %1 %2 %3",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "BACKDROP",
				"options": [
					[
						"backdrop 1",
						"1"
					]
				]
			},
			{
				"type": "input_dummy"
			},
			{
				"type": "input_statement",
				"name": "SCRIPT"
			}
		],
		"inputsInline": true,
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_whengreaterthan",
		"message0": "when %1 >  %2 %3",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "VALUE",
				"options": [
					[
						"loudness",
						"LOUDNESS"
					],
					[
						"timer",
						"TIMER"
					]
				]
			},
			{
				"type": "input_value",
				"name": "VALUE"
			},
			{
				"type": "input_statement",
				"name": "SCRIPT"
			}
		],
		"colour": 0,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_whenmessagereceived",
		"message0": "when I receive %1 %2 %3",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "MESSAGE",
				"options": [
					[
						"message 1",
						"message 1"
					]
				]
			},
			{
				"type": "input_dummy"
			},
			{
				"type": "input_statement",
				"name": "SCRIPT"
			}
		],
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_broadcastmessage",
		"message0": "broadcast %1",
		"args0": [
			{
				"type": "input_value",
				"name": "MESSAGE"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_messagemenu",
		"message0": "%1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "MESSAGE",
				"options": [
					[
						"message 1",
						"message 1"
					]
				]
			}
		],
		"output": null,
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "events_broadcastmessageandwait",
		"message0": "broadcast %1 and wait",
		"args0": [
			{
				"type": "input_value",
				"name": "MESSAGE"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 30,
		"tooltip": "",
		"helpUrl": ""
	}
]);