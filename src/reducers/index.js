import { combineReducers } from 'redux';
import PlayerReducer from './reducer-players'

const rootReducer = combineReducers({
	players: PlayerReducer
});

export default rootReducer;
