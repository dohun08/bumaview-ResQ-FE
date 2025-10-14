import {useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {useNavigationTransitionStore} from "@/store/useNavigationTransitionStore.js";
import {useUserStore} from "@/store/useUserStore.js";

export default function useNavigationWithTransition() {
  const navigate = useNavigate();
  const location = useLocation();
  const {showTravel, setShowTravel} = useNavigationTransitionStore();
  const {id} = useUserStore();

  useEffect(() => {
    if (showTravel) {
      const timer = setTimeout(() => setShowTravel(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [showTravel, setShowTravel]);

  const handleNavigate = (path, state = null) => {
    setShowTravel(true);
    setTimeout(() => {
      if (id || path ==="/") {
        navigate(path, { state });
      } else {
        navigate("/login");
      }
      setShowTravel(false);
    }, 1200);
  };

  return {
    showTravel,
    handleNavigate,
    location
  };
}
