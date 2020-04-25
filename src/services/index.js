import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
});

// naš objekt za sve pozive koji se dotiču `Post`ova
let Posts = {
    add(post) {
        return Service.post('/task', post);
    },
    async getAll(searchTerm) {
        let options = {};

        

        let response = await Service.get('/task', options);
        return response.data.map(doc => {
            return {
                obaveza: doc.obaveza,
                broj: doc.broj,
              
            };
        });
    }
};

export { Service, Posts }; // exportamo Service za ručne pozive ili Posts za metode.
