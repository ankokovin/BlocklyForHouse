module.exports = function(Blockly) {
    require('./blocks/blocks')(Blockly);
    require('./generators/python')(Blockly);
}