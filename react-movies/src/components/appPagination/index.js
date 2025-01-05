import { Pagination } from "@mui/material";

const AppPagination = ({page, setPage}) => {

  // const { data, error, isLoading, isError } = useQuery(
  //   ["discover", { page: page }],
  //   getMoviesPage
  // );

  const handleChange = (page) => {
    setPage(page);
    //console.log(page);
    
    window.scroll(0, 0);
    //console.log(page);

  };

  //<Link to={`/movies/discover/${page}`}>
    
  return <Pagination 
    count={10}  
    hideNextButton={true}
    hidePrevButton={true}
    page={Number(page)}
    size="large"
    onChange={(e) => handleChange(e.target.textContent)}
  />
  
  //</Link>
}

export default AppPagination;