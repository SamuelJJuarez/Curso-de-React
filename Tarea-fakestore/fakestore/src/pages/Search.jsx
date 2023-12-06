import { useState, useEffect } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { data: products, loading, error, getProducts } = useFakestoreApi();
    
    useEffect(() => {
        getProducts();
    }, []);

    const findProducts = products
        ? products.filter((product) =>
            product.title.toLowerCase().includes(inputValue.toLowerCase())
    ): null;
 
    const searchProduct = () => {
        
    }

    return (
        <>
            <div className="p-4 flex gap-4 text-black">
                <input className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    type="text"
                    value={inputValue}
                    id="inputValue"
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={searchProduct}>Buscar producto</button>
            </div>
            <div className="mt-10">
                {loading ? <span>Cargando...</span> : null}
                {error ? <span>Hubo un error</span> : null}
                {products ? (
                    <ul className="grid grid-cols-5 gap-4 ">
                        {findProducts.map((product) => (
                            <ProductItem product={product} key={product.id}/>
                        ))}
                    </ul>
                ) : null}
            </div>
        </>
    )
}

export default Search;