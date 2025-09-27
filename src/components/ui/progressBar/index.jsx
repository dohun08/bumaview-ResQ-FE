import { useEffect, useRef } from "react";
import * as S from "./style";

export default function ProgressBar({progress, setProgress}) {
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef();
  const duration = 100000; // 100 seconds in milliseconds

  useEffect(() => {
    startTimeRef.current = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      
      setProgress(remaining);
      
      if (remaining > 0) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        setProgress(0);
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(updateProgress);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <S.ProgressBarContainer>
      <S.ProgressBarFill style={{ width: `${Math.max(progress, 0)}%` }} />
    </S.ProgressBarContainer>
  );
}