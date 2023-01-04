const Prueba = () => {
    const movieList = {
        "movies": "Hola",
        "id": "0",
        "title": "string",
    }
  return (
    <>
   
   <Row className="justify-content-center">
      {movieList.map((movie) => {
        return (
          <Col key={movie.id} className="mx-auto" xl={2} md={4} lg={3} sm={5} mt={3} mb={3}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <button
                onClick={addOrRemove}
                dataMovieId={movie.id}
                className="favorite-btn"
              >
                ♡
              </button>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.overview.substring(0, 100)}...
                </p>
                <Link
                  to={`/detalle?movieId=${movie.id}`}
                  className="btn btn-primary"
                >
                  More Info
                </Link>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
    </>
  )
}
export default Prueba