import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([])
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value)

    //APIURL
    const endpointURL =
    `https://pixabay.com/api/?key=44234539-d4d8c24af7892485d5363c8c5&q=${ref.current.value}&image_type=photo`;

    //APIを叩く（データフェッチング）
    fetch(endpointURL).then((res) => {
      return res.json();
    })
    .then((data) => {
      setFetchData(data);
    });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
