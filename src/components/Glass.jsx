import { useState } from 'react';


const Glass = ({dices}) => {
    const [counter, setCounter] = useState(3)
const[resultDices, setResultDices] =useState([0,0,0,0,0])
const [saveDices, setSaveDices]= useState([])
const [allDices, setAllDices]= useState([resultDices, saveDices])



let randomValueDice=0

    function getRandomValueDice() {
        randomValueDice = Math.floor((Math.random() * 6) + 1);
    }

    function rollDice(){

        setCounter(counter-1)
    }

    return (
        <div className='glass' onClick={rollDice}>
            {counter}
        </div>
    );
};

export default Glass;