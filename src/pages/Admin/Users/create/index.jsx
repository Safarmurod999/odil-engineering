import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormImage
} from "components/ui/Form/Form";
import { IoAddSharp } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

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
                <Breadcrumb title="Foydalanuvchi yaratish" backlink="/admin/users" />
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
                    <FormImage
                        type="text"
                        placeholder="https://example.com"
                        label={"Avatar"}
                        name="avatar"
                        onChange={handleImage}
                        // value={get(values, "avatar", "")}
                        width="full"
                    />
                    <FormBtn text="add" icon={<IoAddSharp />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
