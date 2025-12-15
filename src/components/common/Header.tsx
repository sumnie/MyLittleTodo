import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;
export function Header({ children }: Props) {
  return (
    <div className="flex items-center justify-between mb-5">{children}</div>
  );
}
