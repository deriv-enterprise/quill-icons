import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCameraBoldIcon = (
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
        d='M6.219 5H9.78c.375 0 .719.115 1.031.344.292.208.5.49.626.843l.28.813H14c.563.02 1.031.219 1.406.594S15.98 8.437 16 9v8c-.02.563-.219 1.031-.594 1.406S14.562 18.98 14 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V9c.02-.563.219-1.031.594-1.406S1.438 7.02 2 7h2.281l.282-.813.718.25-.718-.25c.125-.354.333-.635.625-.843C5.5 5.114 5.843 5 6.218 5ZM6 6.688 5.562 8c-.145.313-.385.48-.718.5H2c-.313.02-.48.188-.5.5v8c.02.313.188.48.5.5h12c.313-.02.48-.188.5-.5V9c-.02-.313-.188-.48-.5-.5h-2.844c-.333-.02-.562-.188-.687-.5l-.438-1.313c-.062-.125-.146-.187-.25-.187H6.22c-.104 0-.177.063-.219.188ZM8 16.5a3.443 3.443 0 0 1-1.75-.469 3.436 3.436 0 0 1-1.281-1.281A3.444 3.444 0 0 1 4.5 13c0-.625.156-1.208.469-1.75.312-.542.74-.969 1.281-1.281A3.443 3.443 0 0 1 8 9.5c.625 0 1.208.156 1.75.469.542.312.969.74 1.281 1.281.313.542.469 1.125.469 1.75s-.156 1.208-.469 1.75c-.312.542-.74.969-1.281 1.281A3.443 3.443 0 0 1 8 16.5ZM6 13c.02.75.354 1.323 1 1.719.667.375 1.333.375 2 0 .646-.396.98-.969 1-1.719-.02-.75-.354-1.323-1-1.719-.667-.375-1.333-.375-2 0-.646.396-.98.969-1 1.719Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraBoldIcon);
export default ForwardRef;
