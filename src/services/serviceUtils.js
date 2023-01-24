function difference(a1, a2) {
    let a2Set = new Set(a2);
    return a1.filter(function (x) { return !a2Set.has(x); });
}

const Utils = {

    // retorna elementos diferentes entre dois arrays
    arrayDiference: (arrayA, arrayB) => {
        return difference(arrayA, arrayB).concat(difference(arrayB, arrayA))
    },

    // retorna elementos iguais entre dois arrays
    arrayInterseccao: (arrayA, arrayB) => {
        return arrayA.filter(x => arrayB.includes(x))
    },

    validaCPF: (cpf) => {
        let strCPF = cpf.replace(/\./g,"") 
                        .replace(/\-/g,"")
                        .replace(/\(/g,"") 
                        .replace(/\)/g,"") 
                        .replace(/\//g,"") 
                        .replace(/\s/g,"") 

        var Soma;
        var Resto;
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

}

export default Utils;