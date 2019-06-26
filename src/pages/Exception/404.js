import React from 'react';
import { FormattedMessage } from 'react-intl';
import Exception from '@/components/Exception';

const Exception404 = () => (
    <Exception
        type="404"
        desc={<FormattedMessage id='error.404' />}
    />
);

export default Exception404;
