import axios from 'axios';

const soicalURL = String(process.env.REACT_APP_SOCIAL);
const verifyURL = String(process.env.REACT_APP_VERIFY);

export const onGoogleLogin = async (userEmail: string, accessToken: string) => {
    const localStorage = require('local-storage');
    try {
        // send access token to SandAuth
        const response = await axios.post(soicalURL, {
            email: userEmail, // user email
            access_token: accessToken, // google access token
        });
        if (response && response.status === 200) {
            // set token in localstorage
            localStorage.set('auth_token', response.data.token);
            return await CheckToken(response.data.token);
        }
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

export const CheckToken = async (accessToken: string) => {
    try {
        const response = await axios.get(verifyURL, {
            headers: {
                Authorization: accessToken,
            },
        });
        if (response && response.status === 200) {
            return response.data;
        }
    } catch (e) {
        console.log(e);
        return undefined;
    }
};
