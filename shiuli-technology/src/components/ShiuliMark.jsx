import { useId } from 'react';

const PETAL = 'M0 0C6-2 9.5-12 2.5-19C-2-17.5-6-11 0 0Z';
const ANGLES = [0, 72, 144, 216, 288];

export default function ShiuliMark({ className }) {
  const id = 'pf' + useId().replace(/:/g, '');
  return (
    <svg className={className} viewBox="-20 -20 40 40" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#efeadc" />
        </linearGradient>
      </defs>
      <g fill={`url(#${id})`}>
        {ANGLES.map(a => (
          <path key={a} d={PETAL} transform={`rotate(${a})`} />
        ))}
      </g>
      <circle r="3" fill="#ff7a1f" />
    </svg>
  );
}
