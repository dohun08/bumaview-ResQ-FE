import * as S from "./style.jsx";
import ProgressBar from "@/components/ui/progressBar/index.jsx";
import {useState, useEffect, useRef} from "react";

export default function InterviewLayout({children}) {
  const [time, setTime] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the animation after a small delay to ensure the component is mounted
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Start webcam
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    startWebcam();

    // Cleanup function
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0.1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 0.1;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [time]);

  return(
    <S.ReadQuestionContainer>
      {/*타이머*/}
      <S.Timer>
        <h2>시간안에 병준쌤을 구출해주세요!</h2>
        <ProgressBar progress={time} setProgress={setTime} />
        <p>{Math.floor(time)}s</p>
      </S.Timer>
      {/*박스*/}
      <S.Content>
        {/*  얼굴*/}
        <S.WebcamContainer>
          <S.SpaceShoot src={'/spaceShoot.svg'} />
          <S.Video ref={videoRef} autoPlay playsInline muted />
        </S.WebcamContainer>
        {/*  화면*/}
        {children}
        {/*  로프와 남자 */}
        <S.RopeAndManContainer>
          <S.ChoiAnimation $isAnimating={isAnimating}>
            <S.Choi>
              <S.Rope src="/rope.svg" />
              <S.Man src="/man.svg" />
            </S.Choi>
          </S.ChoiAnimation>
        </S.RopeAndManContainer>
      </S.Content>
    </S.ReadQuestionContainer>
  )
}