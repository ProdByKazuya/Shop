import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthStore = () => useContext(AuthContext)

export const useUserData = () => useAuthStore()?.user

export const useUserEmain = () => useUserData()?.email || ''
export const useUserId = () => useUserData()?.id || ''

export const useAuthLoading = () =>useAuthStore()?.loading