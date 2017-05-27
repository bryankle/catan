export default function(state = {}, action) {
	switch(action.type) {
		case "CREATE_PLAYERS":
			return Object.assign(
					{}, 
					state, 
					{	// action payload == player name
						[action.player]: {
							'player': action.player,
							'color': action.color,
							'cards': {
								wheat: [],
								sheep: [],
								brick: [],
								wood: [],
								ore: []
							}
						}
					}
			)
			// Successfully implemented redux method to add specific type and number of cards to designated player
		case "EDIT_PLAYER_CARDS":
		console.log(action)
			return {
				...state,
				[action.player]: {
					...state[action.player],
					cards: {
						...state[action.player].cards,
						[action.cardType]: action.numbers
					}
				}
			}

		default: 
			return state;
	}
}

// export default function(state = [], action) {
// 	switch(action.type) {
// 		case "ADD":
// 			return state.concat(action.payload)
// 		default: 
// 			return state;
// 	}
// }