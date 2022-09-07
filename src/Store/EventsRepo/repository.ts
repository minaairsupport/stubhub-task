import axios from 'axios';
import { EventType } from './types';

export interface IEventsRepository {
  load(): Promise<EventType[]>;
}

export function EventsRepository(): IEventsRepository {
  return {
    load: async () => {
      const url = 'https://testapi.io/api/minafaw/events';
      const result = await axios.get(url);
      return result.data;
    },
  };
}
