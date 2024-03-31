import React, { useState } from "react";
import { graphql } from "gatsby";

import { NeonAppWindow, ContactList } from "@components";
import Layout from "@components/Layout";

import "@styles/contactForm.css";

import sendToMe from "@scripts/email.js";
import { getPrefixedTranslation } from "@scripts/utils.js";

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default function Contact({ pageTitle, children }) {
  const translate = getPrefixedTranslation();

  const contact = (
    <div className="content-window">
      <span className="info-t text-neon-on">
        {translate('contactpage.contact.label')}
        <br />
        <br />
      </span>
      <ContactList />
    </div>
  );

  const ContactForm = () => {
    const translateForm = getPrefixedTranslation('contactpage.form');
    const c = "rgb(34, 0, 156)";

    //focus
    const [sf, setSF] = useState(false);
    const [ef, setEF] = useState(false);
    const [mf, setMF] = useState(false);
    //bad values
    const [badN, setBadN] = useState(false);
    const [badK, setBadK] = useState(false);
    const [badW, setBadW] = useState(false);
    //respond
    const [e, setE] = useState(false);
    const [, setEB] = useState(true);
    //styles
    const styleBlured = { borderColor: c };
    const styleFocused = { borderColor: c, boxShadow: "0px 0px 3px 3px " + c };
    const styleBadBlured = { borderColor: "#e70404" };
    const styleBadFocused = {
      borderColor: "#e70404",
      boxShadow: "0px 0px 3px 3px #e70404",
    };

    const checkEmailAdr = (v) => {
      if (v === undefined) return false;
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(v).toLowerCase());
    };

    const emailCB = (res) => {
      setE(true);
      if (res) {
        setEB(true);
      } else {
        setEB(false);
      }
    };

    function sendEmail(e) {
      var approver = true;
      e.preventDefault();
      var n = e.target[0].value;
      var c = e.target[1].value;
      var t = e.target[2].value;

      if (n.length < 2) {
        console.log("bad name");
        setBadN(true);
        approver = false;
      } else {
        setBadN(false);
      }

      if (!checkEmailAdr(c)) {
        console.log("bad email");
        setBadK(true);
        approver = false;
      } else {
        setBadK(false);
      }

      if (t.length < 20) {
        console.log("bad message");
        setBadW(true);
        approver = false;
      } else {
        setBadW(false);
      }

      if (approver) {
        sendToMe(n, c, t, emailCB);
        console.log("approved");
      } else {
        console.log("not approved");
      }
    }

    const tmpDisabled = true;
    return (
      <div className="formContainer">
        <div className="additionalInfoText">{translateForm('disabledInfo')}</div>
        <div className="formMessage" style={{ top: e ? "50%" : "120%" }}>
          <NeonAppWindow>
            <div className="content-window">
              <div
                className="exit text-neon"
                onClick={() => setE(false)}
                onKeyPress={() => setE(false)}
                role="button"
                tabIndex={0}
              >
                x
              </div>
              <>{"Emailing temporarily removed"}</>
            </div>
          </NeonAppWindow>
        </div>
        <form className="contactForm" onSubmit={sendEmail}>
          <div className="contactForm-section">
            <div>
              <label htmlFor="sender" className={sf ? "text-neon-on" : ""}>
                {translateForm('sender')}
              </label>
              <input
                id="sender"
                type="text"
                onBlur={() => setSF(false)}
                onFocus={() => setSF(true)}
                disabled={tmpDisabled}
                style={
                  badN
                    ? sf
                      ? styleBadFocused
                      : styleBadBlured
                    : sf
                      ? styleFocused
                      : styleBlured
                }
              />
              {badN && (
                <div className="form-bad">
                {translateForm('error.name')}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="email" className={ef ? "text-neon-on" : ""}>
                {translateForm('eMail')}
              </label>
              <input
                id="email"
                type="email"
                onBlur={() => setEF(false)}
                onFocus={() => setEF(true)}
                disabled={tmpDisabled}
                style={
                  badK
                    ? ef
                      ? styleBadFocused
                      : styleBadBlured
                    : ef
                      ? styleFocused
                      : styleBlured
                }
              />
              {badK && (
                <div className="form-bad">
                {translateForm('error.email')}
                </div>
              )}
            </div>
          </div>
          <div className="contactForm-section">
            <label htmlFor="message" className={mf ? "text-neon-on" : ""}>
                {translate('message')}
            </label>
            <textarea
              id="message"
              name="message"
              onBlur={() => setMF(false)}
              onFocus={() => setMF(true)}
              disabled={tmpDisabled}
              style={
                badW
                  ? mf
                    ? styleBadFocused
                    : styleBadBlured
                  : mf
                    ? styleFocused
                    : styleBlured
              }
            />
            {badW && (
              <div className="form-bad">
                {translateForm('error.message')}
              </div>
            )}
          </div>
          <input type="submit" disabled id="submitButton" value={translateForm('button')} />
        </form>
      </div>
    );
  };

  return (
    <Layout pageTitle={"Rafal Gulewski - Kontakt"}>
      <div className="content">
        <div className="wdg-c">
          <NeonAppWindow>{contact}</NeonAppWindow>
        </div>
        <div className="wdg-contactForm">
          <NeonAppWindow>
            <div className="content-window">
              <ContactForm />
            </div>
          </NeonAppWindow>
        </div>
      </div>
    </Layout>
  );
}
