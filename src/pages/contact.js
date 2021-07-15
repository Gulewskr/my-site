import * as React from 'react'
import {graphql} from 'gatsby';
import '../styles/pageStyle.css'
import '../styles/contactForm.css'
import '../scripts/email.js'
import sendToMe from '../scripts/email.js'
import {Navbar, NeonAppWindow, ContactList, LanguageSettings, ColorSettings} from '../component/'
import {Trans, useI18next} from 'gatsby-plugin-react-i18next';
import ThemeContextProvider from '../component/neonColor';

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
    
    const checkEmailAdr = (v) => {
      if(v === undefined) return false;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(v).toLowerCase());
  }

    const emailCB = (res) => {
      if(res){
        console.log("sended");
      }else{
        console.log("error :(");
      }
    }

    function sendEmail(e) {
      var approver = true;
      e.preventDefault();
      var n = e.target[0].value;
      var c = e.target[1].value;
      var t = e.target[2].value;

      if(!checkEmailAdr(c)){
        console.log("bad email");
        approver = false;
      }

      if(n.length < 2){
        console.log('bad name');
        approver = false;
      }

      if(t.length < 20){
        console.log('bad message');
        approver = false;
      }
      if(approver){
        //sendToMe(n, c, t, emailCB);
        console.log("approved")
      }else{
        console.log("not approved")
      }
    }

    return(
      <form className="formCont" onSubmit={sendEmail}>
        <div className="form-sec"><Trans>contH</Trans></div>
        <div className="form-sec">
          <div>
            <label><Trans>contN</Trans></label>
            <input type="text"/>
          </div>
          <div>
            <label><Trans>contK</Trans></label>
            <input type="text"/>
          </div>
        </div>
        <div className="form-sec form-b">
          <label><Trans>contW</Trans></label>
          <textarea name="message"/>
        </div>
        <input type="submit" value={sendButton[language]} />
      </form>
    )
  }

  return (
    <ThemeContextProvider>
    <main>
        <div className="background-image" />
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