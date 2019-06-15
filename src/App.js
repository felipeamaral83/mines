import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './params'
import MineField from './components/mineField'
import { createMinedBoard } from './functions'

export default class App extends Component {
  
	constructor(props) {
		super(props)
		this.state = this.createState()
	}

	minesAmount = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()
		return Math.ceil(cols * rows * params.difficultLevel)
	}

	createState = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()
		return {
			board: createMinedBoard(rows, cols, this.minesAmount())
		}
  	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Iniciando o Campo Minado!</Text>
				<Text style={styles.instructions}>
					Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
				</Text>
				<View style={styles.container}>
					<MineField board={this.state.board} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	board: {
		alignItems: 'center',
		backgroundColor: '#AAA'
	}
});
