import { TextField } from '@mui/material';
import { Form, FormikProps, withFormik } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { string, object, number, SchemaOf, date } from 'yup';
import { Button } from '../button/Button';

interface OrderForm {
    firstName: string;
    lastName: string;
    email: string;
    cardNumber: string;
    dueDate: Date;
    cvv: number;
}

const validationSchema: SchemaOf<OrderForm> = object({
    firstName: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: string().email('Invalid email').required('Required'),
    cardNumber: string().trim().matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/).required('Required'),
    dueDate: date().required('Required'),
    cvv: number().lessThan(1000).moreThan(99).required('Required')
});

const InnerForm = (props: FormikProps<OrderForm>) => {
    const { isSubmitting } = props;
    return (
        <Form style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "15rem",
            margin: "auto"
        }}>
            <TextField
                margin="normal"
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={props.values.firstName}
                onChange={props.handleChange}
                error={props.touched.firstName && Boolean(props.errors.firstName)}
                helperText={props.touched.firstName && props.errors.firstName}
            />

            <TextField
                margin="normal"
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={props.values.lastName}
                onChange={props.handleChange}
                error={props.touched.lastName && Boolean(props.errors.lastName)}
                helperText={props.touched.lastName && props.errors.lastName}
            />

            <TextField
                margin="normal"
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={props.values.email}
                onChange={props.handleChange}
                error={props.touched.email && Boolean(props.errors.email)}
                helperText={props.touched.email && props.errors.email}
            />

            <TextField
                margin="normal"
                fullWidth
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                value={props.values.cardNumber}
                onChange={props.handleChange}
                error={props.touched.cardNumber && Boolean(props.errors.cardNumber)}
                helperText={props.touched.cardNumber && props.errors.cardNumber}
            />

            <TextField
                margin="normal"
                type="date"
                fullWidth
                id="dueDate"
                name="dueDate"
                value={props.values.dueDate}
                onChange={props.handleChange}
                error={props.touched.dueDate && Boolean(props.errors.dueDate)}
                helperText={props.touched.dueDate && props.errors.dueDate}
            />

            <TextField
                margin="normal"
                fullWidth
                type="number"
                id="cvv"
                name="cvv"
                label="cvv"
                value={props.values.cvv}
                onChange={props.handleChange}
                error={props.touched.cvv && Boolean(props.errors.cvv)}
                helperText={props.touched.cvv && props.errors.cvv}
            />
            <Button type="submit" label="Submit" />
        </Form>
    );
};

interface OrderFormBasicProps {
    onSubmit: () => void;
}

const OrderFormBasic = withFormik<OrderFormBasicProps, OrderForm>({
    mapPropsToValues: () => {
        return {
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: '',
            dueDate: new Date(),
            cvv: 0
        };
    },
    validationSchema: validationSchema,
    handleSubmit: (values, formikBag) => {
        formikBag.props.onSubmit();
        console.log(values);
    },
})(InnerForm);

type OrderProps = RouteComponentProps;
export const OrderForm = (props: OrderProps) => {
    const handleSubmit = () => props.history.push('success');
    return (
        <>
            <h1>Order form</h1>
            <OrderFormBasic onSubmit={handleSubmit} />
        </>
    )
}