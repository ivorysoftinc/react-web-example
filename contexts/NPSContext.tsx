import React, { createContext, useContext, useState } from 'react';

import { NPSModal } from 'components/NPSModal';
import { EventTriggers } from './types';

type TriggerNPSType = {
  type: 'standard' | 'type_1';
};

type TriggersNPSType = {
  [key in EventTriggers]?: TriggerNPSType;
};

const TriggersNPS: TriggersNPSType = {
  sign_in: { type: 'standard' },
  create_campaign_button_clicked: { type: 'standard' },
  add_activity_button_clicked: { type: 'standard' },
};

interface INPSContext {
  isVisible: boolean;
  togglePopup?: (isVisible: boolean) => void;
  triggerNPS?: (trigger: EventTriggers) => void;
}

const NPSDefaultState: INPSContext = {
  isVisible: false,
};

const NPSContext = createContext<INPSContext>(NPSDefaultState);

const NPSContextProvider = (props: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalType = props.user.npsModal;

  const togglePopup = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };
  const triggerNPS = (trigger: EventTriggers) => {
    const type: TriggerNPSType = TriggersNPS[trigger];
    if (TriggersNPS[trigger]) {
      setIsVisible(true);
      console.log(type);
    }
  };

  return (
    <NPSContext.Provider value={{ isVisible, togglePopup, triggerNPS }}>
      {props.children}
      {isVisible && <NPSModal type={modalType} />}
    </NPSContext.Provider>
  );
};

const useNPSContext = () => useContext(NPSContext);

export { NPSContextProvider, useNPSContext };
