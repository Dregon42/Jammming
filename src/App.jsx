import { useEffect, useState } from 'react'




function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    
    
    const clientId = "0d3e14b308c74ba49e86af52e139567c";
    const clientSecret = "6eaaa182b4484e20b6fed2551164725b";
    
    
    const _getToken = async () => {
      const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
      });
      
      // Access the data given to us by the fetch response (Promise)
      const data = await result.json();
      return data.access_token
    }
    
  },[])

  return (
    <>
      <h1 className='text-4xl '>Hello World</h1>
    </>
  )
}

export default App
