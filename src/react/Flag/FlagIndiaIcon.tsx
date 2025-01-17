import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagIndiaIcon = (
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
    <path fill='#1A9F0B' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3Z' />
    <path fill='#fff' d='M24 5H0v6h24V5Z' />
    <path fill='#FFA44A' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path fill='#181A93' d='M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z' />
    <path
      fill='#181A93'
      fillRule='evenodd'
      d='M12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagIndiaIcon);
export default ForwardRef;
