import { createSlice } from "@reduxjs/toolkit";


const trainingSlice = createSlice({
      name:"trainings",
      initialState:[],

      reducers:{
            addTraining:(state, action) => {
                  const newTraining = {
                        id:Date.now(),
                        title:action.payload.title,
                        note:action.payload.note,
                        weight:action.payload.weight,
                        reps:action.payload.reps,
                        effort:action.payload.effort
                  };
                  state.push(newTraining);
            },

            deleteTraining:(state, action) => {
                  return state.filter(training => training.id !== action.payload.id);
            },
            editTraining:(state, action) => {
                  return state.map(training => {
                        if(training.id === action.payload.id){
                              return {
                                    ...training,
                                    title:action.payload.title,
                              }
                        }
                        return training;
                  })
            },
      }
})


export const {addTraining, deleteTraining, editTraining} = trainingSlice.actions;
export default trainingSlice.reducer;