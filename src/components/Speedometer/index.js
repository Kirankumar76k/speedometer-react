// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : prevState.count,
    )
  }

  onDecrease = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : prevState.count,
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="speed-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="img-cls"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="head-meter">Speed is {count}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button
              className="accelerate-btn"
              onClick={this.onIncrease}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="brake-btn"
              onClick={this.onDecrease}
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
