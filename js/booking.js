const slots = [
  { day: "Wed", date: "May 20", time: "8:00 AM", type: "Site visit" },
  { day: "Wed", date: "May 20", time: "1:00 PM", type: "Consultation" },
  { day: "Thu", date: "May 21", time: "10:30 AM", type: "Inspection correction" },
  { day: "Fri", date: "May 22", time: "7:30 AM", type: "Commercial walk" },
  { day: "Fri", date: "May 22", time: "3:00 PM", type: "EV charger planning" },
  { day: "24/7", date: "Emergency", time: "Immediate", type: "Dispatch call" }
];

const scheduleBoard = document.querySelector("#scheduleBoard");
const selectedSlot = document.querySelector("#selectedSlot");

if (scheduleBoard) {
  scheduleBoard.innerHTML = slots
    .map(
      (slot, index) => `
        <button class="slot-card" type="button" data-index="${index}">
          <strong>${slot.day} ${slot.date}</strong>
          <span>${slot.time}</span>
          <span>${slot.type}</span>
        </button>
      `
    )
    .join("");

  scheduleBoard.querySelectorAll(".slot-card").forEach((button) => {
    button.addEventListener("click", () => {
      scheduleBoard.querySelectorAll(".slot-card").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const slot = slots[Number(button.dataset.index)];
      if (selectedSlot) selectedSlot.value = `${slot.day} ${slot.date}, ${slot.time} - ${slot.type}`;
    });
  });
}
