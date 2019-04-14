module.exports = function(Blockly) {
Blockly.Blocks['illuminance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("illuminance")
          .appendField(new Blockly.FieldNumber(0, 0, Infinity, 3), "Value")
          .appendField("lux");
      this.setOutput(true, "illuminance");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['il_sensor'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("Illuminance sensor");
      this.setOutput(true, "il_sensor");
      this.setColour(230);
   this.setTooltip("create illuminance sensor");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['il_get'] = {
    init: function() {
      this.appendValueInput("il_sensor")
          .setCheck("il_sensor")
          .appendField("get illuminance");
      this.setOutput(true, "illuminance");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
}