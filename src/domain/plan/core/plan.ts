import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Price } from "domain/pricing";

export interface Plan {
  planName(): string;
  isAvailable(customer: Customer): boolean;
  price(cinemaDate: CinemaDate): Price;
}
