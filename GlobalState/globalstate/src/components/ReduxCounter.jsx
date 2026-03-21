import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h3>Redux</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
    </div>
  );
};

const ReduxApp = () => (
  <Provider store={store}>
    <ReduxCounter />
  </Provider>
);

export default ReduxApp;
