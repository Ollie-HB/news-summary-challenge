// class NotesView {
//   constructor(model, client) {
//     this.model = model;
//     this.client = client;
//     this.mainContainerEl = document.querySelector('#main-container');

//     this.displayNotes()
//     };

//     displayNews(){
//       const notes = this.model.getNotes();
//     notes.forEach(note => {
//       const noteElement = document.createElement('div');
//       noteElement.textContent = note;
//       noteElement.className = 'note';
//       document.querySelector('#note-input').value = ''
//       this.mainContainerEl.append(noteElement);
//     });
//   };
//     }

//   displayNewsFromApi(){
//     this.client.loadNotes((notes) => {
//       this.model.setNotes(notes);
//       this.displayNotes();
   
//     });
    
//   }