(function(exports) {
  function NoteList() {
    this.list = [];
    this._idCount = 0;

  NoteList.prototype.listNoteItems = function() {
      return this.list;
    };

    NoteList.prototype.addNoteToList = function(text) {
      note = new Note(text, this._idCount);
      this.list.push(note)
      this._idCount ++ 
    };
  };
  exports.NoteList = NoteList;
})(this);
