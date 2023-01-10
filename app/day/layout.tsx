import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function DaysLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <div className="pr-8">
        <ul>
          <li>
            <Link className="link" href="/day/today">
              Today
            </Link>
          </li>
          <li>
            <Link className="link" href="/day/yesterday">
              Yesterday
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
