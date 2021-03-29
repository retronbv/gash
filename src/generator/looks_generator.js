import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['looks_sayforsecs'] = function(block) {
  var value_speech = Blockly.JavaScript.valueToCode(block, 'SPEECH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_secs = Blockly.JavaScript.valueToCode(block, 'SECS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yield* this.sayAndWait(' + value_speech + ', ' + value_secs + ');\n';
  return code;
};

Blockly.JavaScript['looks_say'] = function(block) {
  var value_speech = Blockly.JavaScript.valueToCode(block, 'SPEECH', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.say(' + value_speech + ');\n';
  return code;
};

Blockly.JavaScript['looks_thinkforsecs'] = function(block) {
  var value_thought = Blockly.JavaScript.valueToCode(block, 'THOUGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_secs = Blockly.JavaScript.valueToCode(block, 'SECS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yield* this.thinkAndWait(' + value_thought + ', ' + value_secs + ');\n';
  return code;
};

Blockly.JavaScript['looks_think'] = function(block) {
  var value_thought = Blockly.JavaScript.valueToCode(block, 'THOUGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.think(' + value_thought + ');\n';
  return code;
};

Blockly.JavaScript['looks_switchcostumeto'] = function(block) {
  var value_costume = Blockly.JavaScript.valueToCode(block, 'COSTUME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Make sure this code works (and update switchbackdropto accordingly)
	var code = `
	if (typeof(` + value_costume + `) === int) {
		this.costumeNumber = ` + value_costume + `;
	} else {
		this.costume = ` + value_costume + `;
	}\n`;
  return code;
};

Blockly.JavaScript['looks_costumemenu'] = function(block) {
  var dropdown_costume = block.getFieldValue('COSTUME');
  var code = dropdown_costume;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['looks_nextcostume'] = function(block) {
  var code = 'this.costumeNumber++;\n';
  return code;
};

Blockly.JavaScript['looks_switchbackdropto'] = function(block) {
  var value_backdrop = Blockly.JavaScript.valueToCode(block, 'BACKDROP', Blockly.JavaScript.ORDER_ATOMIC);
	var code;
	if (value_backdrop === 'NEXT') {
		code = 'this.stage.costumeNumber++;\n'
	} else if (value_backdrop === 'PREVIOUS') {
		code = 'this.stage.costumeNumber--;\n'
	} else if (value_backdrop === 'NEXT') {
		code = 'this.stage.costume = "random backdrop";\n'
	} else {
		code = `
			if (typeof(` + value_backdrop + `) === int) {
				this.stage.costumeNumber = ` + value_backdrop + `;
			} else if {
				this.stage.costume = ` + value_backdrop + `;
			}\n`;
	}
  return code;
};

Blockly.JavaScript['looks_backdropmenu'] = function(block) {
  var dropdown_backdrop = block.getFieldValue('BACKDROP');
  var code = dropdown_backdrop;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['looks_nextbackdrop'] = function(block) {
  var code = 'this.stage.costumeNumber++;\n';
  return code;
};

Blockly.JavaScript['looks_changesizeby'] = function(block) {
  var value_size = Blockly.JavaScript.valueToCode(block, 'SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.size += ' + value_size + ';\n';
  return code;
};

Blockly.JavaScript['looks_setsize'] = function(block) {
  var value_size = Blockly.JavaScript.valueToCode(block, 'SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.size = ' + value_size + ';\n';
  return code;
};

Blockly.JavaScript['looks_changeeffectby'] = function(block) {
  var dropdown_effect = block.getFieldValue('EFFECT');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.effects.' + dropdown_effect + ' += ' + value_value + ';\n';
  return code;
};

Blockly.JavaScript['looks_seteffectto'] = function(block) {
  var dropdown_effect = block.getFieldValue('EFFECT');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.effects.' + dropdown_effect + ' = ' + value_value + ';\n';
  return code;
};

Blockly.JavaScript['looks_cleargraphiceffects'] = function(block) {
  var code = 'this.effects.clear();\n';
  return code;
};

Blockly.JavaScript['looks_show'] = function(block) {
  var code = 'this.visible = true;\n';
  return code;
};

Blockly.JavaScript['looks_hide'] = function(block) {
  var code = 'this.visible = false;\n';
  return code;
};

Blockly.JavaScript['looks_gotofrontback'] = function(block) {
  var dropdown_frontback = block.getFieldValue('FRONTBACK');
	var ahead_behind;
	if (dropdown_frontback === "FRONT") {
		ahead_behind = "Ahead";
	} else {
		ahead_behind = "Behind";
	}
  var code = 'this.move' + ahead_behind + '();\n';
  return code;
};

Blockly.JavaScript['looks_goforwardbackwardlayers'] = function(block) {
  var dropdown_forwardbackward = block.getFieldValue('FORWARDBACKWARD');
  var value_layers = Blockly.JavaScript.valueToCode(block, 'LAYERS', Blockly.JavaScript.ORDER_ATOMIC);
  var ahead_behind;
	if (dropdown_forwardbackward === "FORWARD") {
		ahead_behind = "Ahead";
	} else {
		ahead_behind = "Behind";
	}
  var code = 'this.move' + ahead_behind + '(' + value_layers + ');\n';
  return code;
};

Blockly.JavaScript['looks_costumenumbername'] = function(block) {
  var dropdown_numbername = block.getFieldValue('NUMBERNAME');
	var code;
	if (dropdown_numbername === "NUMBER") {
		code = 'this.costumeNumber';
	} else {
		code = 'this.costume';
	}
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['looks_backdropnumbername'] = function(block) {
  var dropdown_numbername = block.getFieldValue('NUMBERNAME');
  var code;
	if (dropdown_numbername === "NUMBER") {
		code = 'this.stage.costumeNumber';
	} else {
		code = 'this.stage.costume';
	}
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['looks_size'] = function(block) {
  var code = 'this.size';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};