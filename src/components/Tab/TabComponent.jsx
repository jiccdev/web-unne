import React from 'react';
import { Tab } from '@headlessui/react';

const TabComponent = ({ renderTabs, renderTabPanel }) => {
  return (
    <Tab.Group>
      <Tab.List>{renderTabs}</Tab.List>
      <Tab.Panels>{renderTabPanel}</Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
