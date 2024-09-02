
import { createContext,useContext,useReducer,useEffect } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialstate = {
    filter_products:[],
    all_product:[],
    grid_view: true,
    sorting_value: "",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
    },
}

export const FilterContextProvider=({children})=>{

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialstate);

    // To set Grid View
    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    }

    // To set List View
    const setListView=()=>{
        return dispatch({type: "SET_LIST_VIEW"});
    }

    const sorting=(event)=>{
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userValue });
    }

    // Update filters values
    const updateFilterValue =(event)=>{
        let value = event.target.value;
        let name = event.target.name;
        dispatch({ type: "UPDATE_FILTERS_VALUE", payload: {name,value}});
    }

    // Clear filers
    const clearFilters=()=>{
        dispatch({type: "CLEAR_FILTERS"});
    }

    // For sorting product
    useEffect(()=>{
        dispatch({type: "SORTING_PRODUCTS"});
    },[products, state.sorting_value]);

    // For filter product
    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"})
        // console.log(state.filters);
    },[products, state.filters]);

    // For grid and list view
    useEffect(()=>{
        dispatch({ type : "LOAD_FILTER_PRODUCTS", payload: products});
    },[products]);

    return(
        <FilterContext.Provider
         value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
};