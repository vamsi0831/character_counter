import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', wordsList: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div className="app-container">
        <div className="container-1">
          <h1 className="heading">Count the characters like a Boss</h1>
          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p className="list-element" key={each.id}>
                      {each.item}: {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                alt="no user inputs"
                className="image"
              />
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="header">Character Counter</h1>
          <div className="kr">
            <form onSubmit={this.onAdd}>
              <div className="input-container">
                <input
                  type="text"
                  className="inputName"
                  placeholder="Enter the characters here"
                  onChange={this.onChangeInput}
                  value={searchInput}
                />
                <button
                  className="add-button"
                  type="submit"
                  onClick={this.onAdd}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
