export interface EventType {
  id: number;
  name: string;
  venueName: string;
  city: string;
  price: number;
  distanceFromVenue: number;
  date: string;
  dayOfWeek: string;
  url: string;
}

export interface EventRootObject {
  id: number;
  name: string;
  events: EventType[] | [];
  children: any[];
}
