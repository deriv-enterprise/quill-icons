import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagSloveniaIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path fill='#E53B35' d='M2 16h20a2 2 0 0 0 2-2v-3H0v3a2 2 0 0 0 2 2Z' />
    <path fill='#fff' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2Z' />
    <path fill='#0268AE' d='M24 11V5H0v6h24Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path
      fill='#EF1F28'
      d='M5.5 3H6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z'
    />
    <path fill='#FFE200' fillRule='evenodd' d='M4.5 4h1v1h-1V4Z' clipRule='evenodd' />
    <path fill='#fff' fillRule='evenodd' d='M3.5 6 5 5.5l1.5.5-1 1h-1l-1-1Z' clipRule='evenodd' />
    <path
      fill='#0268AE'
      fillRule='evenodd'
      d='M5.5 3h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1l-1-1L5 5.5l1.5.5-1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 1h1v1h-1V4Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSloveniaIcon);
export default ForwardRef;
