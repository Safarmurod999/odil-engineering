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
import { IoSave } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";
import { BASE_URL } from "../../../../data/const";

const Page = () => {
    const {
        values,
        categoryOptions,
        setFieldValue,
        handleChange,
        handleSubmit,
        handleImage
    } = useConnect();

    return (
        <section className="products">
            <div className="admin-container">
                <Breadcrumb title="Mahsulotni tahrirlash" backlink="/admin/products" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Nomi (O'zbekcha)"
                            label={"Nomi (O'zbekcha)"}
                            name="name_uz"
                            onChange={handleChange}
                            value={get(values, "name_uz", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Nomi (Ruscha)"
                            label={"Nomi (Ruscha)"}
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
                    <FormControl
                        type="text"
                        placeholder="Ta'rif (O'zbekcha)"
                        label={"Ta'rif (O'zbekcha)"}
                        name="description_uz"
                        onChange={handleChange}
                        value={get(values, "description_uz", "")}
                        width="full"
                    />
                    <FormControl
                        type="text"
                        placeholder="Ta'rif (Ruscha)"
                        label={"Ta'rif (Ruscha)"}
                        name="description_ru"
                        onChange={handleChange}
                        value={get(values, "description_ru", "")}
                        width="full"
                    />

                    <FormControl
                        type="text"
                        placeholder="Ta'rif (Inglizcha)"
                        label={"Ta'rif (Inglizcha)"}
                        name="description_en"
                        onChange={handleChange}
                        value={get(values, "description_en", "")}
                        width="full"
                    />
                    <div className="image-preview">
                        <div className="image-wrapper">
                            <img src={values?.image instanceof File ? URL.createObjectURL(values?.image) : `${BASE_URL}/${values?.image}`} alt="Category image" />
                        </div>
                        <FormImage
                            type="text"
                            placeholder="https://example.com"
                            label={"Rasm"}
                            name="image"
                            onChange={handleImage}
                            width="full"
                        />
                    </div>
                    <FormMultiImage
                        type="text"
                        placeholder="https://example.com"
                        label={"Rasmlar"}
                        name="images"
                        setFieldValue={setFieldValue}
                        values={get(values, "images", [])}
                        delete_images_array={get(values, "delete_images_array", [])}
                        // value={get(values, "avatar", "")}
                        width="full"
                    />


                    <FormBtn text="save" icon={<IoSave />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
