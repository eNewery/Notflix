export default function SearchItem({data}){
    return <div class="search-item">
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.release_date}</p>
    </div>

}