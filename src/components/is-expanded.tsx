import { $, component$, useSignal } from "@builder.io/qwik";

export const IsExpanded = component$(() => {
  const isExpanded = useSignal<boolean>(false);

  return (
    <button
      onClick$={$(() => (isExpanded.value = !isExpanded.value))}
      aria-expanded={isExpanded.value}
    >
      {isExpanded.value ? "true" : "false"}
    </button>
  );
});
