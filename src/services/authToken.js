//const APIROUTE = "http://localhost:3000/mockapi/";
const APIROUTE = "http://localhost:50329/";

const ApiServices = {

    apiGet: (parameter = undefined) => {
        if(parameter) {
            return fetch(`${APIROUTE}${parameter}`).then(res => res.json());
        } else {

        }
    },

    apiPost: (parameter = undefined, obj = undefined) => {
        if(parameter) {
            return fetch(`${APIROUTE}${parameter}`, 
                { 
                    method: 'POST', 
                    headers: {'content-type': 'application/json'},
                    body: obj
                })
                .then(res => res.json());
        } else {
            
        }
    }

    // apiGet: async (parameter = undefined) => {
    //     if(parameter) {
    //         const res = await fetch(`${APIROUTE}${parameter}`);
    //         return await res.json();
    //     }
    // }

}

export default ApiServices;