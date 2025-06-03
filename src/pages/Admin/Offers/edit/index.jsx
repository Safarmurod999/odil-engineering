import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormTextarea
} from "components/ui/Form/Form";
import { IoAddSharp, IoSave } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

const Page = () => {
    const {
        values,
        handleChange,
        handleSubmit
    } = useConnect();
    return (
        <section className="leads">
            <div className="admin-container">
                <Breadcrumb title="Hamkor Ma'lumotlari" backlink="/admin/suppliers" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Odil Engineering LLC"
                            label={"Kompaniya nomi"}
                            name="company_name"
                            onChange={handleChange}
                            value={get(values, "company_name", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="number"
                            placeholder="Hamkorlar soni"
                            label={"Hamkorlar soni"}
                            name="partner_count"
                            onChange={handleChange}
                            value={get(values, "partner_count", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="INN"
                            label={"INN"}
                            name="inn"
                            onChange={handleChange}
                            value={get(values, "inn", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Bog'lanish uchun shaxs"
                            label={"Bog'lanish uchun shaxs"}
                            name="contact_person"
                            onChange={handleChange}
                            value={get(values, "contact_person", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Telefon raqam"
                            label={"Telefon raqam"}
                            name="phone"
                            onChange={handleChange}
                            value={get(values, "phone", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="email"
                            placeholder="Email"
                            label={"Email"}
                            name="email"
                            onChange={handleChange}
                            value={get(values, "email", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormTextarea
                        placeholder="Kompaniya haqida ma'lumot"
                        label={"Kompaniya haqida ma'lumot"}
                        name="company_description"
                        onChange={handleChange}
                        value={get(values, "company_description", "")}
                        required={true}
                        width="full"
                    />
                    <FormTextarea
                        placeholder="Taklif"
                        label={"Taklif"}
                        name="offer"
                        onChange={handleChange}
                        value={get(values, "offer", "")}
                        required={true}
                        width="full"
                    />
                    <FormBtn text="save" icon={<IoSave />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
