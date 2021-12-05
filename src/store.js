import { configureStore} from "@reduxjs/toolkit";
import trainingReducer from './features/trainingSlice';


export default configureStore({
      reducer:{
            trainings:trainingReducer,
      }
});