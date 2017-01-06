window.onload = function(){

(function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
})();

(function testListingAllNotes() {
  var noteList = new NoteList();
  noteList.addNoteToList("This is a note on Tuesday");
  assert.isTrue(noteList.list[0].text === "This is a note on Tuesday");
})();

(function testNoNotesDisplayed() {
  var listHTML = new ListHTML({ list: [] });
  assert.isTrue(listHTML.view() === '<ul></ul>')
})();


(function testOneNoteDisplayed() {
  var noteList = { list: [{ text: "This is a note on Tuesday", _id: 0 }]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === '<ul><li><div id="0"><a href=#0>This is a note on Tu</a></div></li></ul>')
})();


(function testMultipleNotesDisplayed(){
  var noteList = { list: [{text: "This is a note", _id: 0}, {text: "Another note", _id: 1}]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === '<ul><li><div id="0"><a href=#0>This is a note</a></div></li><li><div id="1"><a href=#1>Another note</a></div></li></ul>')
})();


(function testCreatingNoteList() {
  var noteController = new NoteController();
  noteController.addNewNote("Favourite drink: seltzer")
  assert.isTrue(noteController.noteList.list[0].text === "Favourite drink: seltzer")
})();


(function testNoteIsAddedToList() {
  var note = { text: "Favourite drink: seltzer", _id: 0 }
  var noteController = new NoteController();
  noteController.addNewNote(note);
  assert.isTrue(noteController.noteList.list.length === 1)
})();

(function testDisplayNoteList() {
  var noteController = new NoteController();
  noteController.addNewNote("Favourite drink: seltzer")
  noteController.displayNotes()
  assert.isTrue(noteController.listHTML.view() === '<ul><li><div id="0"><a href=#0>Favourite drink: sel</a></div></li></ul>')
})();

(function testsinglenoteview() {
  var note = { text: "Favourite drink: seltzer", _id: 0 }
  var singleNote = new SingleNote(note);
  assert.isTrue(singleNote.displayNote() === "<div>Favourite drink: seltzer</div>")
})();


(function testShowsOnlyTwentyCharacters() {
  var noteList = { list: [{ text: "Favourite drink: seltzer", _id: 0 }]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === '<ul><li><div id="0"><a href=#0>Favourite drink: sel</a></div></li></ul>')
})();

(function testsShowsUniqueNoteId() {
  var noteController = new NoteController()
  noteController.addNewNote("Favourite drink: seltzer")
  noteController.addNewNote("Another note")
  assert.isTrue(noteController.noteList.list[1]._id === 1)

})();

(function testsURLChanges() {
  var noteController = new NoteController()
  noteController.addNewNote("Favourite drink: seltzer")
  noteController.displayNotes()
  document.getElementsByTagName("a")[0].click()
  assert.isTrue(document.URL === "file:///Users/courtneyosborn/Documents/projects/course_week_7/note-app/test.html#0")
})();

(function testControllerCanCreateSingleNoteView(){
  var noteController = new NoteController()
  noteController.addNewNote("Favourite drink: seltzer")
  noteController.showSingleNote(0)
  var element = document.getElementById("app")
  assert.isTrue(element.innerHTML === "<div>Favourite drink: seltzer</div>")
})();

(function testControllerGetsURL(){
  var noteController = new NoteController()
  noteController.addNewNote("Favourite drink: seltzer")
  noteController.displayNotes()
  document.getElementsByTagName("a")[0].click()
  assert.isTrue(noteController.getIdFromURL(window.location) === 0)
})();

(function testUsesURLGetSingleNotePage(){
  var noteController = new NoteController()
  noteController.addNewNote("Favourite drink: seltzer")
  noteController.displayNotes()
  document.getElementsByTagName("a")[0].click()
  noteController.showNoteForCurrentPage()
  assert.isTrue(document.getElementById("app").innerHTML ===  "<div>Favourite drink: seltzer</div>")
})();

(function testHashChangeUpdatesPage(){
  // window.addEventListener("hashchange", function(){
    assert.isTrue(document.getElementById("app").innerHTML ===  "<div>Favourite drink: seltzer</div>")
  // });
})();

}
