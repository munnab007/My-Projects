// const initialState = {
//     searchTerm: '',
//     projects: Projects
// }
const Listreducer = (state = [], action) => {
    switch (action.type) {
        case "GET_DATA_FULFILLED":
            return [
                ...state,
                ...action.payload.data
            ];
            
        // case "SEARCH_INPUT_CHANGED":
        //     const { searchTerm } = action.payload;
        //     return {
        //         ...state,
        //         searchTerm: searchTerm,
        //         projects: searchTerm
        //             ? Projects.filter(
        //                 projects =>
        //                     projects.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >
        //                     -1,
        //             )
        //             : Projects,
        //     };
        default:
            return state;
    }
}
export default Listreducer