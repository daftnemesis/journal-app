export const startNewNote = () => {

  return async(dispatch) => {
    // uid proviene de firebase

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    //dispatch(newNote)
    //dispatch(activaarNote)
  }

}