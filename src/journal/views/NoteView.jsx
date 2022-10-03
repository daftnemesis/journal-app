import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteOutline, FirstPage, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../hooks"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import { ImageGallery } from "../components"
import { useRef } from "react"

export const NoteView = () => {

  const dispatch = useDispatch()

  const { active:note, savedMessage } = useSelector(state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if(savedMessage.length > 0) {
      Swal.fire('Nota actualizada', savedMessage, 'success')
    }
  }, [savedMessage])

  const fileInputRef = useRef()
  

  const onSetNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({target}) => {

    if(target.files === 0) return;
    dispatch(startUploadingFiles(target.files))

  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }
  

  return (

    <Grid className="animate__animated animate__fadeIn animate__faster" container direction='row' justifyContent={"space-between"} alignItems='center' sx={{mb: 1}} >
      <Grid item>
        <Typography fontSize={39} fontWeight='light' >{dateString}</Typography>
      </Grid>
      <Grid item>

        <input 
          type="file" 
          multiple
          onChange={onFileInputChange}
          ref={fileInputRef}
          style={{display: 'none'}}
        />

        <IconButton
          color='primary'
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          color='primary'
          sx={{padding: 2}}
          onClick={onSetNote}
        >
          <SaveOutlined sx={{fontSize: 30, mr: 1}} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth 
          placeholder="Ingrese un titulo"
          label='Titulo'
          sx={{border: 'none', mb: 1}}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder="Que sucedio el dia de hoy"
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}  
        />
      </Grid>

      <Grid container justifyContent='end' >

        <Button
          onClick={onDelete}
          sx={{mt: 2}}
          color='error'
        >

          <DeleteOutline />
          Borrar

        </Button>

      </Grid>

      {note.imageUrls && <ImageGallery images={note.imageUrls} />}

    </Grid>

  )
}
