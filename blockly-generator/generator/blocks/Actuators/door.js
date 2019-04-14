module.exports = function(Blockly) {
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
    
}