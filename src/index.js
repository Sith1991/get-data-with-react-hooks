import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [value, setValue] = useState(0);
    const [hide, setHide] = useState(true)
    if (hide) {
        return (
            <div>
                <button onClick={() => setHide(false)} >Hide</button>
                <button onClick={() => setValue( (v) => v + 1 )}>+</button>
                <HookCounter value={value}/>
            </div>
        )
    } else {return <button onClick={() => setHide(true)} >Show</button>}
}

const HookCounter =({value}) => {

    useEffect( () => {
        console.log('update');
        return () => console.log('clearUp');
    }, [value] )

    return (
        <p>{value}</p>
    );
}

ReactDOM.render(<App />, document.getElementById('root')
);

