import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePasteBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M10.102 8.375c.078-.547.312-.99.703-1.328.39-.365.872-.547 1.445-.547.573 0 1.055.182 1.445.547.39.338.625.781.703 1.328H16c.599 0 1.12.182 1.563.547.416.338.703.781.859 1.328H16c-1.146.026-2.083.443-2.813 1.25h-2.812c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898H8.5c-.39.026-.599.234-.625.625V21.5c.026.39.234.599.625.625h3.75V24H8.5c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V10.875c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h1.602Zm1.523.313c.026.39.234.598.625.624.39-.026.599-.234.625-.624-.026-.391-.234-.6-.625-.626-.39.027-.599.235-.625.626ZM23.5 24.624c.39-.026.599-.234.625-.625v-7.969l-2.656-2.656H16c-.39.026-.599.234-.625.625v10c.026.39.234.599.625.625h7.5ZM16 26.5c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V14c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h5.469c.52 0 .963.182 1.328.547l2.656 2.656c.365.365.547.807.547 1.328V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H16Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePasteBoldIcon);
export default ForwardRef;
