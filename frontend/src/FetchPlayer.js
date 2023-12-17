const FetchPlayer =async({PageNumber})=>{
    try {
        const response = await fetch(`http://localhost:8080/api/users?page=${PageNumber}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

export default FetchPlayer;