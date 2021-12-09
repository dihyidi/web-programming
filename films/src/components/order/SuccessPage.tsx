import React from 'react'
import { RouteComponentProps } from 'react-router-dom';

import success from '../../icons/success-svgrepo-com.svg';
import { Button } from '../button/Button';

type SuccessPageProps = RouteComponentProps;
export const SuccessPage = (props: SuccessPageProps) => {
    const handleOnBack = () => props.history.push('catalog');
    return (
        <div>
            <img src={success} style={{
                width: "200px",
                marginTop: "2rem"
            }} />
            <h3>Success!</h3>
            <p>Your order has been submitted!</p>
            <Button label="Go back to catalog" onClick={handleOnBack} />
        </div>
    )
}
