window.onload = function(){
  var noteController = new NoteController();
  noteController.addNewNote("Favourite drink: seltzer");
  noteController.displayNotes();
  noteController.makeURLChangeShowNoteForCurrentPage();
  document.getElementsByTagName("a")[0].click()
};
git 
