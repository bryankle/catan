export const addPlayer = (player, color) => {
	return {
		type: "CREATE_PLAYERS",
		player: player,
		color: color
	}
}

// Implement add card function
// Implement render individual table based on Redux player data