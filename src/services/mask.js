const Mask = {
  // mascara cpf
  cpf: (v) => {
    if (v) {
      return v
        .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }
    return v;
  },

  // mascara cnpj
  cnpj: (v) => {
    if (v) {
      return v
        .replace(/\D/g, "") //Remove tudo o que não é dígito
        .replace(/^(\d{2})(\d)/, "$1.$2") //Coloca ponto entre o segundo e o terceiro dígitos
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
        .replace(/\.(\d{3})(\d)/, ".$1/$2") //Coloca uma barra entre o oitavo e o nono dígitos
        .replace(/(\d{4})(\d)/, "$1-$2") //Coloca um hífen depois do bloco de quatro dígitos
        .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }
    return v;
  },

  // mascara cpj e cnpj
  cpfCnpj: (v) => {
    if (v) {
      v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito

      if (v.length <= 11) {
        //CPF
        v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
      } else {//CNPJ
        v = v.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2") //Coloca um hífen depois do bloco de quatro dígitos
             .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
      }
    }

    return v;
  },

  // mascara cep
  cep: (v) => {
    if (v) {
      return v
        .replace(/\D/g, "") //Remove tudo o que não é dígito
        .replace(/^(\d{5})(\d)/, "$1-$2") //Esse é tão fácil que não merece explicações
        .replace(/(-\d{3})\d+?$/, "$1"); // captura 3 numeros seguidos de um traço e não deixa ser digitado mais nada
    }
    return v;
  },

  // marcara celular
  cel: (v) => {
    if (v) {
      return v
        .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d)/, "($1) $2") // coloca () entre os dois primeiro caracteres
        .replace(/(\d{4})(\d)/, "$1-$2") // coloca - apos o 4 digito
        .replace(/(-\d{5})\d+?$/, "$1"); // captura 5 numeros seguidos de um traço e não deixa ser digitado mais nada
    }
    return v;
  },

  // permite apenas numeros
  number: (v) => {
    if (v) {
      return v.replace(/[^\d]/g, ""); // permite apenas numeros
    }
    return v;
  },

  // permite apenas numeros e data 99/99/9999
  date: (v) => {
    if (v) {
      return v
        .replace(/[^\d]/g, "") // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d)/, "$1/$2") // coloca / entre segundo e terceiro caracteres
        .replace(/(\d{2})(\d)/, "$1/$2") // coloca / entre quarto e quinto caracteres
        .replace(/(\d{4})(\d)/, "$1"); // permite 4 digitos no final
    }
    return v;
  },

  valor: (v) => {
    if (v) {
      v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
      v = v.replace(/(\d)(\d{8})$/, "$1.$2"); //coloca o ponto dos milhões
      v = v.replace(/(\d)(\d{5})$/, "$1.$2"); //coloca o ponto dos milhares
      v = v.replace(/(\d)(\d{2})$/, "$1,$2"); //coloca a virgula antes dos 2 últimos dígitos
    }

    return v;
  },
  numeroPontos: (v) => {
    if (v) {
      return v
        .replace(/\D/g, "") //Remove tudo o que não é dígito
        .replace(/(\d)(\d{15})$/, "$1.$2") //coloca o ponto dos milhões
        .replace(/(\d)(\d{12})$/, "$1.$2") //coloca o ponto dos milhões
        .replace(/(\d)(\d{9})$/, "$1.$2") //coloca o ponto dos milhões
        .replace(/(\d)(\d{6})$/, "$1.$2") //coloca o ponto dos milhões
        .replace(/(\d)(\d{3})$/, "$1.$2"); //coloca o ponto dos milhares
    }

    return v;
  },

  unMask: (v) => {
    if (v) {
      return v
        .replace(/\./g, "") // remove todos os .
        .replace(/\-/g, "") // remove todos os -
        .replace(/\(/g, "") // remove todos os (
        .replace(/\)/g, "") // remove todos os )
        .replace(/\//g, "") // remove todos os /
        .replace(/\s/g, ""); // remove todos os " "
    }
    return v;
  },
};

export default Mask;
