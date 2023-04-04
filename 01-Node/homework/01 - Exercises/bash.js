const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

 
function bash() {
   process.stdout.write("prompt > ")
   process.stdin.on('data',function(data) {
  let args = data.toString().trim()
  let cmd = args.split(' ')[0]
  if (cmd in commands){
   commands[cmd](print,args)
  }else {
   print(`command not found: ${cmd}`)
  }
   });}

function print(output) {
process.stdout.write(output +'\n')
process.stdout.write('\nprompt > ')
}

bash();
module.exports = {
   print,
   bash,
  
};
