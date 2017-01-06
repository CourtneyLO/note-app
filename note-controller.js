(function(exports){
  function NoteController(){
  this.noteList = new NoteList();
  this.listHTML = new ListHTML(this.noteList)
}

NoteController.prototype.addNewNote = function(text){
  this.noteList.addNoteToList(text);
}

NoteController.prototype.displayNotes = function(){
  var element = document.getElementById("app")
  element.innerHTML = this.listHTML.view();
}

NoteController.prototype.makeURLChangeShowNoteForCurrentPage = function(){
  window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this))
}

NoteController.prototype.showSingleNote = function(id){
  var note = this.noteList.list[id]
  var singleNote = new SingleNote(note)
  var element = document.getElementById("app")
  element.innerHTML = singleNote.displayNote();
}

NoteController.prototype.getIdFromURL = function(location){
  return Number(location.hash.split("#")[1])
}

NoteController.prototype.showNoteForCurrentPage = function() {
  this.showSingleNote(this.getIdFromURL(window.location))
}


exports.NoteController = NoteController;
})(this);
