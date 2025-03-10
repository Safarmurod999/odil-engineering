import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormTextarea
} from "components/ui/Form/Form";
import { IoAddSharp } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

const Page = () => {
    const {
        values,
        handleChange,
        handleSubmit
    } = useConnect();
    return (
        <section className="testimonial">
            <div className="admin-container">
                <Breadcrumb title="Fidbek Yaratish" backlink="/admin/testimonials" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Ism,Familiya (O'zbekcha)"
                            label={"Ism,Familiya (O'zbekcha)"}
                            name="name_uz"
                            onChange={handleChange}
                            value={get(values, "name_uz", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Ism,Familiya (Ruscha)"
                            label={"Ism,Familiya (Ruscha)"}
                            name="name_ru"
                            onChange={handleChange}
                            value={get(values, "name_ru", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Ism,Familiya (Inglizcha)"
                            label={"Ism,Familiya (Inglizcha)"}
                            name="name_en"
                            onChange={handleChange}
                            value={get(values, "name_en", "")}
                            required={true}
                            width="full"
                        />
                    </FormRow>
                    <FormTextarea
                        type="text"
                        placeholder="Fikr (O'zbekcha)"
                        label={"Fikr (O'zbekcha)"}
                        name="message_uz"
                        onChange={handleChange}
                        value={get(values, "message_uz", "")}
                        width="full"
                    />
                    <FormTextarea
                        type="text"
                        placeholder="Fikr (Ruscha)"
                        label={"Fikr (Ruscha)"}
                        name="message_ru"
                        onChange={handleChange}
                        value={get(values, "message_ru", "")}
                        width="full"
                    />
                    <FormTextarea
                        type="text"
                        placeholder="Fikr (Inglizcha)"
                        label={"Fikr (Inglizcha)"}
                        name="message_en"
                        onChange={handleChange}
                        value={get(values, "message_en", "")}
                        width="full"
                    />

                    <FormBtn text="add" icon={<IoAddSharp />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
