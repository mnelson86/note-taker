//require fs, util, uuid
const fs = require("fs");
const util = require("util");
const uuid = require("uuid");

//readfile asynch
const readFileAsync = util.promisify(fs.readFile);
//writefile asynch
const writeFileAsync = util.promisify(fs.writeFile);
//class Store
//5 callback functions: read, write, getNotes, addNote, and removeNote
//all return a value
class Store {
  read();
  write();
  getNotes();
  addNote();
  removeNote();
}

//export = new store
module.exports = new store();
