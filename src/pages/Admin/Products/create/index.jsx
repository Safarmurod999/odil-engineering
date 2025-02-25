import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormImage,
    FormSelect,
    FormMultiImage
} from "components/ui/Form/Form";
import { IoAddSharp } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

const Page = () => {
    const {
        values,
        categories,
        categoryOptions,
        handleChange,
        handleSubmit,
        handleImage,
        setFieldValue
    } = useConnect();
    console.log(values);

    return (
        <section className="product">
            <div className="admin-container">
                <Breadcrumb title="Products Create" backlink="/admin/products" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Enter name in Uzbek"
                            label={"Name in Uzbek"}
                            name="name_uz"
                            onChange={handleChange}
                            value={get(values, "name_uz", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Enter name in Russian"
                            label={"Name in Russian"}
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
                            placeholder="Enter name in English"
                            label={"Name in English"}
                            name="name_en"
                            onChange={handleChange}
                            value={get(values, "name_en", "")}
                            required={true}
                            width="50"
                        />
                        <FormSelect
                            type="text"
                            placeholder="Select category"
                            label={"Category"}
                            name="category_id"
                            options={categoryOptions}
                            onChange={handleChange}
                            value={get(values, "category_id", 0)}
                            required={true}
                            width="50"
                        />
                    </FormRow>
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
                        label={"Image"}
                        name="image"
                        onChange={handleImage}
                        // value={get(values, "avatar", "")}
                        width="full"
                    />
                    <FormMultiImage
                        type="text"
                        placeholder="https://example.com"
                        label={"Images"}
                        name="images"
                        setFieldValue={setFieldValue}
                        values={get(values, "images", [])}
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
