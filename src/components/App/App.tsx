import { useEffect, useState } from 'react'
import MovieGrid from '../MovieGrid/MovieGrid'
import SearchBar from '../SearchBar/SearchBar'
import Loader from '../Loader/Loader'
import { Toaster } from 'react-hot-toast'
import type { Movie } from '../../types/movie'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import MovieModal from '../MovieModal/MovieModal'
import fetchMovies from '../../services/movieService'
import ReactPaginate from 'react-paginate'
import css from './App.module.css'
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import toast from 'react-hot-toast'




function App() {
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [page, setPage] = useState(1);


    const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["movies", query, page],
    queryFn: () =>  fetchMovies(query, page),
    enabled: query.trim().length > 0,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if(isSuccess && data?.results.length === 0) {
      toast('No movies found for your request.')
    }
  }, [isSuccess, data]);

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 0;

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  }

 return (
  <>
    <Toaster />

    <SearchBar onSubmit={handleSearch} />

    {isLoading && <Loader />}

    {isError && <ErrorMessage />}

        {totalPages > 1 && (
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={({ selected }) => setPage(selected + 1)}
            forcePage={page - 1}
            containerClassName={css.pagination}
            activeClassName={css.active}
            nextLabel="→"
            previousLabel="←"
          />
        )}

           <MovieGrid
          movies={movies}
          onSelect={(movie) => setSelectedMovie(movie)}
        />

    {selectedMovie && (
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    )}
  </>
);
}

export default App
