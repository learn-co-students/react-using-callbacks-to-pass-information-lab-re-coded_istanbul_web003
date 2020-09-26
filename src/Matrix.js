import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  getSelectedColor = () => (this.state.selectedColor)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
@@ -21,7 +32,7 @@ export default class Matrix extends Component {
  render() {
    return (
      <div id="app">
        <ColorSelector />
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
@@ -33,4 +44,4 @@ export default class Matrix extends Component {

Matrix.defaultProps = {
  values: chromeBoi
}
}