import { useEffect, useState } from 'react';
import { Theme } from './Theme';
export function HeroSection() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 60 * 1000);
    return () => clearInterval(interval); // 컴포넌트 사라질때 쓰일 정리용 콜백으로 등록. effect가 바뀌거나 unmount될 때 실행됨
  }, []);

  function getTime() {
    const time = new Date();
    return time.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  return (
    <div>
      <Theme></Theme>
      <p className="text-center mb-9 text-4xl md:text-[3em]">{time}</p>
    </div>
  );
}
