import { useEffect, useState } from "react";

export const Home = () => {
  const [catImages, setCatImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      if (!response.ok) {
        throw new Error("there has been an error");
      }
      const data = await response.json();
      console.log(response);
      setCatImages(data);
    } catch {
      console.log(error);
      setErrorMsg(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {errorMsg !== "" ? (
        <p>{errorMsg}</p>
      ) : (
        <>
          {catImages.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.url} alt={image.id}></img>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
