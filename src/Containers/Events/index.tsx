import EventExplorer from '../../Components/EventExplorer.tsx';

import React, { useState, useEffect } from 'react';
import { EventRootObject } from '../../Store/EventsRepo';

export default function Events() {
  const [eventsList, setEventList] = useState<EventRootObject>();

  useEffect(() => {
    fetch('https://testapi.io/api/minafaw/events')
      .then((data) => data.json())
      .then((data) => {
        setEventList(data);
      });
  }, []);
  return <EventExplorer eventItem={eventsList} />;
}
