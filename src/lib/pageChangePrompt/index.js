import React, { useEffect, useRef, useState } from "react";
import Modal from "../modal";

const PageChangePrompt = ({
  cancel,
  cancelText,
  history,
  confirm = (unlock, path) => {
    unlock();
    history.push(path);
  },
  confirmText,
  children,
  onlyConfirm,
  bypass = [],
  ...props
}) => {
  const unblockHandle = useRef();
  const [newPath, setNewPath] = useState(null);

  useEffect(() => {
    unblockHandle.current = history.block((targetLocation) => {
      setNewPath(targetLocation);
      return !!targetLocation.state?.bypass;
    });
    return function () {
      unblockHandle.current && unblockHandle.current();
    };
  }, [bypass]);

  return (
    <Modal
      cancel={cancel ? () => cancel(unblockHandle.current, newPath) : null}
      cancelText={cancelText}
      confirm={
        confirm
          ? () => {
              confirm(unblockHandle.current, newPath);
              setNewPath(null);
            }
          : null
      }
      confirmText={confirmText}
      onlyConfirm={onlyConfirm}
      open={!!newPath}
      close={() => setNewPath(null)}
    >
      {children}
    </Modal>
  );
};

export default PageChangePrompt;
