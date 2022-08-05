import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: true,
  savedMessage: '',
  notes: [],
  activeNote: null,
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
    addNewEmptyNote:(state, action) => {

    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state, action) => {

    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {

    },
    deleteNote: (state, action) => {

    }
    
  }
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNote
} = journalSlice.actions

export default journalSlice.reducer