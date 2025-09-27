import {useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {useNavigationTransitionStore} from "@/store/useNavigationTransition.js";

export default function useNavigationWithTransition() {
  const navigate = useNavigate();
  const location = useLocation();
  const {showTravel, setShowTravel} = useNavigationTransitionStore();
  
  useEffect(() => {
    if (showTravel) {
      const timer = setTimeout(() => setShowTravel(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [showTravel, setShowTravel]);

  const handleNavigate = (path, state = null) => {
    setShowTravel(true);
    setTimeout(() => {
      navigate(path, { state });
      setShowTravel(false);
    }, 1200);
  };

  return {
    showTravel,
    handleNavigate,
    location
  };
}
