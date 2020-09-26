import React, { Component } from 'react';

import React, { Component } from 'react';

export default class Cell extends Component {
@@ -9,11 +10,20 @@ export default class Cell extends Component {
    }
  }

  handleClick = () => {
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })
  }
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      <div className="cell"
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
      </div>
    )
  }

}
} 