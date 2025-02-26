import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormSelect
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
                <Breadcrumb title="Murojaat Ma'lumotlari" backlink="/admin/leads" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Ism va Familiy"
                            label={"Ism va Familiy"}
                            name="name"
                            onChange={handleChange}
                            value={get(values, "name", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="email"
                            placeholder="email"
                            label={"Email"}
                            name="email"
                            onChange={handleChange}
                            value={get(values, "email", "")}
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
                            type="text"
                            placeholder="Xabar"
                            label={"Xabar"}
                            name="message"
                            onChange={handleChange}
                            value={get(values, "message", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>

                    {/* <FormBtn text="save" icon={<IoSave />} /> */}
                </Form>
            </div>
        </section>
    );
};

export default Page;
