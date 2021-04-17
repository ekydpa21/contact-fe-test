const initialState = {
  loading: false,
  detailLoading: false,
  contacts: [],
  detail: null,
  error: false,
  revealAddForm: false,
}

function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_LOADING":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_ERROR":
      return {
        ...state,
        error: true,
      }
    case "FETCH_DATA":
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      }
    case "DETAIL_LOADING":
      return {
        ...state,
        detailLoading: true,
      }
    case "FETCH_DETAIL":
      return {
        ...state,
        detail: action.payload,
        detailLoading: false,
      }
    case "REMOVE_DETAIL":
      return {
        ...state,
        detail: null,
      }
    case "REVEAL_ADD_FORM":
      return {
        ...state,
        revealAddForm: action.payload,
      }
    default:
      return state
  }
}

export default fetchReducer
