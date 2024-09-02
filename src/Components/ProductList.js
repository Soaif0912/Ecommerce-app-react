import React from "react";
import { useProductContext } from "../context/Productcontext";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
    const {isLoading} = useProductContext();
    const {filter_products, grid_view} = useFilterContext();

    if(isLoading){
        return <div>...loading</div>
    }
    if(grid_view === true){
       return <GridView products={filter_products}></GridView>
    }

    if(grid_view === false){
        return <ListView products={filter_products}></ListView>
    }
};

export default ProductList;