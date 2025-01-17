import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagAzerbaijanIcon = (
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
    <path fill='#00AF62' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3Z' />
    <path fill='#E3002E' d='M24 5H0v6h24V5Z' />
    <path fill='#fff' fillRule='evenodd' d='M13.5 7.5h1v1h-1v-1Z' clipRule='evenodd' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M14 9.5a2.5 2.5 0 1 1 0-3h-1.5a1.5 1.5 0 0 0 0 3H14Z'
      clipRule='evenodd'
    />
    <path fill='#0097C5' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagAzerbaijanIcon);
export default ForwardRef;
