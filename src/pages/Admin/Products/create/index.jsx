import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormImage,
    FormSelect,
    FormMultiImage,
    FormTextarea
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
                <Breadcrumb title="Mahsulot yaratish" backlink="/admin/products" />
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
                            placeholder="Nomi (Inglizcha)"
                            label={"Nomi (Inglizcha)"}
                            name="name_en"
                            onChange={handleChange}
                            value={get(values, "name_en", "")}
                            required={true}
                            width="50"
                        />
                        <FormSelect
                            type="text"
                            placeholder="Kategoriya tanlash"
                            label={"Kategoriya"}
                            name="category_id"
                            options={categoryOptions}
                            onChange={handleChange}
                            value={get(values, "category_id", 0)}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormTextarea
                        type="text"
                        placeholder="Ta'rif (O'zbekcha)"
                        label={"Ta'rif (O'zbekcha)"}
                        name="description_uz"
                        onChange={handleChange}
                        value={get(values, "description_uz", "")}
                        width="full"
                    />
                    <FormTextarea
                        type="text"
                        placeholder="Ta'rif (Ruscha)"
                        label={"Ta'rif (Ruscha)"}
                        name="description_ru"
                        onChange={handleChange}
                        value={get(values, "description_ru", "")}
                        width="full"
                    />

                    <FormTextarea
                        type="text"
                        placeholder="Ta'rif (Inglizcha)"
                        label={"Ta'rif (Inglizcha)"}
                        name="description_en"
                        onChange={handleChange}
                        value={get(values, "description_en", "")}
                        width="full"
                    />

                    <FormImage
                        type="text"
                        placeholder="https://example.com"
                        label={"Rasm"}
                        name="image"
                        onChange={handleImage}
                        // value={get(values, "avatar", "")}
                        width="full"
                    />
                    <FormMultiImage
                        type="text"
                        placeholder="https://example.com"
                        label={"Rasmlar"}
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
