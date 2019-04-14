var Blockly = require('node-blockly');

Blockly.Blocks['door'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Door Named:");
    this.setOutput(true, "door");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['open_door'] = {
  init: function() {
    this.appendValueInput("door")
        .setCheck("door")
        .appendField("Open door");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['close_door'] = {
  init: function() {
    this.appendValueInput("door")
        .setCheck("door")
        .appendField("Close door");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['door_is_open'] = {
  init: function() {
    this.appendValueInput("door")
        .setCheck("door")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Is open");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Python['door'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'door('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['open_door'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_door+'.open()\n';
  return code;
};

Blockly.Python['close_door'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_door+'.close()\n';
  return code;
};

Blockly.Python['door_is_open'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_door + '.is_open()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
const fs = require('fs');
filename = 'input.txt';
if (process.argv.length>2)
  filename = process.argv[2];
fs.readFile(filename,'utf8', (err, data) =>{
  if (err) throw err;
  try {
    var xml = Blockly.Xml.textToDom(data);
  }
  catch (e) {
    console.log(e);
    return
  }

  var workspace = new Blockly.Workspace();
  Blockly.Xml.domToWorkspace(xml, workspace);
  var code = Blockly.Python.workspaceToCode(workspace);

  console.log(code) 
})



