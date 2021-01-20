import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [value, setValue] = useState(0);
    const [hide, setHide] = useState(true);

    if (hide) {
        return (
            <div>
                <button onClick={() => setHide(false)} >Hide</button>
                <button onClick={() => setValue( (v) => v + 1 )}>+</button>
                <Notification />
            </div>
        )
    } else {return <button onClick={() => setHide(true)} >Show</button>}
}

const HookCounter =({value}) => {

    useEffect( () => {
        console.log('mount')
        return () => console.log('unmount')
    }, [] )

    return (
        <p>{value}</p>
    );
}

const Notification = () => {

    const [visible, setVisible] = useState(true);

    useEffect( ()=> {
        const timeout = setTimeout( () => setVisible(false), 2500);
        return () => clearTimeout(timeout);
    }, [] )

    return (
        <div>
            {visible && <p>Hello</p>}
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root')
);

