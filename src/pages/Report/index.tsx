import { ReportContainer } from 'containers';
import { withReportSidebarLayout } from 'components/common/Layout';

export const ReportPage:React.FC = withReportSidebarLayout(() => {
  return <ReportContainer />
});