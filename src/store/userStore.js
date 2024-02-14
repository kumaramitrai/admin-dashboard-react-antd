import { notification, message } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "zustand";

import userService from "../apis/services/userService";
import { getItem, removeItem, setItem } from "../utils/storage";

import { StorageEnum } from "../utils/enum";

const useUserStore = create((set) => ({
  userInfo: getItem(StorageEnum.User) || {},
  userToken: getItem(StorageEnum.Token) || {},
  actions: {
    setUserInfo: (userInfo) => {
      set({ userInfo });
      setItem(StorageEnum.User, userInfo);
    },
    setUserToken: (userToken) => {
      set({ userToken });
      setItem(StorageEnum.Token, userToken);
    },
    clearUserInfoAndToken() {
      set({ userInfo: {}, userToken: {} });
      removeItem(StorageEnum.User);
      removeItem(StorageEnum.Token);
    },
  },
}));

export const useUserInfo = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  return userInfo;
};
export const useUserData = () => useUserStore((state) => state.userInfo);
export const useUserToken = () => useUserStore((state) => state.userToken);
export const useUserActions = () => useUserStore((state) => state.actions);

export const useSignIn = () => {
  const navigate = useNavigate();
  const { setUserToken, setUserInfo } = useUserActions();

  const signIn = async (data) => {
    try {
      const res = await userService.signin(data);
      const { user, accessToken, refreshToken } = res;
      console.log(
        "user, accessToken, refreshToken",
        user,
        accessToken,
        refreshToken
      );
      setUserToken({ accessToken, refreshToken });
      setUserInfo(user);
      navigate("/", { replace: true });

      notification.success({
        message: "login",
        description: `${"login success"}: ${data.username}`,
        duration: 3,
      });
    } catch (err) {
      message.warning({
        content: err.message,
        duration: 3,
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(signIn, []);
};
