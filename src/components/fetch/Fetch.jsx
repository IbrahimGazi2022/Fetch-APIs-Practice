import { useState, useEffect } from "react";

const Fetch = () => {
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
          <img key={photo.id} src={photo.url} alt={photo.title} />
        ))}
      </div>
    </>
  );
};

export default Fetch;
