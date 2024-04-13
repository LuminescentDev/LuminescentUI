import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, NumberInput, TextAreaRaw, Toggle, InputColorClasses, Dropdown } from '@luminescent/ui';

interface numberInputOptions {
  color?: keyof typeof InputColorClasses;
  input?: boolean;
}

export default component$(() => {
  const store = useStore<numberInputOptions>({});
  return (
    <Card>
      <Header>
        NumberInput
      </Header>
      <Dropdown id="numberinput-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof InputColorClasses}
        values={Object.keys(InputColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Toggle id="numberinput-input" onChange$={(e, element) => store.input = element.checked}
        label='input' />
      <div>
        <NumberInput id="number-input" color={store.color} onDecrement$={() => {}} onIncrement$={() => {}} input={store.input}>
          Number Input
        </NumberInput>
      </div>
      <TextAreaRaw output value={`
<NumberInput id="number-input"${store.color ? ` color="${store.color}"` : ''}${store.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
    </Card>
  );
});