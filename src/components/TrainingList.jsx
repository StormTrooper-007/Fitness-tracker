import React, {useState, useRef} from 'react';
import '../styles/Traininglist.css';
import { addTraining, deleteTraining, editTraining } from '../features/trainingSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function TrainingList() {
      const options = [

            {
                  label:"0-5",
                  value:"0-5"
                  
            },
            {
                  label:"6",
                  value:"6"
            },

            {
                  label:"7",
                  value:"7"
            },

            {
                  label:"8",
                  value:"8"
            },

            {
                  label:"9",
                  value:"9"
            },
            {
                  label:"10",
                  value:"10"
            }
      ];
  const [trainingValue, setTrainingValue] = useState("");
  const [note, setNote] = useState("");
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [effort, setEffort] = useState({scale:"0-5"});

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

  function submitHandler(e){
        e.preventDefault();
        return dispatch(addTraining({
            title:trainingValue,
            note:note,
            weight:weight,
            reps:reps,
            effort:effort
        }))
  }

  console.log(trainings);
      return (
           <div>
                 <form className="form" onSubmit={submitHandler} type="submit" action="submit">
                       <label htmlFor="">
                             training:
                             <input type="text" name="training" value={trainingValue}
                              onChange={e => setTrainingValue(e.target.value)}/>
                       </label>
                       <label htmlFor="">
                             notes:
                       <textarea type="text" name="notes" />
                       </label>
                       
                       <div className="weight">
                             <button> - </button>
                             <div>{weight}</div>
                             <button> + </button>

                       </div>
                       <div className="reps">
                       <button> - </button>
                             <div>{reps}</div>
                        <button> + </button>
                       </div>
                  
                  <div className="select-container">
                   <label htmlFor="effort-scale">
                         Effort-scale:
                        <select value={effort} onChange={(e) => setEffort({scale:e.target.value})}>
                              {options.map(option => (
                                    <option value={option.value}>{option.label}</option>
                              ))}
                        </select>
                  </label>
                  </div>
            <button type="submit">submit</button>
                 </form>
           </div>
      )
}
