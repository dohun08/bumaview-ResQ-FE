import {useEffect, useState} from 'react';
import VideoBackground from '@/components/layout/video-background';
import {getProgress} from "@/api/starPlace.js";

export default function StarPlace() {
  const [videoNumber, setVideoNumber] = useState(0);
  const startTime = (videoNumber - 1) * 4;
  const getCurrentProgress = async () => {
    const res = await getProgress();
    if(res){
      setVideoNumber(res.star_count);
    }
  }
  useEffect(() => {
    getCurrentProgress();
  }, []);
  return (
    <VideoBackground startTime={startTime} duration={4}>
    </VideoBackground>
  );
}