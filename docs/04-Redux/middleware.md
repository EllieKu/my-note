# Middleware

- 當action is dispatch時，執行額外的邏輯 (如log)
- 暫停、修改、延遲、更換、或停止 dispatch actions
- 編寫額外的代碼可以 dispatch 和 getState
- 攔截且接收如function, promise等, 處理並dispatch

```js
// Dispatching Request Status Actions in Thunks
const getRepoDetailsStarted = () => ({
  type: 'repoDetails/fetchStarted'
})
const getRepoDetailsSuccess = repoDetails => ({
  type: 'repoDetails/fetchSucceeded',
  payload: repoDetails
})
const getRepoDetailsFailed = error => ({
  type: 'repoDetails/fetchFailed',
  error
})
const fetchIssuesCount = (org, repo) => async dispatch => {
  dispatch(getRepoDetailsStarted())
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
  }
}
```

action creator 可以回傳一個function 取代 action 物件, 這樣 function creator 就變成了 thunk

當一個 action creator 回傳一個 function 的時候，這個 function 將會被 Redux Thunk middleware 執行。這個 function 不需要是 pure 的；因此它被允許一些有 side effect 的動作，包括執行非同步的 API 呼叫。這個 function 也可以 dispatch action—像是那些我們之前定義的同步 action。
