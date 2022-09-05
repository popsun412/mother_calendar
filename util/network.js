import axios from "axios";
import { getAuth } from "firebase/auth";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
});

instance.interceptors.request.use(
  async (config) => {
    const auth = getAuth();

    if (auth.currentUser != null) {
      config.headers.token = await auth.currentUser.getIdToken();
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default instance;
