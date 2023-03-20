import './index.css'

const PasswordManagerItem = props => {
  const {passwordDetails, onDeletePassword, checkedStatus} = props
  const {
    id,
    websiteInputValue,
    usernameInputValue,
    passwordInputValue,
    bgColor,
  } = passwordDetails

  const firstCharacter = websiteInputValue[0].toUpperCase()

  const passWordLength = passwordInputValue.length

  const onDeleteItem = () => {
    onDeletePassword(id)
  }

  return (
    <li className="list-item">
      <div className="username-container">
        <div>
          <p className={`alphabet-container ${bgColor}`}>{firstCharacter}</p>
        </div>
        <div className="details-container">
          <p className="website-description">{websiteInputValue}</p>
          <p className="username-description">{usernameInputValue}</p>
          {checkedStatus ? (
            <p className="password-description">{passwordInputValue}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars-image"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        className="delete-icon"
        type="button"
        onClick={onDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordManagerItem
