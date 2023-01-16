import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import PageContainer from './components/PageContainer';
import { GLOBAL_THEME } from 'constants/theme';
import ListView from 'views/ListView';

const App = () => (
  <ThemeProvider theme={GLOBAL_THEME}>
    <CssBaseline />
    <PageContainer fullPage>
      <ListView />
    </PageContainer>
  </ThemeProvider>
);

export default App;
