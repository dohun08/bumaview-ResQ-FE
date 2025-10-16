import * as S from "./style.jsx";
import ProgressBar from "@/components/ui/progressBar/index.jsx";
import {useEffect, useRef, useState} from "react";
import useTimerStore from "../../../store/useTimerStore.js";

export default function InterviewLayout({children, step}) {
  const videoRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const [isDone, setIsDone] = useState(false)
  const { time, isRunning, decreaseTime } = useTimerStore();
  const audioRef = useRef(null)
  const [isShake, setIsShake] = useState(false);

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

  // 타이머 제어 로직
  useEffect(() => {
    // 타이머가 실행 중이고 시간이 남아있을 때만 작동
    if(time === 0){
      setIsDone(true)
    }
    if (isRunning && time > 0) {
      timerIntervalRef.current = setInterval(() => {
        decreaseTime(0.1);
      }, 100);
    } else {
      // 타이머가 멈췄거나 시간이 0이 되면 인터벌 클리어
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }

    // Cleanup
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [isRunning, time, decreaseTime]);

  useEffect(() => {
      if (79.9 <= time && time < 80) {
        audioRef.current.play();
        setIsShake(true)
        setTimeout(()=>{
          setIsShake(false)
        }, 1000)
      }
  }, [time]);
  return(
    <S.ReadQuestionContainer>
      {/*타이머*/}
      <S.Timer>
        <h2>시간안에 병준쌤을 구출해주세요!</h2>
        <ProgressBar />
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
          {step !== 4 && <S.ChoiAnimation $isAnimating={isRunning}>
            <S.Choi>
              <S.Rope src="/rope.svg" />
              <S.Man src={
                isShake
                  ? (Math.floor(Date.now() / 150) % 4 < 2 ? "/man2.svg" : "/man.svg")
                  : (isDone ? "/dieMan.svg" : "/man.svg")
              }/>
            </S.Choi>
          </S.ChoiAnimation>}
        </S.RopeAndManContainer>
      </S.Content>
      <audio ref={audioRef} src="/sound/daskete.m4a" preload="auto" style={{ display: "none" }} />
    </S.ReadQuestionContainer>
  )
}