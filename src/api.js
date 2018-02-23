import axios from 'axios';

const URL = 'http://localhost:8080';

const requests = {
    get: async (rootUrl, route = '', config = {}) => {
        const response = await axios.get(`${rootUrl}${route}`, config);
        return getResponse(response);
    },
    post: async (rootUrl, route = '', body = {}, config = {}) => {
        const response = await axios.post(`${rootUrl}${route}`, body, config);
        return getResponse(response);
    },
    put: async (rootUrl, route = '', config = {}) => {
        const response = await axios.put(`${rootUrl}${route}`, config);
        return getResponse(response);
    },
    delete: async (rootUrl, route = '', config = {}) => {
        const response = await axios.delete(`${rootUrl}${route}`, config);
        return getResponse(response);
    }
};

const getResponse = res => {
    const { data, status, headers} = res;
    return { data, status, headers };
};

export const Auth = {
    signup: async ({ username, email, password }) => {
        const res = await requests.post(URL, '/user', {
            username, email, password
        });
        return res;
    },
    signin: async ({ email, password }) => {
        const res = await requests.post(URL, '/signin', {
            email, password
        });
        return res;
    },
    signout: async ({ token }) => {
        const res = await requests.delete(URL, '/me/token', {
            headers: {
                'X-AUTH': token
            }
        });
        return res;
    }
};

export const Work = {
    upload: async ({ fd, token }) => {
        const res = await requests.post(URL, '/work', fd, {
            headers: {
                'X-AUTH': token
            }
        });
        return res;
    }
};