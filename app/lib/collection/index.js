'use strict'

import React, {
  Component,
  ScrollView,
  StyleSheet,
  Dimensions,
  PropTypes,
  View
} from 'react-native'

export default class Collection extends Component {

  constructor (props) {
    super(props)
    this.screenWidth = Dimensions.get('window').width
    this.screenHeight = Dimensions.get('window').height - 40
  }
  
  onMomentumScrollEnd (e) {
    const {screenWidth} = this
    this.props.scrollEnd && this.props.scrollEnd(e.nativeEvent.contentOffset.x, e.nativeEvent.contentOffset.y)
  }

  render() {
    const {screenWidth} = this

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        style={styles.container}
        onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}>
      {this.props.children.map((child, index) => {
        return (<View 
          key={'collection' + index}
          style={{width: screenWidth}}>
          {child}
          </View>
        )
      })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})

Collection.propTypes = {
  scrollEnd: PropTypes.func
}
