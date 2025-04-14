// utils/generateTimeSlots.ts
export const generateTimeSlots = (
    startHour = 8,
    endHour = 20,
    interval = 60
  ): string[] => {
    const slots: string[] = [];
  
    for (let hour = startHour; hour < endHour; hour++) {
      const date = new Date();
      date.setHours(hour);
      date.setMinutes(0);
      slots.push(
        date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }
  
    return slots;
  };
  