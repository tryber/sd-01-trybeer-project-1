exports.elementsRegister = [
  {
    type: "text",
    name: "name",
    label: "Nome:",
    dataTestId: "nome",
    pattern: "^[a-zA-Z]{12,40}$",
  },
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
    isRequired: true,
    pattern: "^[0-9]{6,20}$"
  },
  {
    label: "Quero vender",
    type: "checkbox",
    name: "checkbox",
  },
  {
    type: "submit",
    value: "Cadastrar",
  }
];
