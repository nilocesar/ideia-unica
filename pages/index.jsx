import { useState } from 'react';

function Home() {
    return (
        <div> 
            <h1>new branch teste2</h1>
            <Contador /> 
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);
    function adicionarContador(){
        setContador(contador + 1);
    }
    return(
        <div>
            <h2>{contador}</h2>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home