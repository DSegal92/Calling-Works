import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import react from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CallFormContainer from './containers/CallFormContainer';
import reducer from './reducers';
import { debounce } from '../lib/debounce';

let store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

const TestForm = () => (
  <Provider store={store}>
    <div>
      <CallFormContainer />
    </div>
  </Provider>
)

export default TestForm;
