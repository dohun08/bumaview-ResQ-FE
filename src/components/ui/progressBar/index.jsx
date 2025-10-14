import * as S from "./style";
import useTimerStore from "../../../store/useTimerStore.js";

export default function ProgressBar() {
  // Zustand store에서 time 가져오기
  const { time } = useTimerStore();

  // time은 0~100 사이의 값이므로 그대로 사용
  const progress = Math.max(0, Math.min(100, time));

  return (
    <S.ProgressBarContainer>
      <S.ProgressBarFill style={{ width: `${progress}%` }} />
    </S.ProgressBarContainer>
  );
}