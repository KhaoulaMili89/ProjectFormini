import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Button} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import { add_course } from '../../actions/courseAction';
import Icon from '@material-ui/core/Icon';
/* 
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

 */

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch()
  const [input, setInput] = useState(
    {
      Title:'',
      Description:'',
      Content:'',
    }
  )
  const id = useSelector(state => state.authReducer.user._id)
  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_course(input,id));
    handleClose();
  }
  
/******* */
 /* // Create new plugin instance
 const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
 // for onchange event
 const [pdfFile, setPdfFile]=useState(null);
 const [pdfFileError, setPdfFileError]=useState('');

 // for submit event
 const [viewPdf, setViewPdf]=useState(null);

 // onchange event
 const fileType=['application/pdf'];
 const handlePdfFileChange=(e)=>{
   let selectedFile=e.target.files[0];
   if(selectedFile){
     if(selectedFile&&fileType.includes(selectedFile.type)){
       let reader = new FileReader();
           reader.readAsDataURL(selectedFile);
           reader.onloadend = (e) =>{
             setPdfFile(e.target.result);
             setPdfFileError('');
           }
     }
     else{
       setPdfFile(null);
       setPdfFileError('Please select valid pdf file');
     }
   }
   else{
     console.log('select your file');
   }
 }

 // form submit
 const handlePdfFileSubmit=(e)=>{
   e.preventDefault();
   if(pdfFile!==null){
     setViewPdf(pdfFile);
   }
   else{
     setViewPdf(null);
   }
 }

 */

/***** */
  return (
    <div>
     <button type="button" onClick={handleOpen} variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}>

        Add Course
      </button> 
      
      <Button
      type="button"
      onClick={handleOpen}
        variant="contained"
        color="primary"
        className={classes.button}
        
      >
                Add Course

      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
     <div style={modalStyle} className={classes.paper}>
     
          <input type='text' placeholder='Title' name='Title' onChange={handleChange}/><br/>
          <input type='text' placeholder='Description' name='Description' onChange={handleChange}/><br/>
          <input type='text' placeholder='Content' name='Content' onChange={handleChange}/><br/>

          <br></br>
    {/* 
    <form className='form-group' onSubmit={handlePdfFileSubmit}>
      <input type="file" className='form-control'
        required onChange={handlePdfFileChange}
      />
      {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
      <br></br>
      <button type="submit" className='btn btn-success btn-lg'>
        UPLOAD
      </button>
    </form>
    <br></br>
    <h4>View PDF</h4>
    <div className='pdf-container'> */}
      {/* show pdf conditionally (if we have one)  
      {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl={viewPdf}
          plugins={[defaultLayoutPluginInstance]} />
    </Worker></>}

    {/* if we dont have pdf or viewPdf state is null 
    {!viewPdf&&<>No pdf file selected</>}
    </div> */}


          
          <Button type='submit' onClick={handleSubmit} variant="contained" color="secondary">Add</Button>
    </div> 
    </Modal>
    
    </div>
  );
}
 