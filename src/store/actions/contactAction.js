import axios from "axios"
const baseUrl = "https://simple-contact-crud.herokuapp.com/contact"

export function fetchAction() {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FETCH_LOADING",
      })

      const response = await axios.get(baseUrl)
      const datas = response.data.data

      dispatch({
        type: "FETCH_DATA",
        payload: datas,
      })
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      })
    }
  }
}

export function detailAction(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DETAIL_LOADING",
      })

      const response = await axios.get(`${baseUrl}/${id}`)
      const data = response.data.data

      dispatch({
        type: "FETCH_DETAIL",
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      })
    }
  }
}

export function deleteAction(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`${baseUrl}/${id}`)

      dispatch(fetchAction())
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      })
    }
  }
}

export function removeDetail() {
  return async (dispatch) => {
    try {
      dispatch({
        type: "REMOVE_DETAIL",
      })
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      })
    }
  }
}

export function addAction(payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FETCH_LOADING",
      })

      await axios.post(baseUrl, payload)

      dispatch(fetchAction())
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      })
    }
  }
}

export function editContact(id, payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FETCH_LOADING",
      })

      await axios.put(`${baseUrl}/${id}`, payload)

      dispatch(fetchAction())
      dispatch(detailAction(id))
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      })
    }
  }
}

export function revealAddForm(payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "REVEAL_ADD_FORM",
        payload: payload,
      })
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      })
    }
  }
}
