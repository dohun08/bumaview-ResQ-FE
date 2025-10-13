import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth.js";
import { useUserStore } from "@/store/useUser.js";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import {useLoadingStore} from "@/store/useLoading.js";

export function useAuth() {
  const { setUser } = useUserStore();
  const {handleNavigate} = useNavigationWithTransition()
  const {setIsLoading} = useLoadingStore()

  const loginMutation = useMutation({
    mutationFn: login,
    onMutate: () => setIsLoading(true),
    onSettled: () => setIsLoading(false),
    onSuccess: (data) => {
      setUser({
        id: data.user_id,
        token: data.access_token,
        role: data.role,
      });
      handleNavigate("/")
    },
  });

  return {
    login: loginMutation,
  };
}
