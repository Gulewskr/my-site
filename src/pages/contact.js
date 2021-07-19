import * as React from 'react'
import {graphql} from 'gatsby';
import '../styles/pageStyle.css'
import '../styles/contactForm.css'
import '../scripts/email.js'
import sendToMe from '../scripts/email.js'
import {Navbar, NeonAppWindow, ContactList, LanguageSettings, ColorSettings} from '../component/'
import {Trans, useI18next} from 'gatsby-plugin-react-i18next';
import ThemeContextProvider from '../component/neonColor';
import background from '../images/bg.jpg'
import { useColor } from "../component/neonColor";

// markup
const Layout = ({ pageTitle, children }) => {

  const {language} = useI18next();
  const sendButton = {
    "pl": "wyślij",
    "en": "send"
  }

  const contact = <>
    <span className="info-t"><Trans>cont</Trans><br /><br /></span>
    <ContactList />
  </> 

  const ContactForm = () => {

    const {c} = useColor();
    const [badN, setBadN] = React.useState(false);
    const [badK, setBadK] = React.useState(false);
    const [badW, setBadW] = React.useState(false);

    const [e, setE] = React.useState(false);
    const [eb, setEB] = React.useState(true);

    const styleBlured = {borderColor : c}
    const styleFocused = {borderColor : c, boxShadow : "0px 0px 3px 3px " + c}
    const styleBadBlured = {borderColor : "#e70404"}
    const styleBadFocused = {borderColor : "#e70404", boxShadow : "0px 0px 3px 3px #e70404"}

    const styleBut = {backgroundColor: c, boxShadow: "0px 0px 2px 2px " + c}
    const styleButH = {color: "#000000", backgroundColor: "#dfdfdf", boxShadow: "0px 0px 6px 6px " + c}

    const [styleN, SetStyleN] = React.useState(styleBlured);
    const [styleK, SetStyleK] = React.useState(styleBlured);
    const [styleW, SetStyleW] = React.useState(styleBlured);
    const [styleB, SetStyleB] = React.useState(styleBut);

    const changeStyleElement = (f = SetStyleN, blured = true, bad) => {
      if(blured){
        f(bad ? styleBadBlured : styleBlured );
      }else{
        f(bad ? styleBadFocused : styleFocused );
      }
    }

    React.useEffect(() => {
      changeStyleElement(SetStyleN, undefined, badN);
      changeStyleElement(SetStyleK, undefined, badK);
      changeStyleElement(SetStyleW, undefined, badW);
      SetStyleB(styleBut);
    }, [c, badK, badN, badW])

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
        SetStyleN(styleBadBlured);
        approver = false;
      }else{
        setBadN(false);
        SetStyleN(styleBlured);
      }

      if(!checkEmailAdr(c)){
        console.log("bad email");
        setBadK(true);
        SetStyleK(styleBadBlured);
        approver = false;
      }else{
        setBadK(false);
        SetStyleK(styleBlured);
      }

      if(t.length < 20){
        console.log('bad message');
        setBadW(true);
        SetStyleW(styleBadBlured);
        approver = false;
      }else{
        setBadW(false);
        SetStyleW(styleBlured);
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
        <NeonAppWindow content={
          <>
            <div className="exit" 
              onClick={() => setE(false)}
              onKeyPress={() => setE(false)}
              role="button" tabIndex={0}>
              x
            </div>
            <Trans>{eb ? "success" : "error"}</Trans></>
          } />
      </div>
      <form className="formCont" onSubmit={sendEmail}>
        <div className="form-sec"><Trans>contH</Trans></div>
        <div className="form-sec">
          <div>
            <label htmlFor="n" ><Trans>contN</Trans></label>
            <input id="n" type="text" onBlur= {() => changeStyleElement(SetStyleN, true, badN)} onFocus={ () => changeStyleElement(SetStyleN, false, badN)} style={styleN}/>
            {badN && <div className="form-bad"><Trans>BadN</Trans></div>}
          </div>
          <div>
            <label htmlFor="k" ><Trans>contK</Trans></label>
            <input id="k" type="text" onBlur= {() => changeStyleElement(SetStyleK, true, badK)} onFocus={ () => changeStyleElement(SetStyleK, false, badK)} style={styleK}/>
            {badK && <div className="form-bad"><Trans>BadK</Trans></div>}
          </div>
        </div>
        <div className="form-sec form-b">
          <label htmlFor="t" ><Trans>contW</Trans></label>
          <textarea id="t" name="message" onBlur= {() => changeStyleElement(SetStyleW, true, badW)} onFocus={ () => changeStyleElement(SetStyleW, false, badW)} style={styleW}/>
          {badW && <div className="form-bad"><Trans>BadW</Trans></div>}
        </div>
        <input type="submit" onMouseEnter={() => SetStyleB(styleButH)} onMouseLeave={() => SetStyleB(styleBut)} value={sendButton[language]} style={styleB} />
      </form>
      </>
    )
  }

  return (
    <ThemeContextProvider>
    <main>
      <div className="background-image" style={{backgroundImage: `url(${background})`}} />
        <Navbar s="Kontakt" />
        <title>Rafal Gulewski - Kontakt</title>
        <div className="content">
          <div className="wdg-c">
            <NeonAppWindow content={contact}/>
          </div>
          <div className="wdg-contactForm">
            <NeonAppWindow content={<ContactForm />}/>
          </div>
        </div>
        
        <LanguageSettings />
        <ColorSettings />
    </main>
    </ThemeContextProvider>
  )
}

export default Layout

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