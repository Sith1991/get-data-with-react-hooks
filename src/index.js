import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
    return (
    <MyContext.Provider value = 'Hello World 123'>
        <Child />
    </MyContext.Provider>
    )
}

const Child =() => {
    const val = useContext(MyContext);
    return (
        <p>{val}</p>
    );
}

ReactDOM.render(<App />, document.getElementById('root')
);

