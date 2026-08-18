// SelectTime.tsx

import {
  selectedTime,
  setSelectedTime,
  handleGreeting,
} from "../../../stores/greetingStore";
import { setTimeSelectReference } from "../../../utils/formNavigation";

export function SelectTime() {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleGreeting();
    }
  };

  return (
    <div>
      <label
        for="select-a-time"
        class="text-cyan-300 font-semibold mb-1 block text-sm"
      >
        Select a Time:{" "}
      </label>
      <select
        ref={setTimeSelectReference}
        id="select-a-time"
        value={selectedTime()}
        onChange={(e) => setSelectedTime(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        class="bg-slate-800 text-cyan-100 border border-fuchsia-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-lg focus:outline-none transition-all duration-200 px-3 py-2 w-full"
        required
      >
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
    </div>
  );
}
