const Gif = ({ id, title, url }) => {
  return <div key={id}>
    <h3>{title}</h3>
    <img src={url} alt="No gif" />
  </div>
}

export default Gif;