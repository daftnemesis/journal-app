import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyNote, savingNewNote, setActiveNote } from './journalSlice'
import { loadNotes } from '../../helpers'


export const startNewNote = () => {

  return async(dispatch, getState) => {
    // uid proviene de firebase


    dispatch( savingNewNote() )

    const { uid } = getState().auth
    
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`)) 
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id;

    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) );

    //dispatch(newNote)
    //dispatch(activaarNote)
  }

}

export const startLoadingNotes = () => {
  return async(dispatch, getState) => {
    const {uid} = getState().auth;

    await loadNotes(uid)
  }
}
