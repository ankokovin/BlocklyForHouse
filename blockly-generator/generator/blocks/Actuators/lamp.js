module.exports = function(Blockly) {
Blockly.Blocks['lamp'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("Lamp Named:");
      this.setOutput(true, "lamp");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['off_lamp'] = {
    init: function() {
      this.appendValueInput("lamp")
          .setCheck("lamp")
          .appendField("turn off");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['on_lamp'] = {
    init: function() {
      this.appendValueInput("lamp")
          .setCheck("lamp")
          .appendField("turn on");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['lamp_is_on'] = {
    init: function() {
      this.appendValueInput("lamp")
          .setCheck("lamp")
          .appendField("is on");
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
}