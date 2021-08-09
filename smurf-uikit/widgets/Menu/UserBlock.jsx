import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
const UserBlock = ({ account, login, logout }) => {
    const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
    const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
    return (<div>
      {account ? (<Button size="sm" variant="tertiary" onClick={() => {
                onPresentAccountModal();
            }}>
          {accountEllipsis}
        </Button>) : (<Button size="sm" onClick={() => {
                onPresentConnectModal();
            }}>
          Connect
        </Button>)}
    </div>);
};
export default UserBlock;
