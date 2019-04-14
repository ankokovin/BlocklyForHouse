module.exports = function(Blockly) {
Blockly.Blocks['humidity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Humidity")
          .appendField(new Blockly.FieldNumber(0, 0, 100), "Value")
          .appendField("%");
      this.setOutput(true, "humidity");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['hum_sensor'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("Humidity sensor");
      this.setOutput(true, "hum_sensor");
      this.setColour(230);
   this.setTooltip("Create humidity sensor");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['hum_get'] = {
    init: function() {
      this.appendValueInput("hum_sensor")
          .setCheck("hum_sensor")
          .appendField("get humidity");
      this.setOutput(true, "humidity");
      this.setColour(230);
   this.setTooltip("get humidity from sensor");
   this.setHelpUrl("");
    }
  };
}