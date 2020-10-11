import {combineReducers} from 'redux';

import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';
import {childLoginReducer} from './childLoginReducer';
import {addChildReducer} from './addChildReducer';
import {deleteChildReducer} from './deleteChildReducer';
import {getChildrenReducer} from './getChildrenReducer';
import {updateChildReducer} from './updateChildReducer';
import {deleteChoresReducer} from './deleteChoresReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  childLoginReducer,
  addChildReducer,
  deleteChildReducer,
  getChildrenReducer,
  updateChildReducer,
  deleteChoresReducer
});
