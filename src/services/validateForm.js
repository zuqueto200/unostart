function valideMail(email) {
    if (email.length < 5) {
        return false
    }
    if (!email.includes("@") || !email.includes(".com")) {
        return false
    }
    return true
}
function validePhone(phone) {
    if (phone.length < 10 || phone.length > 11) {
        return false
    }
    return true
}
function valideCpf(strCPF) {
    debugger
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF === "00000000000") return false;
        
    for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    
    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)) ) return false;
    
    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    
    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
const ValidateForm = {
    validForm: (id, obj) => {
        let errorFields = [];
        let msgType = 0;
        let hasError = true;
        let message = "";
        let objRetorno = { "valid" : false, "msg": ""}

        if (id === 'meuCadastro') {
            if (obj.sobreNome === '' || obj.sobreNome === undefined) {
                hasError = false;
                errorFields.push('Nome');
            };
            
            if (obj.cpf === '' || obj.cpf === undefined) {
                hasError = false;
                errorFields.push('cpf');
            } else if (!valideCpf(obj.cpf)) {
                hasError = false;
                objRetorno.valid = hasError
                objRetorno.msg = "Informe um CPF Válido"
                return objRetorno
            };

            if (obj.email === '' || obj.email === undefined) {
                hasError = false;
                errorFields.push('Email');
            } else if (!valideMail(obj.email)) {
                hasError = false;
                objRetorno.valid = hasError
                objRetorno.msg = "Informe um Email Válido"
                return objRetorno
            };
            
            if (obj.celular === '' || obj.celular === undefined) {
                hasError = false;
                errorFields.push('celular');
            } else if (!validePhone(obj.celular)) {
                hasError = false;
                objRetorno.valid = hasError
                objRetorno.msg = "Informe um Celular Válido"
                return objRetorno
            }

        };

        if (errorFields.length === 1 && msgType === 0) {
            message = "O campo " + errorFields[0] + " é obrigatório."
        }

        if (errorFields.length === 2 && msgType === 0) {
            message = "Os campos " + errorFields[0] + " e " + errorFields[1] + " são obrigatórios."
        }

        if (errorFields.length > 2 && msgType === 0) {
            let concatString = "";
            for (let n = 0; n < errorFields.length - 1; n++) { concatString += errorFields[n] + ", " }
            concatString = concatString.slice(0, concatString.lastIndexOf(","));
            concatString += " e " + errorFields[errorFields.length - 1];
            message = "Os campos " + concatString + " são obrigatórios."
        }

        objRetorno.valid = hasError
        objRetorno.msg = message
        return objRetorno
    }
}

export default ValidateForm;