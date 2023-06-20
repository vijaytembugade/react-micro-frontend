
import Counter from './Components/Counter';


const App = () => {
  return <div className='flex-container-verticle'>
    <h2>
      MicroApp 1 : Counter   
    </h2>
    <Counter/>
    <p>
      Environment: {process.env.environment}
    </p>
    
  </div>;
};

export default App;
