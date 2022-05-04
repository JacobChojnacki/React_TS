import Card from '../ui/Card'
import classes from './NewFilm.module.css'
import {useRef} from "react";
import {Formik, Form} from "formik";
import {filmSchema} from "../Validations/NewFilmValidation";

function NewFilmForm(props) {
    const titleInputRef = useRef();
    const nameInputRef = useRef();
    const lastNameInputRef = useRef();
    const productionInputRef = useRef();
    const durationInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredProduction = productionInputRef.current.value;
        const enteredDuration = durationInputRef.current.value

        const filmData = {
            title: enteredTitle,
            name: enteredName,
            lastName: enteredLastName,
            production: enteredProduction,
            duration: enteredDuration,
        };

        props.onAddFilm(filmData);

    }

    return (
        <Card>
            <Formik
                initialValues={{
                    title: '',
                    name: '',
                    lastName: '',
                    productionTime: '',
                    durationTime: '',
                }}
                validationSchema={filmSchema}
                onSubmit={submitHandler}>
                {formik => (
                    <Form className={classes.form} onSubmit={submitHandler}>
                        <div className={classes.control}>
                            <label htmlFor={'title'}>Film Title</label>
                            <input type={'text'} required id={'title'} ref={titleInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor={'name'}>Director's name</label>
                            <input type={'name'} required id={'name'} ref={nameInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor={'lastName'}>Director's last name</label>
                            <input type={'text'} required id={'lastName'} ref={lastNameInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor={'productionTime'}>Year of production</label>
                            <input type={'number'} required id={'productionTime'} ref={productionInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor={'durationTime'}>Duration Time [min]</label>
                            <input type={'number'} required id={'durationTime'} ref={durationInputRef}/>
                        </div>
                        <div className={classes.actions}>
                            <button>Add Film</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Card>
    )
}

export default NewFilmForm;