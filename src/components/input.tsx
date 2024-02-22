import { component$, useSignal } from "@builder.io/qwik";

export const Input = component$(() => {
  const inputSig = useSignal<string>("");

  return (
    <>
      <input bind:value={inputSig} />
      <p>{inputSig.value}</p>
    </>
  );
});
