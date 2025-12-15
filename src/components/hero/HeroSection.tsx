import { useEffect, useState } from 'react';
import { Header } from '../common/Header';
import { Theme } from '../common/Theme';
export function HeroSection() {
  const [time, setTime] = useState(getTime());
  const [date, setDate] = useState(getDate());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 60 * 1000);
    return () => clearInterval(interval); // 컴포넌트 사라질때 쓰일 정리용 콜백으로 등록. effect가 바뀌거나 unmount될 때 실행됨
  }, []);

  useEffect(() => {
    function scheduleNextMidnight() {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0,
        0
      );
      const timeout = nextMidnight.getTime() - now.getTime();
      const timer = setTimeout(() => {
        setDate(getDate());
        scheduleNextMidnight();
      }, timeout);
      return () => clearTimeout(timer); // 타이머 취소 함수 (cleanup function) 반환
    }

    const cleanup = scheduleNextMidnight(); // 앱 나갈때 반환값으로 저장해뒀던 타이머 취소함수 실행시킴

    return cleanup;
  }, []);
  function getTime() {
    const time = new Date();
    return time.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  function getDate() {
    const date = new Date();
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'long',
    });
  }
  return (
    <div>
      <Header>
        <p className="text-gray-500 dark:text-white">{date}</p>
        <Theme></Theme>
      </Header>
      <p className="text-center mb-9 text-4xl md:text-[3em]">{time}</p>
    </div>
  );
}
