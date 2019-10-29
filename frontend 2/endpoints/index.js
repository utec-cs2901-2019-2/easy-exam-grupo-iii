import axios from 'axios';
import env from './env';
import { UNAUTHORIZED } from '../utils/constants';
import AuthContainer from '../containers/authContainer';

const auth = new AuthContainer();

axios.interceptors.response.use(
  response => response,
  async error => {
    console.log('ERRORRRRRR ->', error, error.response);
    const { status } = error.response;
    if (status === UNAUTHORIZED) {
      console.log('UNAUTHORIZED BRO');
      await auth.logOut();
    }
    if (status === 428) {
      await auth.setUserData(error.response.data.data.user);
    }
    return Promise.reject(error);
  },
);

export const baseUrl = env.BASE_API;

export const registerNewUser = (payload) => axios.post(`${baseUrl}/auth/register`, { ...payload });

export const loginRequest = (data) => axios.post(`${baseUrl}/auth/login`, { ...data });

export const loginComplete = (data, token) => axios.post(`${baseUrl}/auth/complete`,
    { ...data },
    { headers: { Authorization: `Bearer ${token}` } });

export const recoveryPassword = (email) => axios.post(`${baseUrl}/auth/recover-password`, { email });

export const recoveryPasswordReset = (recoverData) => axios.post(
`${baseUrl}/auth/recover-password/reset`, { ...recoverData },
);

export const getUserInfo = (token) => axios.get(`${baseUrl}/users/me`,
	{ headers: { Authorization: `Bearer ${token}` } });

export const fastRegister = (payload) => axios.post(`${baseUrl}/auth/create-account`, { ...payload });

export const updateProfile = (payload, token) => axios.post(`${baseUrl}/users/me/update-profile`,
  { ...payload },
  { headers: { Authorization: `Bearer ${token}` } });

export const savePassword = (payload, token) => axios.post(`${baseUrl}/users/me/update-password`,
  { ...payload },
  { headers: { Authorization: `Bearer ${token}` } });

export const saveIdentification = (payload, token) => axios.post(
  `${baseUrl}/users/me/update-identification`,
  { ...payload },
  { headers: { Authorization: `Bearer ${token}` } },
);

export const updateProfilePhoto = (payload, token) => axios.post(
	`${baseUrl}/users/me/update-photo`,
	payload,
	{
		headers: {
      Authorization: `Bearer ${token}`,
			'content-type': 'multipart/form-data',
    },
  },
);

export const completeProfile = (payload, token) => axios.post(
	`${baseUrl}/users/me/complete-profile`,
  { ...payload },
  { headers: { Authorization: `Bearer ${token}` } },
);

export const getRoleActionsOfUser = (token) => axios.get(
	`${baseUrl}/users/me/actions`,
	{ headers: { Authorization: `Bearer ${token}` } },
);

export const getMyNotifications = (token) => axios.get(
	`${baseUrl}/users/me/notifications`,
	{ headers: { Authorization: `Bearer ${token}` } },
);

export const getAllNotifications = (token) => axios.get(
	`${baseUrl}/notifications/all`,
	{ headers: { Authorization: `Bearer ${token}` } },
);

export const markNotificationAsRead = (data, token) => axios.post(
	`${baseUrl}/notifications/read`,
  { ...data },
  { headers: { Authorization: `Bearer ${token}` } },
);

export const markAllNotificationsAsread = (token) => axios.post(
  `${baseUrl}/notifications/read/all`,
  {},
  { headers: { Authorization: `Bearer ${token}` } },
);

export const emailUpdate = (emailId, data, token) => axios.put(
  `${baseUrl}/emails/${emailId}`,
  { ...data },
  { headers: { Authorization: `Bearer ${token}` } },
);

export const emailRequestValidation = (emailId, token) => axios.post(
  `${baseUrl}/emails/${emailId}/request-validation`,
  {},
  { headers: { Authorization: `Bearer ${token}` } },
  );

export const emailVerification = (token) => axios.post(
	`${baseUrl}/emails/confirmation`,
	{ token },
);
