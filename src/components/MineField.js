import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const fields = row.map((field, f) => {
            return <Field {...field}
                key={f}
                onOpen={() => props.onOpenField(r, f)}
                onSelect={() => props.onSelectField(r, f)} />
        })
        return <View style={{ flexDirection: 'row' }} key={r}>{fields}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})
