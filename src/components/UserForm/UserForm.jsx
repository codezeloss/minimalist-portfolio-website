import useInput from "../../hooks/use-input";

const UserForm = () => {
  // Name input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  // Email input
  const validRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.match(validRegex));

  // Message input
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  // form validation && submission
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid && !enteredMessageIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail, enteredMessage);

    nameReset("");
    emailReset("");
    messageReset("");
  };

  return (
    <form className="flex flex-col gap-[24px]" onSubmit={formSubmissionHandler}>
      {/* Name */}
      <div className="user-input">
        <label className="label-title" htmlFor="name">
          Name
        </label>
        <input
          className={`input01 ${nameHasError ? "error-border" : ""} ${
            enteredName ? "valid-border" : ""
          }`}
          name="name"
          id="name"
          type="text"
          placeholder="Jane Appleseed"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className="error-message">This field is required</p>
        )}
      </div>

      {/* Email */}
      <div className="user-input">
        <label className="label-title" htmlFor="name">
          Email Address
        </label>
        <input
          className={`input01 ${emailHasError ? "error-border" : ""} ${
            enteredEmailIsValid ? "valid-border" : ""
          }`}
          name="email"
          id="email"
          type="email"
          placeholder="email@example.com"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-message">
            This field is required, enter a valid email
          </p>
        )}
      </div>

      {/* Message */}
      <div className="user-input">
        <label className="label-title" htmlFor="message">
          Message
        </label>
        <textarea
          className={`input02 ${messageHasError ? "error-border" : ""} ${
            enteredMessage ? "valid-border" : ""
          }`}
          name="message"
          type="textarea"
          placeholder="How can I help?"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        {messageHasError && (
          <p className="error-message">This field is required</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        className={`btn-secondary w-[200px] bg-dark-blue text-white`}
        disabled={!formIsValid}
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default UserForm;
