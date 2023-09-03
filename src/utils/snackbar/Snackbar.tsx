// $common/Snackbar.tsx
import { useEffect, useState } from 'react';
import { Snackbar as PaperSnackbar } from 'react-native-paper';

import SnackbarManager from './SnackbarManager';

type State = {
  visible: boolean;
  title?: string;
};

const Snackbar = () => {
  const [state, setState] = useState<State>({ visible: false });

  useEffect(() => {
    SnackbarManager.setListener((title) => setState({ visible: true, title }));
    return () => SnackbarManager.setListener(null);
  }, []);

  return (
    <PaperSnackbar visible={state.visible} onDismiss={() => setState({ ...state, visible: false })} duration={4500}>
      {state.title}
    </PaperSnackbar>
  );
};

export default Snackbar;