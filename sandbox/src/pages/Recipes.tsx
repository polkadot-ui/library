import { AccountCard, IconProps } from "@packages/ui-react/lib/components";
import { Connect, ConnectContent } from "@packages/ui-react/lib/recipes";
import { Modal as AntdModal, Button as AntdButton } from "antd";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";

export const Recipes = () => {
  const address = "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73";

  // Account card options
  const iconProps: IconProps = {
    copy: false,
    position: "left",
    gridSize: 1,
    justify: "space-around",
    address,
  };

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    zIndex: "999",
    bgcolor: "background.paper",
    border: "2px solid #000",
    p: 4,
  };

  const [antDCustomModal, setAntDCustomModal] = useState<boolean>(false);
  const [muiCustomModal, setMuiCustomModal] = useState<boolean>(false);
  return (
    <div className="page">
      <h1>Recipes</h1>
      <h2>AccountCard</h2>
      <p>A "card" showing the account with the Polkicon</p>
      <div className="row">
        <div className="svg-box">
          <AccountCard
            edit
            style={{ padding: "1rem", width: "500px" }}
            icon={iconProps}
            title={{
              address,
            }}
            ellipsis={{ active: true, amount: 10, position: "center" }}
          />
        </div>
      </div>
      <h2>Connect</h2>
      <p>A "card" showing the account with the Polkicon</p>
      <div className="row">
        <div className="svg-box">
          <Connect
            type="row"
            style={style}
            title="Default Modal of Connect"
            wallets={[
              "enkrypt",
              "fearless-wallet",
              "metamask-polkadot-snap",
              "novawallet",
              "polkadot-js",
              "polkagate",
              "subwallet-js",
              "talisman",
            ]}
          />
        </div>
      </div>
      <h3>Ant Design Modal</h3>
      <div className="row">
        <div className="svg-box">
          <Connect
            title="AntD Connect"
            setCustomModalIsOpen={setAntDCustomModal}
            CustomButton={AntdButton}
            CustomModal={
              <AntdModal
                open={antDCustomModal}
                onCancel={() => setAntDCustomModal(false)}
              >
                <ConnectContent
                  type="column"
                  wallets={[
                    "enkrypt",
                    "fearless-wallet",
                    "metamask-polkadot-snap",
                    "novawallet",
                    "polkadot-js",
                    "polkagate",
                    "subwallet-js",
                    "talisman",
                  ]}
                />
              </AntdModal>
            }
          />
        </div>
      </div>
      <h3>Material UI Modal</h3>
      <div className="row">
        <div className="svg-box">
          <Connect
            title="MUI Connect"
            setCustomModalIsOpen={setMuiCustomModal}
            CustomButton={Button}
            CustomModal={
              <Modal
                open={muiCustomModal}
                onClose={() => setMuiCustomModal(false)}
              >
                <Box sx={style}>
                  <ConnectContent
                    wallets={[
                      "enkrypt",
                      "fearless-wallet",
                      "metamask-polkadot-snap",
                      "novawallet",
                      "polkadot-js",
                      "polkagate",
                      "subwallet-js",
                      "talisman",
                    ]}
                  />
                </Box>
              </Modal>
            }
          />
        </div>
      </div>
    </div>
  );
};
