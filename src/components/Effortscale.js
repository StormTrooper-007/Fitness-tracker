import React, {useState} from 'react';
import '../styles/Effortscale.css';


export default function Effortscale() {

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
      
      return (
            <div className="effort-container">
                  <div className="select-container">
                        <select>
                              {options.map(option => (
                                    <option value={option.value}>{option.label}</option>
                              ))}
                        </select>
                  </div>
            </div>
      )
}
