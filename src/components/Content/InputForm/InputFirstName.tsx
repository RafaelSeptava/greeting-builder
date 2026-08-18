// InputFirstName.tsx

import { firstName, setFirstName } from "../../../stores/greetingStore";
import { lastNameReference } from "../../../utils/formNavigation";

export function InputFirstName() {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      lastNameReference?.focus();
    }
  };

  return (
    <div>
      <label
        for="first-name"
        class="text-cyan-300 font-semibold mb-1 block text-sm"
      >
        First Name:{" "}
      </label>
      <input
        type="text"
        id="first-name"
        value={firstName()}
        onInput={(e) => setFirstName(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        placeholder="Input your first name!"
        class="bg-slate-800 text-cyan-100 placeholder-slate-500 border border-fuchsia-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-lg focus:outline-none transition-all duration-200 px-3 py-2 w-full"
        required
      />
    </div>
  );
}
