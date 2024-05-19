// Report.js

import React from 'react';
import ReportC from '../../components/reportComponent';
import ReportRequest from '../../components/ReportRequest';

const Report = () => {
  return (
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">

      <ReportRequest/>
<div>
<ReportC/>
<ReportC/>
<ReportC/>
</div>

            </div>

          );
};

export default Report;
