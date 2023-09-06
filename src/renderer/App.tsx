import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import {
  Box,
  CSSObject,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { blueGrey } from '@mui/material/colors';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useState } from 'react';

const drawerWidth = 240;

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...closedMixin(theme),
  '& .MuiDrawer-paper': closedMixin(theme),
}));

function Hello() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
          },
        }}
        open={false}
      >
        <List>
          <ListItem
            key={'text'}
            disablePadding
            onClick={() => {
              console.log(window.electron);
              window.electron.store.set('foo', 'bar');
              console.log(window.electron.store.get('foo'));
            }}
          >
            <ListItemText
              sx={{
                backgroundColor: theme.palette.primary.light,
                borderRadius: 1,
                minHeight: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 'auto',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <InboxIcon sx={{ color: theme.palette.text.primary }} />
              </ListItemIcon>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      {/* <Tabs
        focusTabOnClick={false}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
      </Tabs> */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: blueGrey[900],
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#999999',
      secondary: '#bbbbbb',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
