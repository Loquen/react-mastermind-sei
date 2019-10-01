import React from 'react';
import styles from './GuessPeg.module.css'

const GuessPeg = (props) => (
  <button 
    className={styles.button}
    style={{
      backgroundColor: props.color,
      borderColor: props.color
  }} />
  
);

export default GuessPeg;