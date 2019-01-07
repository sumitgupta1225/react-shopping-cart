import * as actionType from '../actions/type'

const api = (state = { apiCallCount: 0, isLoading: false }, action) => {
  const { type } = action
  const isApiStarted = type === actionType.API_REQUEST
  const isDeleteApiStarted = type === actionType.DELETE_API_REQUEST
  const isApiEnded = /(.*)_(SUCCESS|FAILURE)/.test(type)
  
  let apiCallCount

  if (isApiStarted || isDeleteApiStarted) {
    apiCallCount = state.apiCallCount + 1
    
    return Object.assign({}, state, {
      apiCallCount,
      isLoading: apiCallCount > 0,
      isDeleteProcessing: isDeleteApiStarted
    })
  }

  if (isApiEnded) {
    apiCallCount = state.apiCallCount - 1

    return Object.assign({}, state, {
      apiCallCount,
      isLoading: apiCallCount !== 0,
      isDeleteProcessing: false
    })
  }

  return state
}

export default api