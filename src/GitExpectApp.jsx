import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function GitExpectApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory)

    if (categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ]);
    // setCategories( cat => [...cat, 'Valorant']) Esta es otra forma de agregar un nuevo objeto al array
  };

  return (
    <>
      <h1>GitExpectApp</h1>

      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={onAddCategory} // cuando esta la palabra on delante quiere decir que esta emitiendo algo, para este caso usaremos este en lugar de setCategories
      />

      {
        categories.map((category) => (
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }

    </>
  );
}

export default GitExpectApp;
