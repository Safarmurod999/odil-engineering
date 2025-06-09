import React from 'react'
import { Form, FormBtn, FormControl, FormRow, FormSelect, FormTextarea } from "../../components/ui/Form/Form";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {createSupplier} from "store/slices/suppliersSlice";
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
const SuppliersInner = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(createSupplier(values)).then((res) => {
            if (res.error) {
                toast.error("Ma'lumotlar to'g'ri kiritilmagan")
            } else {
                toast.success("Muvaffaqiyatli yuborildi")
            }
        });
        resetForm();
    }
    const { values, handleChange, handleSubmit,resetForm } = useFormik({
        initialValues: {
            company_name: '',
            partner_count: 0,
            inn: '',
            contact_person: '',
            phone: '',
            email: '',
            company_description: '',
            offer: '',

        },
        onSubmit,
        enableReinitialize: true
    })
    return (
        <section className='suppliers-inner'>
            <div className="container">
                <div className="title">
                    <span>{t('be_supplier')}</span>
                </div>
                <Form direction='y' onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type='text'
                            placeholder=''
                            label={`${t('company_name')} *`}
                            name={'company_name'}
                            value={values.company_name}
                            onChange={handleChange} />
                        <FormControl
                            type='text'
                            placeholder=''
                            name={'partner_count'}
                            value={values.partner_count}
                            onChange={handleChange}
                            label={t('partner_count')} />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type='text'
                            placeholder=''
                            name={'inn'}
                            label={t('inn')}
                            value={values.inn}
                            onChange={handleChange} />
                        <FormControl
                            type='text'
                            placeholder=''
                            name={'contact_person'}
                            label={`${t('contact_person')} *`}
                            value={values.contact_person}
                            onChange={handleChange} />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type='text'
                            placeholder=''
                            name={'phone'}
                            label={t('phone')}
                            
                            value={values.phone}
                            onChange={handleChange} />
                        <FormControl
                            type='email'
                            placeholder=''
                            name={'email'}
                            label={t('email')}
                            value={values.email}
                            onChange={handleChange} />
                    </FormRow>
                    <FormTextarea label={t('company_description')} name={'company_description'} value={values.company_description} onChange={handleChange} />
                    {/* <strong>Выберите категорию продукции или услуг</strong> */}
                    <strong>{t('offer')}</strong>
                    {/* <FormSelect
                        options={[
                            { id: 0, label: 'Механические части' },
                            { id: 1, label: 'Электрика, Электроника, Автоматика' },
                            { id: 2, label: 'Изготовление по чертежам' },
                            { id: 3, label: 'Услуги' },
                        ]} /> */}
                    <div className='suppliers-inner-textarea'>
                        <FormTextarea
                            placeholder=''
                            label={''}
                            name={'offer'}
                            value={values.offer}
                            onChange={handleChange}
                        />
                    </div>
                    <FormBtn text={'Отправить'} />
                </Form>
            </div>
        </section>
    )
}

export default SuppliersInner