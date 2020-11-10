import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';
import {getChoresReducer} from './getChoresReducer';
import {childLoginReducer} from './childLoginReducer';
import {addChildReducer} from './addChildReducer';
import {deleteChildReducer} from './deleteChildReducer';
import {getChildrenReducer} from './getChildrenReducer';
import {updateChildReducer} from './updateChildReducer';
import {deleteChoresReducer} from './deleteChoresReducer';
import {childReducer} from './childReducer';
import { choreReducer } from './choreReducer';

export default combineReducers({
  user: loginReducer,
  registerReducer,
  childLoginReducer,
  child: addChildReducer,
  children: deleteChildReducer,
  child: getChildrenReducer,
  newChild: updateChildReducer,
  chore: getChoresReducer,
  deleteChoresReducer,
  details: childReducer,
  oneChore: choreReducer
});
