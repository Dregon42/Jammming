import { useEffect, useState } from 'react';





function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    
    const clientId = "3fd97750168847f98b91b26393752c5d";
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
      console.log(data);
      return data.access_token
    }

    _getToken();
    
  },[])

  return (
    <>
      <h1 className='text-4xl '>Hello World</h1>
    </>
  )
}

export default App
