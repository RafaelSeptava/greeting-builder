// OutputForm.tsx

import { greetingMessage, isError } from "../../../stores/greetingStore";

export function OutputForm() {
  return (
    <section
      id="output-form"
      class="bg-slate-800 border border-cyan-400 rounded-xl p-4 text-center min-h-15 flex items-center justify-center"
      aria-label="Greeting Result"
    >
      <output
        id="greeting-output"
        class={
          isError()
            ? "text-fuchsia-400 font-bold text-lg animate-pulse"
            : "text-cyan-300 font-bold text-lg"
        }
      >
        {greetingMessage()}
      </output>
    </section>
  );
}
