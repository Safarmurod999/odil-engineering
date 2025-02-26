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
                <Breadcrumb title="Foydalanuvchini Tahrirlash" backlink="/admin/users" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="John Doe"
                            label={"Username"}
                            name="user_name"
                            onChange={handleChange}
                            value={get(values, "user_name", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="*****"
                            label={"Parol"}
                            name="password"
                            onChange={handleChange}
                            value={get(values, "password", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="John"
                            label={"Ism"}
                            name="first_name"
                            onChange={handleChange}
                            value={get(values, "first_name", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Doe"
                            label={"Familiya"}
                            name="last_name"
                            onChange={handleChange}
                            value={get(values, "last_name", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormControl
                        type="email"
                        placeholder="example@gmail.com"
                        label={"Email"}
                        name="email"
                        onChange={handleChange}
                        value={get(values, "email", "")}
                        required={true}
                        width="full"
                    />
                    
                    <div className="image-preview">
                        <div className="image-wrapper">
                            <img src={values?.avatar instanceof File ? URL.createObjectURL(values?.avatar) : `${BASE_URL}/${values?.avatar}`} alt="User image" />
                        </div>
                        <FormImage
                            type="text"
                            placeholder="https://example.com"
                            label={"Avatar"}
                            name="avatar"
                            onChange={handleImage}
                            width="full"
                        />
                    </div>

                    <FormBtn text="save" icon={<IoSave />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
