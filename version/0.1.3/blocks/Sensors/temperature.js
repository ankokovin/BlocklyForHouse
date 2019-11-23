Blockly.Blocks['tem_sensor'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("Temperature sensor");
      this.setOutput(true, "tem_sensor");
      this.setColour(230);
   this.setTooltip("create temperature sensor");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['tem_get'] = {
    init: function() {
      this.appendValueInput("tem_sensor")
          .setCheck("tem_sensor")
          .appendField("get temperature");
      this.setOutput(true, "temperature");
      this.setColour(230);
   this.setTooltip("get temperature from sensor");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['temperature'] = {
    init: function() {
      this.appendValueInput("Value")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["°C","Celsius"], ["°F","Fahrenheit"], ["K","Kelvin"]]), "Unit");
      this.setOutput(true, "temperature");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };