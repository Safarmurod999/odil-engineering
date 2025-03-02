import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormImage
} from "components/ui/Form/Form";
import { IoSave } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";
import { BASE_URL } from "../../../../data/const";

const Page = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleImage
    } = useConnect();

    return (
        <section className="user">
            <div className="admin-container">
                <Breadcrumb title="Mijozni Tahrirlash" backlink="/admin/clients" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="John Doe"
                            label={"Nomi"}
                            name="name"
                            onChange={handleChange}
                            value={get(values, "name", "")}
                            required={true}
                            width="50"
                        />

                        <FormImage
                            type="text"
                            placeholder="https://example.com"
                            label={"Rasm"}
                            name="image"
                            onChange={handleImage}
                            width="50"
                        />
                    </FormRow>
                    <FormBtn text="save" icon={<IoSave />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
