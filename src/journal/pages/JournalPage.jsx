import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"



export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptas vitae. Ut perferendis quia vel explicabo facere amet ducimus cum nam pariatur animi culpa consectetur ullam, autem vero perspiciatis adipisci dolorem officia itaque. Expedita voluptatum at ea. In corrupti eum animi ullam delectus quaerat ipsum, minus possimus? Odio, distinctio accusantium.</Typography> */}

      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}


      <IconButton size='large' sx={{color: 'white', backgroundColor: 'error.main', ':hover': {backgroundColor: 'error.main', opacity: 0.9}, position: 'fixed', right: 50, bottom: 50}} >
        <AddOutlined sx={{fontSize: 30}} />
      </IconButton>
    </JournalLayout>
  )
}
