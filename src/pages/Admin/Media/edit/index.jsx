import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormSelect
} from "components/ui/Form/Form";
import { IoSave } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

const Page = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        productOptions
    } = useConnect();
    return (
        <section className="media">
            <div className="admin-container">
                <Breadcrumb title="Media Tahrirlash" backlink="/admin/media" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Sarlavha (O'zbekcha)"
                            label={"Sarlavha (O'zbekcha)"}
                            name="title_uz"
                            onChange={handleChange}
                            value={get(values, "title_uz", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Sarlavha (Ruscha)"
                            label={"Sarlavha (Ruscha)"}
                            name="title_ru"
                            onChange={handleChange}
                            value={get(values, "title_ru", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Sarlavha (Inglizcha)"
                            label={"Sarlavha (Inglizcha)"}
                            name="title_en"
                            onChange={handleChange}
                            value={get(values, "title_en", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Link"
                            label={"Link"}
                            name="link"
                            onChange={handleChange}
                            value={get(values, "link", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormSelect
                        type="text"
                        placeholder="Mahsulotni tanlang"
                        label={"Mahsulot"}
                        name="product_id"
                        options={productOptions}
                        onChange={handleChange}
                        value={get(values, "product_id", 0)}
                        required={true}
                        width="50"
                    />
                    <FormBtn text="save" icon={<IoSave />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
