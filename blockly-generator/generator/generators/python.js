module.exports = function(Blockly) {
    require('./python/actuators')(Blockly);
    require('./python/sensors')(Blockly);
}