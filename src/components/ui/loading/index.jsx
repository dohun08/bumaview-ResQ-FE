import React from "react";
import {useNavigationTransitionStore} from "@/store/useNavigationTransition.js";
import {useLoadingStore} from "@/store/useLoading.js";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

export default function SpaceTravel() {
  const {showTravel} = useNavigationTransitionStore()
  const {isLoading} = useLoadingStore()
  if (showTravel || isLoading) {
    return (
      <div style={overlayStyle}>
        <img src="/SpaceTravel.gif" alt="Space Travel" style={{width: 200, height: 200}}/>
      </div>
    );
  }
  return null;
}

