import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export function GifGrid({ category }) {

  const { images, isLoading } = useFetchGifs( category ); // esto es un hook personalizado

  // console.log({images, isLoading});

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }

      <div className="card-grid">
        {images.map((img) => (
          <GifItem
            key={img.id}
            // title={img.title} esta seria la forma normal en que tomariasmos las propiedades
            // url={img.url}
            {...img} // esta es otra forma de trear las prop, se usa el operador spread para esparcir todas las propiedades del image
          />
        ))}
      </div>
    </>
  );
}
