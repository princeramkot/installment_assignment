import { useState } from 'react';
import './App.css';
import TableComponent from './api/parentData';
import AnimatedButton from './component/animatedButton';
import ChildInstallmentData from './api/childInstallmentData';


function App() {
  const [isComponentAVisible, setIsComponentAVisible] = useState(true);

  const handleToggle = () => {
    setIsComponentAVisible(!isComponentAVisible);
  };

  
  return (
    <div className="App">
      <button className={`toggle-button ${isComponentAVisible ? 'active' : ''}`} onClick={handleToggle}>Toggle to switch between Parent and child Installment Data</button>

      {isComponentAVisible ? <TableComponent /> : <ChildInstallmentData />}
    
    </div>
  );
}

export default App;
