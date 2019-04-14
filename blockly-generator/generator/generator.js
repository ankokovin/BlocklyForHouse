var Blockly = require('node-blockly');

require('./myblockly')(Blockly)

const fs = require('fs');
filename = 'input.txt';
if (process.argv.length>2)
  filename = process.argv[2];
fs.readFile(filename,'utf8', (err, data) =>{
  if (err) throw err;
  try {
    var xml = Blockly.Xml.textToDom(data);
  }
  catch (e) {
    console.log(e);
    return
  }

  var workspace = new Blockly.Workspace();
  Blockly.Xml.domToWorkspace(xml, workspace);
  var code = Blockly.Python.workspaceToCode(workspace);

  console.log(code) 
})



