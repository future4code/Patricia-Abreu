import React, {useState} from 'react';
import Pretenders from './components/Pretenders';
import Matches from './components/Matches'

function App() {

  const [switchScreen, setSwitchScreen]=useState(false)
  
  const onClickChangeState = () => {
    setSwitchScreen(!switchScreen)
  }
  
  const switchComponent = () => {
    if (switchScreen) {
      return <Pretenders 
      onClickPretenders={onClickChangeState}
        />
    } else {
      return <Matches 
      onClickMatches={onClickChangeState}
      />
    }
  }

  return (
    <div>
    testes
      {switchComponent()}
    </div>
  )
}

export default App;
