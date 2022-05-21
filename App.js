import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import { connect } from 'react-redux';

import { changeCount } from './src/actions/count';

class App extends Component {
  // state = {count : 0};

  decrementCount() {
    let {count} = this.props;
    count--;
    this.props.counterChange(count);
  }
  incrementCount(){
    let {count} = this.props;
    count++;
    this.props.counterChange(count);
  }
  render() {
    const {count} = this.props;
    return(
      <View style={styles.container}>
        <Button
        title="increment"
        onPress={() => this.incrementCount()}>
        </Button>
        <Text>{count}</Text>
        <Button
        title="decrement"
        onPress={() => this.decrementCount()}>
        </Button>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) =>{
   return {
     counterChange: (count) => dispatch(changeCount(count))
   }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);