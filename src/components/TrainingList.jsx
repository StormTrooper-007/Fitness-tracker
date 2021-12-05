import React, {useState, useRef} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import {useHistory}from 'react-router-dom';
import '../styles/Traininglist.css';
import { addTraining, deleteTraining, editTraining } from '../features/trainingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';



export default function TrainingList() {
  const [trainingValue, setTrainingValue] = useState("");
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);
  const [openTraining, setOpenTraining] = useState({});

  const dispatch = useDispatch();
  const trainings = useSelector(state => state.trainings);

  const inputRef = useRef(true);

  function changeFocus(){
      inputRef.current.disabled = false;
      inputRef.current.focus();
  }

  function updateHandler(id, value, e){
    if(e.which===13){
      editTraining({id:id, title:value})
      inputRef.current.disabled = true;
    }

  }

      return (
        <div>
          <motion.h1 animate={{x:"25rem"}}>My list</motion.h1>
          <input type="text" value={trainingValue} 
          onChange={e => setTrainingValue(e.target.value)}
          />
          <button onClick={() => dispatch(addTraining({
            title:trainingValue
          }))}>
              add
            </button>

          <ul>
            {trainings.map((training, index) => 
              (<li id={training.id}>
                <input ref={inputRef} 
                disabled={inputRef} 
                defaultValue={training.title} 
                onKeyPress = {e => updateHandler(training.id, inputRef.current.value, e)}
                />
                <button onClick={() => dispatch(deleteTraining({ id : training.id }))}>delete</button>
                <button onClick={() => changeFocus()}>edit</button>
              </li> 
              ))}
          </ul>
        </div>
      )
}
