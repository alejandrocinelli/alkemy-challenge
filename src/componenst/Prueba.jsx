const Prueba = () => {
    const movieList = {
        "movies": "Hola",
        "id": "0",
        "title": "string",
    }
  return (
    <>
   
    {
        movieList.map((movie) => { 
            return (
            <div key={movie.id}>
                <h1>{movie.title}</h1>
            </div>
        )})

    } 
    </>
  )
}
export default Prueba