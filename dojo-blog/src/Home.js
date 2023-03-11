import { useState } from 'react';

const Home = () => {
    // let name = 'mario'
    const [name, setName]= useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(40);
    };

    // const handleClickAgain = (name) => {
    //     console.log('hellooo '  + name);
    // }

    return (  
        <div className="home">
             <h1>HOME PAGE</h1>
             <p> { name } is { age } years old.</p>
             <button onClick={handleClick}>Click me</button>
             {/* <button onClick= {() => handleClickAgain('John')}>Click to see some Shit</button> */}

        </div>
       
       
    );
}
 
export default Home;