import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormSelect
} from "components/ui/Form/Form";
import { IoAddSharp } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

const Page = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
        productOptions
    } = useConnect();
    return (
        <section className="media">
            <div className="admin-container">
                <Breadcrumb title="Media Create" backlink="/admin/media" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="Title in Uzbek"
                            label={"Title in Uzbek"}
                            name="title_uz"
                            onChange={handleChange}
                            value={get(values, "title_uz", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="Title in Russian"
                            label={"Title in Russian"}
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
                            placeholder="Title in English"
                            label={"Title in English"}
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
                    {/* <FormControl
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
                    /> */}
                    <FormSelect
                        type="text"
                        placeholder="Select product"
                        label={"Product"}
                        name="product_id"
                        options={productOptions}
                        onChange={handleChange}
                        value={get(values, "product_id", 0)}
                        required={true}
                        width="50"
                    />
                    <FormBtn text="add" icon={<IoAddSharp />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
