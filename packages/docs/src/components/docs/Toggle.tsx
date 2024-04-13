import { component$, useStore } from '@builder.io/qwik';
import { Card, Dropdown, Header, TextAreaRaw, Toggle, toggleOnColorClasses, toggleOffColorClasses } from '@luminescent/ui';

interface toggleOptions {
  center?: boolean;
  onColor?: keyof typeof toggleOnColorClasses;
  offColor?: keyof typeof toggleOffColorClasses;
}

export default component$(() => {
  const store = useStore<toggleOptions>({});
  return (
    <Card>
      <Header>
        Toggle
      </Header>
      <Dropdown id="toggle-oncolor"
        onChange$={(e, element) => store.onColor = element.value as keyof typeof toggleOnColorClasses}
        values={Object.keys(toggleOnColorClasses).map((color) => ({ name: color, value: color }))}
        value="blue"
      >
        onColor
      </Dropdown>
      <Dropdown id="toggle-offcolor"
        onChange$={(e, element) => store.offColor = element.value as keyof typeof toggleOffColorClasses}
        values={Object.keys(toggleOffColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        offColor
      </Dropdown>
      <Toggle id="toggle-center" onChange$={(e, element) => store.center = element.checked}
        label='center'/>
      <div>
        <Toggle id="toggle" label="Toggle" onColor={store.onColor} offColor={store.offColor} center={store.center} />
      </div>
      <TextAreaRaw output value={`<Toggle id="toggle" label="Toggle"${store.center ? ' center' : ''} />`} />
    </Card>
  );
});
