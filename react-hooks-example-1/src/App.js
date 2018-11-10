import React, { useState } from 'react';
import ToDo from './todo';

export default () => {
    const [toDos,addToList] = useState([])

    const someStyling = {
      'marginLeft': '50%',
      'transform': 'translateX(-10%)',
    }

    return(
      <div>

        <ToDo submitHandler = { todo => {
            addToList([todo, ...toDos]) 
          }} 
        />

        <div style={someStyling}>

          {
            toDos.map(( myTodo, i ) => (
                <section key={i+1} style={{ 'margin': '10px'}} >
                  {(i+1) +'. '+myTodo}
                </section>
              )
            )
          } 

        </div>
      </div>
    );
}