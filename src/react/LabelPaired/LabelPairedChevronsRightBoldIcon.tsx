import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsRightBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.531 11.469c.292.354.292.708 0 1.062l-6 6c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062L12.937 12 7.47 6.531c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0l6 6Zm-12-6 6 6c.292.354.292.708 0 1.062l-6 6c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062L6.937 12 1.47 6.531c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightBoldIcon);
export default ForwardRef;
