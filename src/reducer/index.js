import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';
import {childLoginReducer} from './childLoginReducer';
import {childReducer} from './childReducer';
import { choreReducer } from './choreReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  childLoginReducer,
  child: childReducer,
  chore: choreReducer
});
