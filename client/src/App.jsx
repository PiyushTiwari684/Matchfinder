import React, { useState } from 'react'
import ProfileForm from './components/ProfileForm'
import MatchList from './components/MatchLists';


const App = () => {

  const [matches,setMatches] = useState([]);
  return (
    <div>
      <ProfileForm onMatchesFound={setMatches}/>
      <MatchList users={matches}/>

      
    </div>
  )
}

export default App

