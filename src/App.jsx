import { useEffect, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    
    async function getProfile(accessToken) {
      let accessToken = localStorage.getItem('access_token');
    
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });
    
      const data = await response.json();
    }
    
  })

  return (
    <>
      <h1 className='text-4xl '>Hello World</h1>
    </>
  )
}

export default App
