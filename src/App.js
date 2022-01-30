import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type){

        case 'inc':return {...state,count1: state.count1+1}
        case 'inc':return {...state,count2: state.count2+2}
        case 'inc':return {...state,count3: state.count3+3}

        case 'dec':return {...state,count1: state.count1-1}
        case 'dec':return {...state,count2: state.count2-2}
        case 'dec':return {...state,count3: state.count3-3}

        case 'reset':return {...state,count1: 0}
        case 'reset':return {...state,count2: 0}
        case 'reset':return {...state,count3: 0}
    }

  return state
}

function App  () {
    const [state, dispatch] = useReducer(reducer, {count1:0},{count2:0}, {count3:0})
    return (
        <div>
          <div>{state.count1}
            <button onClick={()=>dispatch({type:'inc'})}>INC</button>
            <button onClick={()=>dispatch({type:'dec'})}>DEC</button>
            <button onClick={()=>dispatch({type:'reset'})}>RESET</button>
          </div>

            <div>{state.count2}
                <button onClick={()=>dispatch({type:'inc'})}>INC</button>
                <button onClick={()=>dispatch({type:'dec'})}>DEC</button>
                <button onClick={()=>dispatch({type:'reset'})}>RESET</button>
            </div>

            <div>{state.count3}
                <button onClick={()=>dispatch({type:'inc'})}>INC</button>
                <button onClick={()=>dispatch({type:'dec'})}>DEC</button>
                <button onClick={()=>dispatch({type:'reset'})}>RESET</button>
            </div>
        </div>
    );
};

export default App;