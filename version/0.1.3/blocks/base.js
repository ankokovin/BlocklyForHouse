Blockly.Blocks['script'] = {
    init: function() {
      this.appendStatementInput("BODY")
          .setCheck(null)
          .appendField("Body");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };