import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        onChange={(color) => state.color = color.hex}
        disableAlpha
        presetColors={[
          '#ccc', '#EFBD4E', '#80C670', '#726DE8', '#353934', '#2CCCE4', '#fff8a65',
          '#7098DA', '#C19277', '#FF96AD', '#512314', '#5F123D'
        ]}
      />
    </div>
  )
}

export default ColorPicker