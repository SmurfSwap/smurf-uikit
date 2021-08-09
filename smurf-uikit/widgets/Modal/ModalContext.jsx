import React, { createContext, useState } from "react";
import styled from "styled-components";
import Overlay from "../../components/Overlay/Overlay";
const ModalWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`;
export const Context = createContext({
    onPresent: () => null,
    onDismiss: () => null,
    setCloseOnOverlayClick: () => true,
});
const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalNode, setModalNode] = useState();
    const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
    const handlePresent = (node) => {
        setModalNode(node);
        setIsOpen(true);
    };
    const handleDismiss = () => {
        setModalNode(undefined);
        setIsOpen(false);
    };
    const handleOverlayDismiss = () => {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (<Context.Provider value={{
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick,
        }}>
      {isOpen && (<ModalWrapper>
          <Overlay show onClick={handleOverlayDismiss}/>
          {React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                })}
        </ModalWrapper>)}
      {children}
    </Context.Provider>);
};
export default ModalProvider;
