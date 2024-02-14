import { component$ } from '@builder.io/qwik';
import type { IconProps } from './types';

export const LogoForge = component$<IconProps>((props) => {
  return (
    <svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24"
      {...props} height={props.width} >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path>
    </svg>
  );
});