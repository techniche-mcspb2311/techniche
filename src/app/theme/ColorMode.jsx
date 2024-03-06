import { createContext, useContext, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () =>
