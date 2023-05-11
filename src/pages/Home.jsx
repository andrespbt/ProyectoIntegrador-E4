export const Home = () => {
  return (
    <div className="h-full flex flex-col">
      
      {/* Search section */}

      <section className="flex gap-8 flex-col items-center py-10 bg-darkGray">
        <h2 className="text-2xl font-bold text-white">Buscador</h2>
        <div className="w-full ">
          <input
            className="border-2 border-gray-300 px-2 py-1 focus:outline-none m-auto block rounded-md placeholder:text-xs w-[80%] max-w-[700px]"
            type="text"
            placeholder="Buscar instrumento, accesorios, marcas..."
          />
        </div>
      </section>
      
      {/* Brands section */}
      <section className="py-10 text-center bg-mainBlack">
        <h2 className="text-2xl font-bold text-white">Marcas</h2>
        
      </section>

      {/* Category section */}

      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold">Categorias</h2>
      </section>

      {/* Recommendations section */}
      <section  className="py-20 text-center bg-darkGray">
        <h2 className="text-2xl font-bold text-white">Recomendaciones</h2>
      </section>
      
      
      {/* Benefits section */}
      <section className="py-10 text-center bg-mainYellow">
        <h2 className="text-2xl font-bold text-white">Beneficios</h2>
      </section>
    </div>
  );
};
