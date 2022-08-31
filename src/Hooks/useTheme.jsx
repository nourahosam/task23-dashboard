import React, {useEffect, useState} from 'react';

function UseTheme() {
    const [themeBG, setBG] = useState('dark-BG');
    var [themeCardBG, setCardBG] = useState('darkCardBG');
    var [themeText, setTextColor] = useState('darkText');

    function handleChange (e){
        console.log('handlechange');
        if (!e.target.checked) {
            setBG('dark-BG');
            setCardBG('darkCardBG')
            setTextColor('darkText')
            //console.log(themeBG)
        }
        else {
            setBG('light-BG');
            setCardBG('lightCardBG')
            setTextColor('lightText')
            console.log(themeBG)
        //   themeCardBG = 'hsl(227, 47%, 96%)';
        //   themeText = 'hsl(228, 12%, 44%)';
        }
    }
    return {
      themeBG,
      themeCardBG,
      themeText,
      handleChange
    }
  }

  export default UseTheme;