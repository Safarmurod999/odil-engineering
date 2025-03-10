import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormImage,
    FormTextarea
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
        <section className="category">
            <div className="admin-container">
                <Breadcrumb title="Kategoriya Yaratish" backlink="/admin/categories" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Kategoriya nomi (O'zbekcha)"
                            label={"Nomi (O'zbekcha)"}
                            name="name_uz"
                            onChange={handleChange}
                            value={get(values, "name_uz", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Kategoriya nomi (Ruscha)"
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
                            placeholder="Kategoriya nomi (Inglizcha)"
                            label={"Nomi (Inglizcha)"}
                            name="name_en"
                            onChange={handleChange}
                            value={get(values, "name_en", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Enter link nomi"
                            label={"Link nomi"}
                            name="link"
                            onChange={handleChange}
                            value={get(values, "link", "")}
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
                    <FormBtn text="add" icon={<IoAddSharp />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
