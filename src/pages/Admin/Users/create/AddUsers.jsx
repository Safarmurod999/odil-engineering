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
                <Breadcrumb title="Users Create" backlink="/admin/users" />
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
                            label={"Password"}
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
                            label={"First Name"}
                            name="first_name"
                            onChange={handleChange}
                            value={get(values, "first_name", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Doe"
                            label={"Last Name"}
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
                    <FormControl
                        type="text"
                        placeholder="Description in Uzbek"
                        label={"Description in Uzbek"}
                        name="description_uz"
                        onChange={handleChange}
                        value={get(values, "description_uz", "")}
                        width="full"
                    />
                    <FormControl
                        type="text"
                        placeholder="Description in Russian"
                        label={"Description in Russian"}
                        name="description_ru"
                        onChange={handleChange}
                        value={get(values, "description_ru", "")}
                        width="full"
                    />

                    <FormControl
                        type="text"
                        placeholder="Description in English"
                        label={"Description in English"}
                        name="description_en"
                        onChange={handleChange}
                        value={get(values, "description_en", "")}
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
