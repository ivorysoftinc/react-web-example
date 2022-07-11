import { useEffect, useState } from 'react';
import useWindowWidth from './useWindowWidth';

export enum DeviceType {
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop',
  largeDesktop = 'largeDesktop',
}

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.largeDesktop);
  const resizeCount = useWindowWidth();

  useEffect(() => {
    const mediaMobile = window.matchMedia(`(max-width: 767px)`);
    const mediaTablet = window.matchMedia(`(max-width: 1199px)`);
    const mediaDesktop = window.matchMedia(`(max-width: 1599px)`);

    switch (true) {
      case mediaMobile.matches:
        setDeviceType(DeviceType.mobile);
        break;
      case mediaTablet.matches:
        setDeviceType(DeviceType.tablet);
        break;
      case mediaDesktop.matches:
        setDeviceType(DeviceType.desktop);
        break;
      default:
        setDeviceType(DeviceType.largeDesktop);
        break;
    }
  }, [resizeCount]);

  return deviceType;
};
