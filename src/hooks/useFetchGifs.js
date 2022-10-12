import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true )

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images, // esto es lo mismo que escribir images: images, en este caso se puede porque se llaman igual
    isLoading, // esto es lo mismo que escribir isLoading: isLoading, en este caso se puede porque se llaman igual
  };
};
