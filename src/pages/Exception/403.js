import React from 'react';
import { FormattedMessage } from 'react-intl';
import Exception from '@/components/Exception';

const Exception403 = () => (
    <Exception
        type="403"
        desc={<FormattedMessage id='error.403' />}
    />
);

export default Exception403;
