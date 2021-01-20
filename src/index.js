import React, {useState, useEffect, useCallback, useMemo} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [value, setValue] = useState(1);
    const [hide, setHide] = useState(true);

    if (hide) {
        return (
            <div>
                <button onClick={() => setHide(false)}>Hide</button>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <PlanetInfo id={value}/>
            </div>
        )
    } else {
        return <button onClick={() => setHide(true)}>Show</button>
    }
}

const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(data => data);
}

const useRequest = (request) => {

    const initialState = useMemo( ()=> ( {
        data: null,
        loading: true,
        error: null
    }), []);

    const [dataState, setDataState] = useState(initialState);

    useEffect(() => {
        let cancelled = false;
        setDataState(initialState);
        request()
            .then(data => !cancelled && setDataState({
                data,
                loading: false,
                error: null
            }))
            .catch( error =>  !cancelled && setDataState({
                data: null,
                loading: false,
                error,
                }
            ));
        return () => cancelled = true;
    }, [request, initialState])

    return dataState;
}

const usePlanetName = (id) => {
    const request = useCallback(() => getPlanet(id), [id]);
    return useRequest(request);
}

const PlanetInfo = ({id}) => {

    const {data, error, loading} = usePlanetName(id);

    if (error) {
        return <div>ERROR</div>
    }

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div>
            {id} - {data.name}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root')
);

