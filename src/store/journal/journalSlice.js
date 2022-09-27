import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  savedMessage: '',
  notes: [],
  active: null,
  // activeNote: {
  //   id: '',
  //   title: '',
  //   body: '',
  //   date: 123456,
  //   imageUrls: []
  // }
}

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {

    savingNewNote: (state) => {
      state.isSaving = true
    },

    addNewEmptyNote:(state, action) => {

      state.notes.push( action.payload );
      state.isSaving = false;

    },
    setActiveNote: (state, action) => {

      state.active = action.payload;

    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(note => {

        if(note.id === action.payload.id) {
          return action.payload
        }

        return note

        //todo: mostrar mensaje de actualizacion
      })
    },
    deleteNote: (state, action) => {

    }
    
  }
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNote
} = journalSlice.actions

export default journalSlice.reducer
