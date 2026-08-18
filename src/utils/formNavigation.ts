// formNavigation.tsx

export let lastNameReference!: HTMLInputElement;
export let timeSelectReference!: HTMLSelectElement;

export const setLastNameReference = (el: HTMLInputElement) =>
    (lastNameReference = el);
export const setTimeSelectReference = (el: HTMLSelectElement) =>
    (timeSelectReference = el);
