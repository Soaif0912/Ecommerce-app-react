const FilterReducer = (state, action)=>{
    switch(action.type){
            
        case "LOAD_FILTER_PRODUCTS":
            function getMaxPrice(products) {
                return products.reduce((max, product) => {
                    return product.price > max ? product.price : max;
                }, 0);
            }
            let MaxPrice = getMaxPrice(action.payload);
            return{
                ...state,
                filter_products: action.payload,
                all_product: action.payload,
                filters:{
                    ...state.filters,
                    price: MaxPrice,
                    maxPrice: MaxPrice,
                }
            };
        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view:true,
            };
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view:false,
            }
        case "GET_SORT_VALUE":
            return{
                ...state,
                sorting_value: action.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            let {filter_products, sorting_value} = state;
            let temSortData = [...filter_products];

            const sortingProducts = (a,b)=>{
                if(sorting_value === "lowest"){
                    return a.price - b.price;
                }
                if(sorting_value === "highest"){
                    return b.price - a.price;
                }
                if(sorting_value === "a-z"){
                    return a.name.localeCompare(b.name);
                }
                if(sorting_value === "z-a"){
                    return b.name.localeCompare(a.name);
                }
            }
            newSortData = temSortData.sort(sortingProducts);
            return{
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTERS_VALUE":
            const  {name, value} = action.payload;
            return{
                ...state,
                filters: {...state.filters,
                [name]: value,}
            };
        
        case "FILTER_PRODUCTS":
            let {all_product} = state;
            let temFilterPorduct = [...all_product];

            const {text, category, company, color, price} = state.filters;
            if(text){
                temFilterPorduct = temFilterPorduct.filter((curElm)=>{
                    return curElm.name.toLowerCase().includes(text);
                })
            }
            if(category != "all"){
                temFilterPorduct = temFilterPorduct.filter((curElem)=>{
                    return curElem.category === category;
                })
            }
            if(company != "all"){
                temFilterPorduct = temFilterPorduct.filter((curElem)=>{
                    return curElem.company.toLowerCase() === company.toLowerCase();
                })
            }
            if(color !== 'all'){
                temFilterPorduct = temFilterPorduct.filter((curElem)=>{
                    return curElem.colors.includes(color);
                })
            }
            if(price === 0){
                temFilterPorduct = temFilterPorduct.filter((curElem)=>{
                    return curElem.price === price;
                })
            }else{
                temFilterPorduct = temFilterPorduct.filter((curElem)=>{
                    return curElem.price <= price;
                })
            }
                return{
                    ...state,
                    filter_products: temFilterPorduct,
                };
            case "CLEAR_FILTERS":
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        text: "",
                        category: "all",
                        company: "all",
                        color: "all",
                        price: state.filters.maxPrice,
                        minPrice: 0,
                        maxPrice: state.filters.maxPrice,
                    }
                }
        default:
            return state;
    }
}

export default FilterReducer;