import axios from "axios";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: 0,
  errors: "",
  isLoading: false
};

const GET_HOUSES = "GET_HOUSES";
const CREATE_HOUSES = "CREATE_HOUSES";
const CANCEL_ADD_HOUSES = "CANCEL_ADD_HOUSES";

function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_HOUSES}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_HOUSES}_FULFILLED`:
      return { ...state, ...action.payload };
    case `${GET_HOUSES}_REJECTED`:
      return { ...state, errors: action.payload };
    case `${CREATE_HOUSES}_PENDING`:
      return { ...state, isLoading: true };
    case `${CREATE_HOUSES}_FULFILLED`:
      return { ...state, ...action.payload };
    case `${CREATE_HOUSES}_REJECTED`:
      return { ...state, errors: action.payload };
    case `${CANCEL_ADD_HOUSES}_PENDING`:
      return { ...state, isLoading: true };
    case `${CANCEL_ADD_HOUSES}_FULFILLED`:
      return { ...state, ...action.payload };
    case `${CANCEL_ADD_HOUSES}_REJECTED`:
      return { ...state, errors: action.payload };
  }
}

export default function getHouses () {
    return {
        type: GET_HOUSES,
        payload: axios.get("/api/houses").then(response => {
            return response.data
        }).catch( err => console.log(err))
    }
}

export default function createHouses (house, history) {
    return {
        type: CREATE_HOUSES,
        payload: axios.post("/api/houses", {...houses}).then(response => {
            history.push("/dashboard")
        }).catch( err => console.log(err))
    }
}

export default function cancelHouses (history) {
    return {
        type: CANCEL_ADD_HOUSES,
        payload: history.push("/dashboard")
    }
}
export default reducer;