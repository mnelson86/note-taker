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
  read(note) {
    readFileAsync
  };
  write(note) {
    writeFileAsync
  };
  getNotes(note){
    this.read().then({
      const gotNotes = JSON.parse(note)
      }
      return gotNotes;
            
    )};
  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    // Add a unique id to the note using uuid package
    const newNote = { title, text, id: uuidv1() };
    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.getNotes()
      .then(notes => [...notes, newNote])
      .then(updatedNotes => this.write(updatedNotes))
      .then(() => newNote);
  }
  removeNote();
}

module.exports = new store();
