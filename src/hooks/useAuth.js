import { useMutation } from "@tanstack/react-query";
import { login, logout } from "@/api/auth.js";
import { useUserStore } from "@/store/useUserStore.js";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import {useLoadingStore} from "@/store/useLoadingStore.js";

export function useAuth() {
  const { setUser, clearUser } = useUserStore();
  const {handleNavigate} = useNavigationWithTransition()
  const {setIsLoading} = useLoadingStore()

  const loginMutation = useMutation({
    mutationFn: login,
    onMutate: () => setIsLoading(true),
    onSettled: () => setIsLoading(false),
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.access_token);
      setUser({
        id: data.user_id,
        token: data.access_token,
        role: data.role,
      });
      handleNavigate("/")
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      console.log(1)
      clearUser();
      handleNavigate("/")
    },
    onMutate: () => setIsLoading(true),
    onSettled: () => setIsLoading(false),
  });

  return {
    login: loginMutation,
    logout: logoutMutation,
  };
}
