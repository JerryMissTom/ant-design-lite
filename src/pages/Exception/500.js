import React from 'react';
import { FormattedMessage } from 'react-intl';
import Exception from '@/components/Exception';

const Exception500 = () => (
    <Exception
        type="500"
        desc={<FormattedMessage id='error.500' />}
        backText={<FormattedMessage id='back' />}
    />
);

export default Exception500;
