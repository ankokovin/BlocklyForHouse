Blockly.Blocks['door'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Door")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setNextStatement(true, ["open_door", "close_door"]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['open_door'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Open");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['close_door'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Close");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};