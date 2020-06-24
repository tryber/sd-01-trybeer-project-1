exports.elementsRegister = [
  {
    type: "text",
    name: "nome",
    label: "Nome:",
    dataTestId: "signup-name",
  },
  {
    type: "email",
    name: "email",
    label: "Email:",
    dataTestId: "signup-email",
  },
  {
    type: "password",
    name: "password",
    label: "Senha:",
    dataTestId: "signup-password",
  },
  {
    label: "Quero vender",
    type: "checkbox",
    name: "checkbox",
    dataTestId: "signup-seller",
  },
  {
    type: "button",
    value: "Cadastrar",
    dataTestId: "signup-btn",
  }
];

exports.elementsLogin= [
  {
    type: "email",
    name: "email",
    label: "Email:",
    dataTestId: "email",
    pattern: /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  {
    type: "password",
    name: "password",
    label: "Senha:",
    dataTestId: "password",
    pattern: /^[0-9]{6,20}$/
  },
  {
    type: "button",
    value: "Cadastrar",
  }
];
