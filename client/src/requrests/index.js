import axios from 'axios'
import { headerAuth } from '../utility/headerAuth'

export const request = {
    user: {
        register: async form => {
            try {
                return await axios.post('/register/', { form });
            }
            catch( error ){ return error };
        }, 
    },

    collab: {
        search: async name => {
            try {
                let data = await axios.get(`/search/collab/${name}`);
                return data.data;
            }
            catch( error ){ return error };
        },

        add: async list => {
            try {
                let data = await axios.post('/add/collab/', { list });
                return data.data;
            }
            catch( error ){ return error };
        }
    },

    messanger: {
        send: async data => {
            let { uid, id, message } = data;
            try {
                let data = await axios.post(`/messanger/send/${uid}/${id}`, { message });
                return data.data;
            }
            catch( error ){ return error };
        },

        getAll: async data => {
            let { uid, id } = data;
            try {
                let data = await axios.get(`/get/messages/${uid}/${id}`);
                return data.data;
            }
            catch( error ){ return error };
        }
    },

    project: {
        create: async (data) => {
            let { uid, name } = data;
            try {
                let data = await axios.post(`/create/project/${uid}`, { name }, await headerAuth());
                return data.data;
            }
            catch( error ){ return error };
        },

        delete: async data => {
            let { uid, id } = data;
            try{
                let data = await axios.get(`/delete/project/${uid}/${id}`);
                return data.data;
            }
            catch( error ){ return error };
        },

        getAll: async uid => {
            try {
                let data = await axios.get(`/get/all/projects/${uid}`, await headerAuth() );
                return data.data;
            }
            catch( error ){ return error };
        },
    },

    card: {
        create: async data => {
            let { uid, id, name } = data;
            try {
                let data = await axios.get(`/create/card/${uid}/${id}/${name}`);
                return data.data;
            }
            catch( error ){ return error };
        },

        getAll: async data => {
            let { uid, id } = data;
            try {
                let data = await axios.get(`/get/all/cards/${uid}/${id}`);
                return data.data;
            }
            catch ( error ){ return error };        
        },

        delete: async data => {
            let { uid, id, name } = data;
            try {
                let data = await axios.get(`/delete/card/${uid}/${id}/${name}`);
                return data.data;
            }
            catch ( error ){ return error };
        }
    },

    task: {
        create: async data => {
            let { uid, id, name, text } = data;
            try {
                let data = await axios.post(`/create/task/${uid}/${id}/${name}`, { text });
                return data.data;
            }
            catch( error ){ return error };
        },
        delete: async data => {
            let { uid, id, name, task } = data;
            try {
                let data = await axios.get(`/delete/tasks/${uid}/${id}/${name}/${task}`);
                return data.data;
            }
            catch( error ) { return error };
        }
    }
    
};