import React from 'react';
import { Tab } from '@headlessui/react';

const TabComponent = ({ renderTabs, renderTabPanel }) => {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-3 g-0 w-full xl:w-5/6 mx-auto">
        {renderTabs}
      </Tab.List>
      <div className="bg-gray-100 h-full rounded-b-[50px] p-4 xl:p-10 w-full xl:w-5/6 mx-auto">
        <Tab.Panels>{renderTabPanel}</Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default TabComponent;
