const DOM = {
  classList: document.querySelector('form .form-wrap').classList,

  addError() {
    DOM.classList.add('error');
  },

  removeError() {
    DOM.classList.remove('error');  
  }
}

const Utils = {
  emailValidation(email) {
    const regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    const parts = email.split('@');

    if (parts.length !== 2) {
      return false;
    }

    const accont = parts[0];
    const address = parts[1];

    if (accont.length > 64 || accont.length === 0) {
      return false;
    }

    else if (address.length > 255 || address.length === 0) {
      return false;
    }

    const domains = accont.split('.');

    const overDomain = element => element.length > 63;

    if (domains.some( overDomain )) {
      return false;
    }

    if (regex.exec(email) === false) {
      return false;
    }
  }
}

const Form = {
  email: document.getElementById('email'),

  validation() {
    const email = Form.email.value;

    const isValid = Utils.emailValidation(email);
    
    if (isValid === false) {
      throw new Error("Invalid E-mail");
    } 
  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validation();
    }
    catch(error) {
      DOM.addError();
    }
  },
}