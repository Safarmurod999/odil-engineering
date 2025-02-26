import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormSelect
} from "components/ui/Form/Form";
import { IoAddSharp, IoSave } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

const Page = () => {
    const {
        values,
        handleChange,
        handleSubmit
    } = useConnect();
    return (
        <section className="project">
            <div className="admin-container">
                <Breadcrumb title="Proyektni Tahrirlash" backlink="/admin/project" />
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

                    <FormBtn text="save" icon={<IoSave />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
