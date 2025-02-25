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
                <Breadcrumb title="Categories Edit" backlink="/admin/categories" />
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
                        <FormControl
                            type="text"
                            placeholder="Enter link name"
                            label={"Link name"}
                            name="link"
                            onChange={handleChange}
                            value={get(values, "link", "")}
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
                    <div className="image-preview">
                        <div className="image-wrapper">
                            <img src={values?.image instanceof File ? URL.createObjectURL(values?.image) : `${BASE_URL}/${values?.image}`} alt="Category image" />
                        </div>
                        <FormImage
                            type="text"
                            placeholder="https://example.com"
                            label={"Image"}
                            name="image"
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
