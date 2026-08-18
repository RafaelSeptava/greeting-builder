// InputLastName.tsx

import { lastName, setLastName } from "../../../stores/greetingStore";
import {
  setLastNameReference,
  timeSelectReference,
} from "../../../utils/formNavigation";

export function InputLastName() {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      timeSelectReference?.focus();
    }
  };

  return (
    <div>
      <label
        for="last-name"
        class="text-cyan-300 font-semibold mb-1 block text-sm"
      >
        Last Name:{" "}
      </label>
      <input
        ref={setLastNameReference}
        type="text"
        id="last-name"
        value={lastName()}
        onInput={(e) => setLastName(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        placeholder="Input your last name!"
        class="bg-slate-800 text-cyan-100 placeholder-slate-500 border border-fuchsia-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-lg focus:outline-none transition-all duration-200 px-3 py-2 w-full"
        required
      />
    </div>
  );
}
