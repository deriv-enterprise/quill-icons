import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagAngolaIcon = (
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
    <path fill='#333' d='M0 8h24v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8Z' />
    <path fill='#D0091E' d='M2 0h20a2 2 0 0 1 2 2v6H0V2a2 2 0 0 1 2-2Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path
      fill='#FAD800'
      fillRule='evenodd'
      d='M14.38 9.958a3.503 3.503 0 0 0-1.493-5.33l-.604.847a2.501 2.501 0 0 1 1.235 3.965L10.07 7.372l2.697 2.696a2.494 2.494 0 0 1-3.232-.746l-.605.847a3.49 3.49 0 0 0 2.64 1.203c.71 0 1.373-.212 1.925-.576l.575.576 1-1-.69-.414Zm-4.31-4.586h1v1h-1v-1Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagAngolaIcon);
export default ForwardRef;
