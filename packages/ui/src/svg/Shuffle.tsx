import { component$ } from '@builder.io/qwik';
import type { IconProps } from '../components/logos/IconProps';

export const Shuffle = component$<IconProps>((props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      {...props} height={props.width} >
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/>
      <path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    </svg>
  );
});