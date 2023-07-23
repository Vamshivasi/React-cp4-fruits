// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, bananas: 0}

  onIncrement = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  onIncrementMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  render() {
    const {mangos, bananas} = this.state
    return (
      <div className="main-bg">
        <div className="white-bg">
          <h1>
            Bob ate <span>{mangos}</span> mangoes <span>{bananas}</span> bananas
          </h1>
          <div className="image-con">
            <div>
              <img
                className="mango-image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div>
                <button
                  className="Mango-btn"
                  type="button"
                  onClick={this.onIncrementMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                className="banana-image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div>
                <button
                  className="banana-btn"
                  onClick={this.onIncrement}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
