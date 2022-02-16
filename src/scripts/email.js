
import emailjs, { init } from 'emailjs-com';

const s = `service_s0jpo85`; //user
const te = `template_iz6oc6i`;  //templateID

init("user_lG5W3wj2ZN3A6GrmqidIe");

const sendToMe = (n, c, t, cb) => {
   
   //forTesting
   //cb(true);
   //cb(false);
   //return;
   
   var form = {
      name: n,
      contact: c,
      message: t,
   }

   emailjs.send(s, te, form)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       cb(true);
    }, function(error) {
       console.log('FAILED...', error);
       cb(false);
    });
}

export default sendToMe;