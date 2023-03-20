import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordManagerItem from '../PasswordManagerItem'

import './index.css'

const colorsList = [
  'colorA',
  'colorB',
  'colorC',
  'colorD',
  'colorE',
  'colorF',
  'colorG',
  'colorH',
]

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordList: [],
    isChecked: false,
    searchInput: '',
  }

  onEnterWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onEnterUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswordList = event => {
    event.preventDefault()
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
    } = this.state

    const randInt = Math.floor(Math.random() * colorsList.length)
    const randcolor = colorsList[randInt]

    const newObj = {
      id: uuidv4(),
      websiteInputValue: websiteInput,
      usernameInputValue: usernameInput,
      passwordInputValue: passwordInput,
      bgColor: randcolor,
    }

    this.setState({
      passwordList: [...passwordList, newObj],
    })
  }

  onDeletePassword = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({
      passwordList: filteredList,
    })
  }

  onChangeCheckedStatus = () => {
    const {isChecked} = this.state
    this.setState({
      isChecked: !isChecked,
    })
  }

  onSearchPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
      isChecked,
      searchInput,
    } = this.state

    const filteredList = passwordList.filter(eachPassword =>
      eachPassword.websiteInputValue
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    const lengthOfPasswordList = filteredList.length

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="top-section">
            <div className="top-left-section">
              <h1 className="add-password-heading">Add New Password</h1>
              <form>
                <div className="website-enter-container">
                  <div className="website-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      className="website-image"
                      alt="website"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="website-input"
                    onChange={this.onEnterWebsite}
                    value={websiteInput}
                  />
                </div>
                <div className="username-enter-container">
                  <div className="username-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      className="username-image"
                      alt="username"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="username-input"
                    onChange={this.onEnterUsername}
                    value={usernameInput}
                  />
                </div>
                <div className="password-enter-container">
                  <div className="password-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      className="password-image"
                      alt="password"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="password-input"
                    onChange={this.onEnterPassword}
                    value={passwordInput}
                  />
                </div>
                <button
                  className="add-button"
                  type="submit"
                  onClick={this.onAddPasswordList}
                >
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password-man-image"
              alt="password manager"
            />
          </div>
          <div className="bottom-section">
            <div className="count-search-container">
              <div className="heading-count-container">
                <h1 className="password-count-heading">your Passwords</h1>
                <p className="passwords-count">{filteredList.length}</p>
              </div>
              <div className="search-enter-container">
                <div className="search-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    className="search-image"
                    alt="search"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  onChange={this.onSearchPassword}
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <input
                type="checkbox"
                id="checkboxInput"
                className="checkbox-input"
                onClick={this.onChangeCheckedStatus}
              />
              <label htmlFor="checkboxInput" className="show-password">
                Show Passwords
              </label>
            </div>
            {lengthOfPasswordList === 0 ? (
              <div className="list-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p className="no-passwords-text">No Passwords</p>
              </div>
            ) : (
              <ul className="password-manager-list">
                {filteredList.map(eachPassword => (
                  <PasswordManagerItem
                    passwordDetails={eachPassword}
                    key={eachPassword.id}
                    onDeletePassword={this.onDeletePassword}
                    checkedStatus={isChecked}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
