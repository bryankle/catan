export const editCards = (player, cardType, numbers) => {
	// Numbers will come in form of arrays; will be adjusted before entering function
	// For players,pass in this.props.players[player] to access specific player by key
	// Edit cardType by this.props.players[player]['cards'][cardType] = numbers
	// Overwrite previous player object with latest player object containing card updates
	return {
		type: "EDIT_PLAYER_CARDS",
		player: player,
		cardType: cardType,
		numbers: numbers
	}
}