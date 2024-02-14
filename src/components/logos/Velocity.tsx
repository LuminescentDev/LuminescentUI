import { component$ } from '@builder.io/qwik';
import type { IconProps } from './types';

export const LogoVelocity = component$<IconProps>((props) => {
  return (
    <svg viewBox="0 0 500 500" fill="currentColor"
      {...props} height={props.width} >
      <path d="M236.25 232.55l-54.08-73.79a11.86 11.86 0 00-11.91-4.62L84 171.57a11.88 11.88 0 00-8 5.88l-42.64 77.07a11.84 11.84 0 00.81 12.75l54.21 74a11.86 11.86 0 0011.91 4.62l86-17.37a11.85 11.85 0 008-5.89l42.78-77.3a11.86 11.86 0 00-.82-12.78zm-59.45 74.21a9.57 9.57 0 01-13.39-2.06l-31-42.24a16 16 0 00-16-6.21l-52.58 10.63a9.58 9.58 0 01-11.29-7.49A9.58 9.58 0 0160 248.1l57-11.52a16 16 0 0010.81-7.92L156.42 177a9.58 9.58 0 0113-3.75 9.58 9.58 0 013.75 13L146.81 234a16 16 0 001.09 17.16l31 42.23a9.58 9.58 0 01-2.1 13.37z"></path>
      <circle cx="416.44" cy="236.11" r="9.83"></circle>
      <path d="M458.29 265.6H280.52a9.83 9.83 0 110-19.66h106.22a9.84 9.84 0 000-19.67h-70.2a9.83 9.83 0 110-19.66H422.9a9.84 9.84 0 000-19.67H202.83l33.42 45.61a11.86 11.86 0 01.81 12.75l-42.78 77.3a11.75 11.75 0 01-1.4 2h212.29a9.83 9.83 0 100-19.66h-53.53a9.84 9.84 0 110-19.67h106.65a9.84 9.84 0 100-19.67z"></path>
    </svg>
  );
});