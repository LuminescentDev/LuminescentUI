import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import {
  Button, NavContainer,
  LogoLuminescentFull,
} from '@luminescent/ui';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <NavContainer>
        <Button q:slot="start" color="transparent" class={{
          'text-[#f0ccfb] fill-[#f0ccfb]': true,
        }}>
          <div class="font-semibold flex items-center gap-1 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 1rem #CB6CE6);">
            <LogoLuminescentFull width={100} class="mt-1" /> / ui
          </div>
        </Button>
      </NavContainer>
      <main>
        <Slot />
      </main>
    </>
  );
});
