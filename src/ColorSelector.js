import React, { Component } from 'react';
export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
      const cb = () => { this.props.setSelectedColor(str) }
      return <div key={idx} onClick={cb} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

@@ -16,4 +17,4 @@ export default class ColorSelector extends Component {
    )
  }

}
}
