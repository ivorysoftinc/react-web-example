import React from "react";
import { ScrollToTopButton } from "./style";

interface IScrollToTopBtn {
  onClick: () => void;
  btnText: string;
  isMobile: boolean;
  visible: boolean;
}

const ScrollToTopBtn = ({ btnText, isMobile, visible, onClick }: IScrollToTopBtn) => {
  if (!visible || !isMobile) {
    return null;
  }

  return <ScrollToTopButton onClick={onClick}>{btnText}</ScrollToTopButton>;
};

export default ScrollToTopBtn;
