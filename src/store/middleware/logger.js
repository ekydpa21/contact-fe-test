const logger = (store) => (next) => (action) => {
  console.log("dispatching", action)

  next(action)

  console.log("hasil dispatch", store.getState())
}

export default logger
