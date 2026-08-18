// greetingStore.ts

import { createSignal } from "solid-js";

export const [firstName, setFirstName] = createSignal("");
export const [lastName, setLastName] = createSignal("");
export const [selectedTime, setSelectedTime] = createSignal("");

export const [greetingMessage, setGreetingMessage] = createSignal("");
export const [isError, setIsError] = createSignal(false);

export function handleGreeting(e?: Event) {
    if (e) e.preventDefault();

    const first = firstName().trim();
    const last = lastName().trim();
    const time = selectedTime().trim();

    if (!first || !last || !time) {
        setGreetingMessage("Please fill in all fields!");
        setIsError(true);
        return;
    }

    setGreetingMessage(`Good ${time}, ${first} ${last}!`);
    setIsError(false);
}