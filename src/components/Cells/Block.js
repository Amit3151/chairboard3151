import { useState } from "react";

export default function Block() {
    const [buttonText, setButtonText] = useState('Unblock');
    const [className, setClassName] = useState('styling_unblock');
    
    const handleClick = () => {
      buttonText=== "Unblock" ?setButtonText('Block'):setButtonText('Unblock');
      className=== "styling_unblock" ?setClassName('styling_block') : setClassName('styling_unblock');
    };
    
    const [buttonText1, setButtonText1] = useState('Block');
    const [className1, setClassName1] = useState('styling_block');
  
    const handleClick1 = () => {
      buttonText1=== "Unblock" ?setButtonText1('Block'):setButtonText1('Unblock');
      className1=== "styling_unblock" ?setClassName1('styling_block') : setClassName1 ('styling_unblock');
    };

    return (
        
        <td>
        <button className={className} onClick={handleClick}>{buttonText}</button>
      </td>
    )
  }