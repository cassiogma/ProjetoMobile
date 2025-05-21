import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function ProviderCart({children}){
    const [carrinho, setCarrrinho] = useState([]);

    function adicionarProduct(produto){
        setCarrrinho((anterior) => [...anterior, produto])
    }

return (
    <CarrinhoContext.Provider value={{carrinho, adicionarProduct}}>
        {children}
    </CarrinhoContext.Provider>
)

}

export function useCarrinho(){
    return useContext(CarrinhoContext);
}