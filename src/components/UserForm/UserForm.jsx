const UserForm = () => {
  return (
    <form className="flex flex-col gap-[24px]">
      {/* Name */}
      <div className="user-input">
        <label className="label-title" htmlFor="name">
          Name
        </label>
        <input
          className="input01"
          name="name"
          type="text"
          placeholder="Jane Appleseed"
        />
      </div>

      {/* Email */}
      <div className="user-input">
        <label className="label-title" htmlFor="name">
          Email Address
        </label>
        <input
          className="input01"
          name="email"
          type="email"
          placeholder="email@example.com"
        />
      </div>

      {/* Message */}
      <div className="user-input">
        <label className="label-title" htmlFor="message">
          Message
        </label>
        <textarea
          className="input02"
          name="message"
          type="textarea"
          placeholder="How can I help?"
        />
      </div>

      {/* Submit */}
      <button className="btn-secondary w-[200px]">SEND MESSAGE</button>
    </form>
  );
};

export default UserForm;
