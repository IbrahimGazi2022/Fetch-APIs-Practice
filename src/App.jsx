import { useState, useEffect } from "react";

const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={photo.title} width={100}/>
        ))}
      </div>
    </>
  );
};

export default App;
