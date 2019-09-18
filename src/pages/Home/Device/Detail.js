import React, { Component } from 'react';
import { getUrlParam } from '@/utils/utils';
class Detail extends Component {

    render() {
        return (
            <div>Detail   id:{getUrlParam('id')}</div>
        )
    }
}

export default Detail;