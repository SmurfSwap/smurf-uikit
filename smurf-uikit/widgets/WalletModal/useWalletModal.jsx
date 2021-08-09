import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
const useWalletModal = (login, logout, account) => {
    const [onPresentConnectModal] = useModal(<ConnectModal login={login}/>);
    const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout}/>);
    return { onPresentConnectModal, onPresentAccountModal };
};
export default useWalletModal;
