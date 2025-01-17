import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagSwitzerlandIcon = (
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
    <path
      fill='#F44336'
      fillRule='evenodd'
      d='M2 0h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm11.655 6.319h2.897c.228 0 .414.188.414.42V9.26c0 .232-.186.42-.414.42h-2.897v2.943c0 .232-.185.42-.414.42H10.76a.417.417 0 0 1-.414-.42V9.682H7.448a.417.417 0 0 1-.414-.42V6.738c0-.232.186-.42.414-.42h2.897V3.376c0-.232.185-.42.413-.42h2.483c.229 0 .414.188.414.42V6.32Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M16.552 6.319h-2.897V3.376a.417.417 0 0 0-.414-.42H10.76a.417.417 0 0 0-.414.42V6.32H7.448a.417.417 0 0 0-.414.42V9.26c0 .232.186.42.414.42h2.897v2.943c0 .232.185.42.413.42h2.483a.417.417 0 0 0 .414-.42V9.681h2.897a.417.417 0 0 0 .414-.42V6.739a.417.417 0 0 0-.414-.42Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSwitzerlandIcon);
export default ForwardRef;
