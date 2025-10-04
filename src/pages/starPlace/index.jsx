import { useState } from 'react';
import VideoBackground from '@/components/layout/video-background';

export default function StarPlace() {
  const [videoNumber, setVideoNumber] = useState(1);
  const startTime = (videoNumber - 1) * 4;
  
  return (
    <VideoBackground startTime={startTime} duration={4}>
    </VideoBackground>
  );
}