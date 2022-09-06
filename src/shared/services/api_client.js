import api from "./api";
// import axios from 'axios';


export const API_CLIENT = {
    get(URL) {
        const promise = api.get(URL, { timeout: 7000 });
        return promise;
    },
    post(URL, data) {
        console.log(process.env.REACT_APP_API);
        return api.post(URL, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    put() {

    },
    delete() {

    }

}