exports.elementsRegister = [
  {
    type: "text",
    name: "name",
    label: "Nome:",
    dataTestId: "signup-name",
    pattern: "^[a-zA-Z]{12,40}$",
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
    isRequired: true,
    pattern: "^[0-9]{6,20}$"
  },
  {
    label: "Quero vender",
    type: "checkbox",
    name: "checkbox",
    dataTestId: "signup-seller",
  },
  {
    type: "submit",
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
  },
  {
    type: "password",
    name: "password",
    label: "Senha:",
    dataTestId: "password",
    pattern: "^[0-9]{6,20}$"
  },
  {
    type: "submit",
    value: "Cadastrar",
  }
];
