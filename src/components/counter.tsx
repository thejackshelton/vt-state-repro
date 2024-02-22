import { $, component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal<number>(0);

  const handleClick$ = $(() => {
    count.value++;
  });

  return <button onClick$={handleClick$}>{count.value}</button>;
});
