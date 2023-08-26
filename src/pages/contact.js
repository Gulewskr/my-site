import React, { useState } from 'react'
//import {graphql} from 'gatsby';
import '../styles/pageStyle.css'
import '../styles/contactForm.css'
import '../scripts/email.js'
import sendToMe from '../scripts/email.js'
import { NeonAppWindow, ContactList} from '../component/'
//import {, useI18next} from 'gatsby-plugin-react-i18next';

import Layout from '../component/Layout';


export default function Contact ({ pageTitle, children })
{

  //const {language} = useI18next();
  const sendButton = {
    "pl": "wyślij",
    "en": "send"
  }

  const contact = <div className='content-window'>
    <span className="info-t text-neon-on"><>cont</><br /><br /></span>
    <ContactList />
  </div> 

  const ContactForm = () => {

    const c = 'rgb(34, 0, 156)';

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
    const [eb, setEB] = useState(true);
    //styles
    const styleBlured = {borderColor : c}
    const styleFocused = {borderColor : c, boxShadow : "0px 0px 3px 3px " + c}
    const styleBadBlured = {borderColor : "#e70404"}
    const styleBadFocused = {borderColor : "#e70404", boxShadow : "0px 0px 3px 3px #e70404"}

    const checkEmailAdr = (v) => {
      if(v === undefined) return false;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(v).toLowerCase());
    }

    const emailCB = (res) => {
      setE(true);
      if(res){
        console.log("sended");
        setEB(true);
      }else{
        console.log("error");
        setEB(false);
      }
    }

    function sendEmail(e) {
      var approver = true;
      e.preventDefault();
      var n = e.target[0].value;
      var c = e.target[1].value;
      var t = e.target[2].value;

      if(n.length < 2){
        console.log('bad name');
        setBadN(true);
        approver = false;
      }else{
        setBadN(false);
      }

      if(!checkEmailAdr(c)){
        console.log("bad email");
        setBadK(true);
        approver = false;
      }else{
        setBadK(false);
      }

      if(t.length < 20){
        console.log('bad message');
        setBadW(true);
        approver = false;
      }else{
        setBadW(false);
      }

      if(approver){
        sendToMe(n, c, t, emailCB);
        console.log("approved")
      }else{
        console.log("not approved")
      }
    }

    return(
      <>
        <div className="form-msg" style={{top: e ? "50%" : "120%"}}>
          <NeonAppWindow>
            <div className='content-window'>
              <div className="exit text-neon" 
                onClick={() => setE(false)}
                onKeyPress={() => setE(false)}
                role="button" tabIndex={0}>
                x
              </div>
              <>{eb ? "success" : "error"}</>
            </div>
          </NeonAppWindow>
        </div>
      <form className="formCont" onSubmit={sendEmail}>
        <div className="form-sec text-neon-on-blink"><>contH</></div>
        <div className="form-sec">
          <div>
            <label htmlFor="sender" className={sf ? 'text-neon-on' : '' } ><>contN</></label>
            <input id="sender" type="text" onBlur={() => setSF(false)} onFocus={ () => setSF(true)} style={badN ? sf ? styleBadFocused : styleBadBlured : sf ? styleFocused : styleBlured}/>
            {badN && <div className="form-bad"><>BadN</></div>}
          </div>
          <div>
            <label htmlFor="email" className={ef ? 'text-neon-on' : '' } ><>contK</></label>
            <input id="email" type="email" onBlur={() => setEF(false)} onFocus={ () => setEF(true)} style={badK ? ef ? styleBadFocused : styleBadBlured : ef ? styleFocused : styleBlured}/>
            {badK && <div className="form-bad"><>BadK</></div>}
          </div>
        </div>
        <div className="form-sec form-b">
          <label htmlFor="message" className={mf ? 'text-neon-on' : '' } ><>contW</></label>
          <textarea id="message" name="message" onBlur={() => setMF(false)} onFocus={ () => setMF(true)} style={badW ? mf ? styleBadFocused : styleBadBlured : mf ? styleFocused : styleBlured}/>
          {badW && <div className="form-bad"><>BadW</></div>}
        </div>
        <input type="submit" id='submitButton' value={sendButton['en']} />
      </form>
      </>
    )
  }

  return (
      <Layout>
        <main>
            <title>Rafal Gulewski - Kontakt</title>
            <div className="content">
              <div className="wdg-c">
                <NeonAppWindow>
                  {contact}
                </NeonAppWindow>
              </div>
              <div className="wdg-contactForm">
                <NeonAppWindow>
                  <div className='content-window'>
                    <ContactForm />
                  </div>
                </NeonAppWindow>
              </div>
            </div>
        </main>
      </Layout>
  )
}


/*
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
*/