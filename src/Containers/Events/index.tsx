import EventExplorer from '../../Components/EventExplorer';

import React, { useState, useEffect } from 'react';
import { EventRootObject, EventType } from '../../Store/EventsRepo';

export default function Events() {
  const [eventsList, setEventList] = useState<EventRootObject>();
  const [orignialEventsList, setOrignialEventsList] =
    useState<EventRootObject>();

  useEffect(() => {
    fetch('https://testapi.io/api/minafaw/events')
      .then((data) => data.json())
      .then((data) => {
        console.log('data ', data);
        setEventList(data);
        setOrignialEventsList(data);
      });
  }, []);

  const isEventTypeKey = (name: string): name is keyof EventType =>
    includes(allEventTypeKeys, name);

  const allEventTypeKeys: (keyof EventType)[] = [
    'id',
    'name',
    'venueName',
    'city',
    'price',
    'distanceFromVenue',
    'date',
    'dayOfWeek',
    'url',
  ];

  const filterBy = (
    data: EventRootObject | undefined,
    name: string,
    value: string
  ): EventRootObject | undefined => {
    if (data && isEventTypeKey(name)) {
      const filteredEvent = data.events.filter((event: EventType) =>
        (event[name] as string).match(value)
      );
      data.events = filteredEvent;

      const childs = data.children?.map((child: any) => {
        return filterBy(child, name, value);
      });
      data.children = childs;

      return data;
    }
  };

  const handleOnChange = (e: any) => {
    const result = filterBy(orignialEventsList, e.target.name, e.target.value);
    console.log('result ', result);
    setEventList(result);
  };
  return (
    <>
      <div>
        <input name='city' onChange={handleOnChange} />
      </div>
      <EventExplorer eventItem={eventsList} />
    </>
  );
}
function includes<T>(xs: readonly T[], x: T) {
  return xs.includes(x);
}
