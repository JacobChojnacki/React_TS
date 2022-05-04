import * as yup from 'yup'

export const filmSchema = yup.object().shape({
    title: yup.string().min(2, "Too Short!").required('Required'),
    name: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    production: yup.number().min(4,"Wrong Year").required('Required'),
    duration: yup.number().required('Required'),
})