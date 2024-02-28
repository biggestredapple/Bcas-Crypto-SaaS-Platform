import { MainContainer } from 'containers';
import { withSidebarLayout } from 'components/common/Layout';

export const MainPage:React.FC = withSidebarLayout(() => {
  return <MainContainer />
});