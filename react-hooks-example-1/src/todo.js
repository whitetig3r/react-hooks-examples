import React, { useState } from 'react';

export default ( {submitHandler} ) => {
    
    const [myName,setName] = useState("")

    const someStyling = {
        'marginLeft': '50%',
        'transform': 'translateX(-10%)'
    }

    return (
        <div style={ someStyling }>

            <header style={ { 'margin': '10em 0 2em 0' } } >-- My TODOs --</header>

            <input type = "text" value={ myName } onChange={ (e) => setName(e.target.value) } 
                    onKeyUp = { e => {
                        if (e.keyCode === 13){
                            submitHandler(e.target.value)
                            setName("")
                        }
                    } 
                }
             />

        </div>
    );
};
