export class WorkingHours {
    dayOfWeek: string; // "Monday", "Tuesday", etc.
    openingTime: string; // In TypeScript, LocalTime can be represented as string
    closingTime: string; // In TypeScript, LocalTime can be represented as string
    closed: boolean; // indicates if the restaurant is closed on this day
    holidays: string[]; // List<String> is represented as string[]

    constructor(dayOfWeek: string, openingTime: string, closingTime: string, closed: boolean, holidays: string[]) {
        this.dayOfWeek = dayOfWeek;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.closed = closed;
        this.holidays = holidays;
    }
}
