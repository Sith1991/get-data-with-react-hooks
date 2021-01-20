import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [value, setValue] = useState(1);
    const [hide, setHide] = useState(true);

    if (hide) {
        return (
            <div>
                <button onClick={() => setHide(false)} >Hide</button>
                <button onClick={() => setValue( (v) => v + 1 )}>+</button>
                <PlanetInfo id={value}/>
            </div>
        )
    } else {return <button onClick={() => setHide(true)} >Show</button>}
}

const usePlanetName = (id) => {

    const [planetName, setPlanetName] = useState(null);

    useEffect( () => {
        let cancelled = false;
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then( res => res.json())
            .then( data => !cancelled && setPlanetName(data.name));
        return () => cancelled = true;
    }, [id] )

    return planetName;
}

const PlanetInfo = ({id}) => {

const planetName = usePlanetName(id);

    return (
        <div>
            {id} - {planetName}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')
);

