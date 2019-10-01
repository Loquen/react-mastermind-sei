import React from 'react';
import styles from './ColorPicker.module.css'

const ColorPicker = (props) => (

    <div>
      {props.colors.map((color,idx) =>
        <button 
          key={color}
          className={`${styles.button} ${styles.orient}`}
          style={{
            backgroundColor: idx === props.selColorIdx ? 'white' : color,
            borderColor: color
          }}
        />
          
      )}
    </div>
  
);

export default ColorPicker;