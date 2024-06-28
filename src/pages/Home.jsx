import { useEffect, useState } from "react";

export const Home = ({ addToCart }) => {
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
      const dataWithPrices = data.map((item) => ({
        ...item,
        // random price between 5 and 20
        price: (Math.random() * 20 + 5).toFixed(2),
      }));
      console.log(response);
      setCatImages(dataWithPrices);
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
              <div
                id="catImageDiv"
                key={index}
                onClick={() => addToCart(image)}
              >
                <img
                  className="catImageImg"
                  src={image.url}
                  alt={image.id}
                ></img>
                <p>Price: ${image.price}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
