import { component$ } from '@builder.io/qwik';
import type { IconProps } from './types';

export const LogoWaterfall = component$<IconProps>((props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      {...props} height={props.width} >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  );
});