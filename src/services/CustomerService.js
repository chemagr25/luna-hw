export default class CustomerService {

    getCustomersLarge() {
        return fetch('./json.json').then(res => res.json())
                .then(d => d.data);
    }
 

    getCustomers(params) {
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
 }