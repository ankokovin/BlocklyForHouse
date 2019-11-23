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
Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Input");
    this.appendValueInput("Input")
        .setCheck("String")
        .appendField("measurement");
    this.appendValueInput("input2")
        .setCheck("String")
        .appendField("table");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['output'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Output");
    this.appendValueInput("query")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("query");
    this.appendValueInput("json")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("JSON");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("1");
 this.setHelpUrl("");
  }
};