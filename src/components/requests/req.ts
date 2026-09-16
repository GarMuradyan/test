import axios from "axios";

async function reqTs(url:string,method:string): Promise<any> {

  const api = axios.create({
  baseURL: url,
  method:method,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDgwY2E3ZmI2MmMzYzA2ZjMwZGZmNjE0YTkxZDE3OSIsIm5iZiI6MTY2NTMxMDg3NS42MTksInN1YiI6IjYzNDJhMDliMjViOTU1MDA3YThiMGFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y9cZPjqNufE6Vnrf6cmWcVQZbNG0vxPsLh5M_6NL9FI`,
    accept: "application/json",
  },
});
    
  try {
    const response = await api(url);

    return response.data

  } catch (error) {
    console.log(error)
    throw new Error("");
    
  }

}

export default reqTs

