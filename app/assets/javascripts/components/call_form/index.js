import thunkMiddleware from 'redux-thunk';
import react from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CallFormContainer from './containers/CallFormContainer';
import reducer from './reducers';
import { debounce } from '../lib/debounce';

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

const TestForm = () => (
  <Provider store={store}>
    <CallFormContainer />
  </Provider>
)

export default TestForm;
