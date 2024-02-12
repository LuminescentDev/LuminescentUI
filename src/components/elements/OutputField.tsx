import { component$, Slot, useStore } from '@builder.io/qwik';

export const OutputField = component$(({ extraClass, ...props }: any) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <OutputFieldRaw {...props} extraClass={{
        'mb-3': true,
        ...extraClass,
      }} />
    </div>
  );
});

export const OutputFieldRaw = component$(({ id, value, charlimit, extraClass }: any) => {
  const store: any = useStore({
    alerts: [],
  }, { deep: true });
  return <>
    <textarea class={{
      'transition ease-in-out cursor-pointer text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 break-words': true,
      ...extraClass,
    }} id={id} value={value} onClick$={(event: any) => {
      navigator.clipboard.writeText(event.target!.value);
      const alert = {
        class: 'text-green-500',
        text: 'Copied to clipboard!',
      };
      if (event.target!.value.length > charlimit && charlimit > 0) {
        const alert2 = {
          class: 'text-red-500',
          text: `This text is over ${charlimit} characters and may not fit in the chat box!`,
        };
        store.alerts.push(alert2);
        setTimeout(() => {
          store.alerts.splice(store.alerts.indexOf(alert2), 1);
        }, 5000);
      }
      store.alerts.push(alert);
      setTimeout(() => {
        store.alerts.splice(store.alerts.indexOf(alert), 1);
      }, 1000);
    }}/>
    {store.alerts.map((alert: any, i: number) => (
      <p key={`output-alert${i}`} class={alert.class} dangerouslySetInnerHTML={alert.text} />
    ))}
  </>;
});