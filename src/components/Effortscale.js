import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Effortscale.css';

export default function Effortscale() {
      return (
            <div className="effort-container">
                  <div>
                        <h3>Effort scale</h3>
                  </div>
              <Button variant="outlined">0-5</Button>
              <Button variant="outlined">6</Button>
              <Button variant="outlined">7</Button>
              <Button variant="outlined">8</Button>
              <Button variant="outlined">9</Button>
            </div>
      )
}
