import React, { useState } from 'react';
import { EventRootObject } from '../../Store/EventsRepo';
import Card from '../Card';

const EventExplorer: React.FC<{ eventItem: EventRootObject | undefined }> = ({
  eventItem,
}) => {
  const [isFilesVisible, setIsFileVisible] = useState(false);
  console.log(eventItem);
  if (!eventItem) return null;
  if (eventItem?.children.length > 0) {
    return (
      <div>
        <p
          onClick={() => setIsFileVisible(!isFilesVisible)}
          style={{ cursor: 'pointer' }}
        >
          {eventItem?.name}
          <img
            alt='dfdf'
            style={{ width: 15, paddingLeft: 15, marginBottom: -2 }}
            src='https://www.vectorico.com/download/office/folder-icon.png'
          />
        </p>
        {eventItem?.children?.map((item, index) => {
          return (
            <div
              style={{
                display: isFilesVisible ? 'block' : 'none',
                paddingLeft: 15,
              }}
              key={item.id}
            >
              <EventExplorer eventItem={item} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <p>
        {eventItem?.events?.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </p>
    );
  }
};

export default EventExplorer;
