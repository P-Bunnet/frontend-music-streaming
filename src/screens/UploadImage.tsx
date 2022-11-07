import React from 'react';
import axios from 'axios';
const UploadImage = () => {
  const [image, setImage] = React.useState<File>();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setImage(e.currentTarget.files[0]);
    }
  };
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = 'http://localhost:5000/song';
    const formData = new FormData();
    formData.append('song', image!);
    formData.append('songName', image!.name);
    const config = {
      headers: {
        // 'content-type': 'multipart/form-data',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY3ZTZhYmFkNjljNWYwZDJjMzg1M2YiLCJpYXQiOjE2Njc3NTM2NDMsImV4cCI6MTY2Nzg0MDA0M30.9IwTPP9T64BlbbNowPRPEmGta6kqRGSuIz3THsGLpKc`
      }
    };

    console.log();
    axios
      .post(
        url,
        {
          formData,
          title: 'test'
        },
        config
      )
      .then((response) => {
        console.log(response.data);
      });
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImage;
