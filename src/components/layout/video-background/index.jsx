import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from "./style.jsx";
import Header from "@/components/ui/header/index.jsx";
import SpaceTravel from "@/components/ui/loading/index.jsx";

export default function VideoBackground({ children, startTime = 0, duration = 4 }) {
  const videoRef = useRef(null);
  const location = useLocation();
  const [isFastForwarding, setIsFastForwarding] = useState(false);
  const timerRef = useRef(null);

  const handleFastForward = () => {
    if (videoRef.current) {
      // 기존 타이머 제거
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      setIsFastForwarding(true);
      videoRef.current.playbackRate = 10.0;
      videoRef.current.play();

      const handleEnded = () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.playbackRate = 1.0;
          setIsFastForwarding(false);
          videoRef.current.removeEventListener('ended', handleEnded);
        }
      };

      videoRef.current.addEventListener('ended', handleEnded);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (startTime < 0) {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
        return;
      }

      videoRef.current.currentTime = startTime;
      videoRef.current.playbackRate = 1.0;

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video playback failed:", error);
        });
      }

      timerRef.current = setTimeout(() => {
        if (videoRef.current && !isFastForwarding) {
          videoRef.current.pause();
        }
      }, duration * 1000);

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [startTime, duration, location.pathname]);

  return (
    <S.VideoContainer>
      <Header/>
      <SpaceTravel/>
      <S.StyledVideo
        ref={videoRef}
        src="/video/mara.mp4"
        muted
        loop={false}
      />
      <S.FastForwardButton onClick={handleFastForward}>
        ▶▶
      </S.FastForwardButton>
      <S.ContentWrapper>
        {children}
      </S.ContentWrapper>
    </S.VideoContainer>
  );
}