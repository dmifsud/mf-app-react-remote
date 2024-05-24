import { Formik, FormikHelpers, Form, Field } from 'formik';
import { object, string } from 'yup';
import authStore from '@mf-app/store/auth/store.auth';
// import LitButtonReact from '../../web-components/lit-button';

interface Values {
    email: string;
    password: string;
}

const Login = () => {
    const { loading, actions } = authStore();

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <Formik
                            validateOnMount
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            onSubmit={(
                                values: Values,
                                { setSubmitting }: FormikHelpers<Values>,
                            ) => {
                                console.log(values);

                                const { email, password } = values;

                                // dispatch(login({
                                //     email,
                                //     password
                                // }));
                                console.log('dispatch login', email, password);
                                actions.login(email, password);

                                setSubmitting(false);
                            }}
                            validationSchema={object({
                                email: string().required('Name required').email('Invalid email'),
                                password: string().required('Password required')
                            })}
                        >
                            {({ errors, isValid, touched }) => (
                                <Form className="space-y-4 md:space-y-6">
                                    <div className='text-left'>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <Field type="email" name="email" placeholder="name@company.com" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        {Boolean(errors.email) && Boolean(touched.email) && <p className='text-red-600 text-sm'>{errors.email}</p>}
                                    </div>
                                    <div className='text-left'>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <Field type="password" name="password" placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                         {Boolean(errors.password) && Boolean(touched.password) && <p className='text-red-600 text-sm'>{errors.password}</p>}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    {/* TODO: web component doesn't trigger submit event */}
                                    {/* <LitButtonReact onSubmit={submitForm} type="submit" disabled={!isValid || loading} text={loading ? "Loading..." : "Sign in"} fullWidth/> */}
                                    <button type="submit" disabled={!isValid || loading} className="disabled:opacity-15 bg-blue-700 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        {
                                            loading ? "Loading..." : "Sign in"
                                        }
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </p>
                                </Form>
                            )}
                            
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;