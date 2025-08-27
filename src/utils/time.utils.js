const SLOT_START_HOUR = 9;
const SLOT_END_HOUR = 17;
const SLOT_MINUTES = 30;

export function generateSlots() {
  const slots = [];
  for (let h = SLOT_START_HOUR; h < SLOT_END_HOUR; h++) {
    for (let m = 0; m < 60; m += SLOT_MINUTES) {
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots.slice(0, 16);
}

export function isValidDate(dateString) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
}

export function isValidTime(timeString) {
  return /^\d{2}:\d{2}$/.test(timeString);
}
