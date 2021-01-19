import React, {useState}  from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [color, setColor] = useState('gray');
    const [fntSize, setFontSize] = useState(14)

    return (
        <div style={{
            padding: '10px',
            background: color,
            fontSize: `${fntSize}px`
        }}>
            <h1>Hello World</h1>
            <button onClick={() => setColor('white')}>
                Light
            </button>
            <button onClick={() => setColor('gray')}>
                Dark
            </button>
            <button onClick={() => setFontSize((s) => s+2)} >
                +
            </button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')
);

