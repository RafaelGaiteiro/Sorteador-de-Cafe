const formatPhone = (phone: string): string => {
  // Remova todos os caracteres não numéricos
  let cleaned = ("" + phone).replace(/\D/g, "");

  // Verifique se temos o comprimento correto
  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    // Retorna o número de telefone formatado
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
};

export default formatPhone;
