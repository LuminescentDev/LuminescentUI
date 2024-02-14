
import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { LoadingIcon } from './LoadingIcon';
import { Link } from '@builder.io/qwik-city';

interface CardProps extends Omit<PropsOf<'div'>, 'class'> {
  color?: 'purple' | 'orange' | 'pink' | 'red' | 'blue' | 'yellow' | 'green' | 'gray';
  darker?: boolean;
  href?: string;
  row?: boolean;
  class?: { [key: string]: boolean };
}

interface CardHeaderProps {
  id?: string;
  loading?: boolean;
}

export const Card = component$<CardProps>(({ color, darker, href, row, ...props }) => {
  const blob = Math.round(Math.random() * 6);

  const button = !!props.onClick$ || href;

  return (
    <div {...props} class={{
      'flex-1 relative border rounded-lg group transition-all': true,
      'border-purple-400/10': color === 'purple',
      'border-orange-400/10': color === 'orange',
      'border-pink-400/10': color === 'pink',
      'border-red-400/10': color === 'red',
      'border-blue-400/10': color === 'blue',
      'border-yellow-400/10': color === 'yellow',
      'border-green-400/10': color === 'green',
      'border-gray-400/10': color === 'gray',
      'hover:bg-purple-400/10': color === 'purple' && button,
      'hover:bg-orange-400/10': color === 'orange' && button,
      'hover:bg-pink-400/10': color === 'pink' && button,
      'hover:bg-red-400/10': color === 'red' && button,
      'hover:bg-blue-400/10': color === 'blue' && button,
      'hover:bg-yellow-400/10': color === 'yellow' && button,
      'hover:bg-green-400/10': color === 'green' && button,
      'hover:bg-gray-400/10': (color === 'gray' || !color) && button,
      'hover:shadow-lg cursor-pointer': button,
      'bg-gray-800 border-gray-700': !color && !darker,
      'bg-gray-800/50': color,
      'bg-gray-900 border-gray-700': !!darker,
      ...props.class,
    }}>
      <div class={{
        'p-8': true,
      }}>
        {href && (
          <Link href={href} class="absolute inset-0 z-20" />
        )}
        <div class="relative z-10">
          <div class={{
            'flex gap-4': true,
            'flex-col': !row,
            'flex-row items-center': row,
          }}>
            <Slot />
          </div>
        </div>
        {color && (
          <div class="absolute -z-10 inset-0 w-full h-full transition-all overflow-clip" style={{ containerType: 'size' }}>
            <div class={{
              'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out blur-xl': true,
              'animate-blob': blob === 0,
              'animate-blob1': blob === 1,
              'animate-blob2': blob === 2,
              'animate-blob3': blob === 3,
              'animate-blob4': blob === 4,
              'animate-blob5': blob === 5,
              'animate-blob6': blob === 6,
              'bg-purple-400': color === 'purple',
              'bg-orange-400': color === 'orange',
              'bg-pink-400': color === 'pink',
              'bg-red-400': color === 'red',
              'bg-blue-400': color === 'blue',
              'bg-yellow-400': color === 'yellow',
              'bg-green-400': color === 'green',
              'bg-gray-400': color === 'gray',
            }} />
            <div class={{
              'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out blur-xl': true,
              '-animation-delay-5': true,
              'animate-blob': blob === 0,
              'animate-blob1': blob === 1,
              'animate-blob2': blob === 2,
              'animate-blob3': blob === 3,
              'animate-blob4': blob === 4,
              'animate-blob5': blob === 5,
              'animate-blob6': blob === 6,
              'bg-purple-500': color === 'purple',
              'bg-orange-500': color === 'orange',
              'bg-pink-500': color === 'pink',
              'bg-red-500': color === 'red',
              'bg-blue-500': color === 'blue',
              'bg-yellow-500': color === 'yellow',
              'bg-green-500': color === 'green',
              'bg-gray-500': color === 'gray',
            }} />
            <div class={{
              'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out blur-xl': true,
              '-animation-delay-10': true,
              'animate-blob': blob === 0,
              'animate-blob1': blob === 1,
              'animate-blob2': blob === 2,
              'animate-blob3': blob === 3,
              'animate-blob4': blob === 4,
              'animate-blob5': blob === 5,
              'animate-blob6': blob === 6,
              'bg-purple-600': color === 'purple',
              'bg-orange-600': color === 'orange',
              'bg-pink-600': color === 'pink',
              'bg-red-600': color === 'red',
              'bg-blue-600': color === 'blue',
              'bg-yellow-600': color === 'yellow',
              'bg-green-600': color === 'green',
              'bg-gray-600': color === 'gray',
            }} />
          </div>
        )}
      </div>
    </div>
  );
});

export const CardHeader = component$<CardHeaderProps>(({ id, loading = false }) => {
  return (
    <h1 class="flex font-bold text-gray-100 text-2xl">
      { id && <span id={id} class="block h-32 -mt-32" /> }
      <div class="flex flex-1">
        <div class="flex flex-col">
          <div class="flex items-center gap-3">
            <Slot />
          </div>
          <Slot name="subheader" />
        </div>
      </div>
      { loading &&
        <div class={{
          'transition-all': true,
          'opacity-0': !loading,
          'opacity-100': loading,
        }}>
          <LoadingIcon width={20} class={{ 'text-white': true }} />
        </div>
      }
    </h1>
  );
});