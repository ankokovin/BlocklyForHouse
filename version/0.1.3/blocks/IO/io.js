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