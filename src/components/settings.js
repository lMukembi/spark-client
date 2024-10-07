import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/forms.css";
import { MdOutlineInfo } from "react-icons/md";
import { IoMdCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { useParams } from "react-router-dom";

export function Settings() {
  // hooks for forms
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  // hooks to check for validation and set icons
  const [emailValidation, setEmailValidation] = useState(false);
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [newPasswordValidation, setNewPasswordValidation] = useState(false);
  const [confirmNewPasswordValidation, setConfirmNewPasswordValidation] =
    useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [currentPasswordValidation, setCurrentPasswordValidation] =
    useState(false);

  const [emailIcon, setEmailIcon] = useState("");
  const [newPasswordIcon, setNewPasswordIcon] = useState("");
  const [confirmNewPasswordIcon, setConfirmNewPasswordIcon] = useState("");
  const [currentPasswordIcon, setCurrentPasswordIcon] = useState("");
  const [phoneIcon, setPhoneIcon] = useState("");
  const [usernameIcon, setUsernameIcon] = useState("");

  const [passwordFocus, setPasswordFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const disabledBtnStyle = {
    cursor: "unset",
  };

  const enabledBtnStyle = {
    cursor: "pointer",
    backgroundColor: "#0f9d58",
    color: "white",
  };

  const validField = <IoMdCheckmarkCircle className="valid" />;
  const invalidField = <IoIosCloseCircle className="invalid" />;

  const picashAPI = "http://localhost:8000";

  const { id } = useParams();

  const userData = JSON.parse(localStorage.getItem("newUser"));

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,15}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const userPhone = userData.result.phone.substring(3);
  const phoneHolder = `e.g 0${
    userPhone.substring(0, 3) + "xxxxx" + userPhone.substring(7)
  }`;

  // events
  const submitHandler = async (e) => {
    const phoneBody = phone.substring(1);
    e.preventDefault();
    const res = await axios.put(`${picashAPI}/api/user/${id}/update`, {
      first,
      last,
      phone: `254${phoneBody}`,
      email,
      username,
      password: currentPassword,
      newPassword,
    });

    if (res.data.status === true) {
      alert("Changes saved!");
    } else {
      alert("Something went wrong!");
    }
    setFirst("");
    setLast("");
    setPhone("");
    setEmail("");
    setUsername("");
    setNewPassword("");
    setConfirmNewPassword("");
    setCurrentPassword("");
  };

  // event handler fns
  const emailCheckHandler = async (e) => {
    const validEmail = EMAIL_REGEX.test(email);
    const res = await axios.post(`${picashAPI}/api/user/check-email`, {
      email,
    });

    if (
      (res.data.status && userData.result.email !== email) ||
      validEmail === false
    ) {
      setEmailValidation(true);
      setEmailIcon(invalidField);
    } else {
      if (validEmail === true) {
        setEmailValidation(EMAIL_REGEX.test(email));
        setEmailIcon(validField);
      } else {
        setEmailValidation(false);
      }
    }
  };

  const emailReset = (e) => {
    setEmailIcon("");
    setEmailValidation(false);
  };

  const phoneCheckHandler = async (e) => {
    const phoneBody = phone.substring(1);
    const res = await axios.post(`${picashAPI}/api/user/check-phone`, {
      phone: `254${phoneBody}`,
    });

    if (
      (res.data.status && userData.result.phone !== phone) ||
      phone.length !== 10
    ) {
      setPhoneValidation(true);
      setPhoneIcon(invalidField);
    } else {
      if (phone.length !== 10) {
        setPhoneValidation(true);
        setPhoneIcon(validField);
      } else {
        setPhoneValidation(false);
      }
    }
  };

  const phoneReset = (e) => {
    setPhoneIcon("");
    setPhoneValidation(false);
  };

  const usernameCheckHandler = async (e) => {
    const res = await axios.post(`${picashAPI}/api/user/check-username`, {
      username,
    });

    if (
      res.data.status &&
      username.length >= 0 &&
      username.length <= 15 &&
      userData.result.username !== username
    ) {
      setUsernameIcon(invalidField);
      setUsernameValidation(true);
    } else {
      if (username.length !== 0) {
        setUsernameIcon(validField);
        setUsernameValidation(USER_REGEX.test(username));
      } else {
        setUsernameValidation(false);
      }
    }
  };

  const usernameReset = (e) => {
    setUsernameIcon("");
    setUsernameValidation(false);
  };

  const currentPasswordHandler = async (e) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const config = {
      headers: headers,
    };

    const psd = PWD_REGEX.test(currentPassword);

    if (psd === true) {
      const res = await axios.post(
        `${picashAPI}/api/user/check-password/${id}`,
        {
          email,
          password: currentPassword,
        },
        config
      );

      if (res.data.status || psd === true) {
        setCurrentPasswordValidation(true);
        setCurrentPasswordIcon(validField);
      } else if (currentPassword.length === 0 || psd === false) {
        setCurrentPasswordValidation(PWD_REGEX.test(currentPassword));
        setCurrentPasswordIcon(invalidField);
      } else {
        setCurrentPasswordValidation(false);
      }
    }
  };

  const currentPasswordReset = (e) => {
    setCurrentPasswordIcon("");
    setCurrentPasswordValidation(false);
  };

  // check if new passwords match
  const newPasswordHandler = () => {
    if (newPassword === confirmNewPassword) {
      setNewPasswordValidation(PWD_REGEX.test(newPassword));
      setConfirmNewPasswordValidation(PWD_REGEX.test(confirmNewPassword));
      setNewPasswordIcon(validField);
    } else if (newPassword !== confirmNewPassword) {
      setNewPasswordValidation(PWD_REGEX.test(newPassword));
      setConfirmNewPasswordValidation(PWD_REGEX.test(confirmNewPassword));
      setConfirmNewPasswordIcon(invalidField);
    } else if (newPassword.length === 0 && confirmNewPassword.length === 0) {
      setNewPasswordValidation(false);
      setConfirmNewPasswordValidation(false);
    }
  };

  const newPasswordReset = (e) => {
    setNewPasswordValidation(false);
  };

  useEffect(() => {
    setFirst(userData.result.first);
    setLast(userData.result.last);
    setPhone(phoneHolder);
    setUsername(userData.result.username);
    setEmail(userData.result.email);
  }, [
    userData.result.first,
    userData.result.last,
    phoneHolder,
    userData.result.username,
    userData.result.email,
  ]);

  return (
    <div className="form">
      <h3>Update your information</h3>
      <p>
        Fill out the fields that you wish to update then enter your current
        password to save the changes.
      </p>
      <form onSubmit={submitHandler}>
        {/* FIRST & LAST NAME */}
        <div>
          <div className="field">
            <input
              type="text"
              name="first"
              autoComplete="off"
              required
              placeholder=" "
              onChange={(e) => setFirst(e.target.value)}
              value={first}
            />
            <label htmlFor="first" className="label">
              First Name
            </label>
          </div>

          <div className="field">
            <input
              type="text"
              name="last"
              required
              autoComplete="off"
              placeholder=" "
              onChange={(e) => setLast(e.target.value)}
              value={last}
            />
            <label htmlFor="last" className="label">
              Last Name
            </label>
          </div>
        </div>

        {/* PHONE */}
        <div className="field">
          <input
            type="tel"
            name="phone"
            required
            maxLength="10"
            autoComplete="off"
            placeholder=" "
            onChange={(e) => setPhone(e.target.value)}
            onBlur={phoneCheckHandler}
            onFocus={phoneReset}
            defaultValue={phone}
          />
          <label htmlFor="phone" className="label">
            Phone Number
          </label>

          {phoneValidation && (
            <p className="status">
              <i>{phoneIcon}</i>
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="field">
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
            onBlur={emailCheckHandler}
            onFocus={emailReset}
            value={email}
          />
          <label htmlFor="email" className="label">
            Email
          </label>

          {emailValidation && (
            <p className="status">
              <i>{emailIcon}</i>
            </p>
          )}
        </div>

        {/* USERNAME */}
        <div className="field">
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder=" "
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => setUsernameFocus(usernameCheckHandler)}
            onFocus={usernameReset}
            value={username}
          />
          <label htmlFor="username" className="label">
            Username
          </label>

          <p
            className={
              usernameFocus && username && !usernameValidation
                ? "instructions"
                : "offscreen"
            }
          >
            <MdOutlineInfo className="info" />
            Username must be 4 to 10 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          {usernameValidation && (
            <p className="status">
              <i>{usernameIcon}</i>
            </p>
          )}
        </div>

        {/* NEW PASSWORD */}
        {/* NEW STATE. IF THERE IS CONTENT IN NEW PASSWORD, MAKE THE CONFIRM NEW PASSWORD REQUIRED */}

        <div className="field">
          <input
            type="text"
            name="password"
            required
            autoComplete="off"
            placeholder="************"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            onBlur={() => setPasswordFocus(newPasswordHandler)}
            onFocus={newPasswordReset}
          />
          <label htmlFor="password" className="label">
            New Password
          </label>

          <p
            className={
              !passwordFocus && newPassword && !newPasswordValidation
                ? "instructions"
                : "offscreen"
            }
          >
            <MdOutlineInfo className="info" />
            Password must be 8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>
            <span aria-label="hashtag">#</span>
            <span aria-label="dollar sign">$</span>
            <span aria-label="percent">%</span>
          </p>

          {newPasswordValidation && (
            <p className="status">
              <i>{newPasswordIcon}</i>
            </p>
          )}
        </div>

        <div className="field">
          <input
            type="text"
            name="password"
            required
            autoComplete="off"
            placeholder="************"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            onBlur={() => setPasswordFocus(newPasswordHandler)}
            value={confirmNewPassword}
          />
          <label htmlFor="password-checker" className="label">
            Confirm New Password
          </label>
          {confirmNewPasswordValidation && (
            <p className="status">
              <i>{confirmNewPasswordIcon}</i>
            </p>
          )}
        </div>

        {/* CURRENT PASSWORD */}

        <div className="field">
          <input
            type="text"
            name="password"
            required
            autoComplete="off"
            placeholder="************"
            onChange={(e) => setCurrentPassword(e.target.value)}
            onBlur={() => setPasswordFocus(currentPasswordHandler)}
            onFocus={currentPasswordReset}
            value={currentPassword}
          />
          <label htmlFor="password-checker" className="label">
            Current Password
          </label>
          {currentPasswordValidation && (
            <p className="status">
              <i>{currentPasswordIcon}</i>
            </p>
          )}
        </div>

        {/* BUTTON */}
        <div className="button">
          <button
            type="submit"
            style={
              usernameValidation &&
              emailValidation &&
              phoneValidation &&
              newPasswordValidation &&
              confirmNewPasswordValidation &&
              currentPasswordValidation
                ? enabledBtnStyle
                : disabledBtnStyle
            }
            disabled={
              usernameValidation &&
              emailValidation &&
              phoneValidation &&
              newPasswordValidation &&
              confirmNewPasswordValidation &&
              currentPasswordValidation
                ? true
                : false
            }
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
