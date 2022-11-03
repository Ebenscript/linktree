import "./contact-page.css";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/text-area/text-area";
import { Button } from "../../components/button/button";
import { Checkbox } from "../../components/checkbox/checkbox";
import { getErrMsg, useContactPageLogic } from "./contact-page-hooks";
import { LandingLayout } from "../../layouts/landing-layout/landing-layout";

function ContactPage() {
  const {
    consented,
    values,
    touched,
    hasError,
    toggleConsent,
    handleBlur,
    handleChange,
  } = useContactPageLogic();

  return (
    <LandingLayout>
      <div className="contact-page display-grid" style={{ "--gap": "48px" }}>
        <div className="display-grid" style={{ "--gap": "20px" }}>
          <h1 className="contact-page__title">Contact Me</h1>

          <p className="contact-page__sub-text">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>

        <form className="display-grid" action="#" style={{ "--gap": "32px" }}>
          <div className="display-grid" style={{ "--gap": "24px" }}>
            <div className="display-grid display-flex-tab">
              <Input
                className="contact-page__input"
                label="First name"
                name="firstName"
                value={values.firstName}
                error={getErrMsg({
                  name: "firstName",
                  touched,
                  values,
                  message: "Please enter your first name",
                })}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your first name"
              />

              <Input
                className="contact-page__input"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Last name"
                error={getErrMsg({
                  name: "lastName",
                  touched,
                  values,
                  message: "Please enter your last name",
                })}
                placeholder="Enter your last name"
              />
            </div>

            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              error={getErrMsg({
                name: "email",
                touched,
                values,
              })}
              label="Email"
              placeholder="yourname@email.com"
            />

            <TextArea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getErrMsg({
                name: "message",
                touched,
                values,
                message: "Please enter a message",
              })}
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />

            <Checkbox
              checked={consented}
              onChange={toggleConsent}
              disabled={hasError}
            >
              You agree to providing your data to ebenscript who may contact
              you.
            </Checkbox>
          </div>

          <Button disabled={hasError || !consented} type="submit">
            Send message
          </Button>
        </form>
      </div>
    </LandingLayout>
  );
}

export default ContactPage;
