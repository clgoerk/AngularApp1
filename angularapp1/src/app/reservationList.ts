import { ReservationItem } from "./reservationItem";

export class ReservationList {
  constructor(public user: string, private todoItems: ReservationItem[] = []) {
    // no statements required
  }
  get items(): readonly ReservationItem[] {
    return this.todoItems
  }

  addItem(task: string) {
    this.todoItems.push(new ReservationItem(task));
  }
}