Blockly.Blocks['script'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("Name");
      this.appendValueInput("EVENT")
          .setCheck("Boolean")
          .appendField("Event");
      this.appendStatementInput("BODY")
          .setCheck(null)
          .appendField("Body");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };