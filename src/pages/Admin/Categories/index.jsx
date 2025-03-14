import React from "react";
import useConnect from "./connect";
import { IoAddSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router";
import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import { FormSwitch } from "components/ui/Form/Form";
import Pagination from "components/ui/Pagination/Pagination";
import { get } from "lodash";
const Categories = () => {
    const {
        categories,
        navigate,
        handleDelete,
        handleUpdate,
        dispatch,
        filter,
        setFilter
    } = useConnect();
    return (
        <section className="categories">
            <div className="admin-container">
                <Breadcrumb title="Kategoriyalar" />
                <div className="data-table-container">
                    <div className="table-search">
                        <div className="flex">
                            <Link
                                to={"/admin/categories/create"}
                                className="form-button flex items-center text-white"
                            >
                                <IoAddSharp />
                                <span>add</span>
                            </Link>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Nomi</th>
                                    <th>Ta'rif</th>
                                    <th>Status</th>
                                    <th>Amallar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.loading ? (
                                    <tr>
                                        <td colSpan={5}>
                                            <p className="loader"> Yuklanmoqda...</p>
                                        </td>
                                    </tr>
                                ) : categories && categories.categoriesList?.data?.length ? (
                                    categories.categoriesList.data.map((category, index) => (
                                        <tr key={category.id}>
                                            <td>{index + 1}</td>
                                            <td>{category?.name_uz}</td>
                                            <td>{category?.description_uz.slice(0, 30)}</td>
                                            <td>
                                                <FormSwitch
                                                    onChange={(e) =>
                                                        handleUpdate(e, category.id, category.is_active)
                                                    }
                                                    value={category.is_active || false}
                                                />
                                            </td>
                                            <td>
                                                <div className="table-actions">
                                                    <button onClick={() => navigate(`/admin/categories/edit/${category.id}`)}
                                                        className="action-btn"
                                                    >
                                                        <CiEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(category.id)}
                                                        className="action-btn"
                                                    >
                                                        <MdDeleteOutline />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="no-data">
                                        <td colSpan={5}>
                                            <p className="text-center">No data found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination
                        currentPage={get(categories, "categoriesList.currentPage", 1)}
                        totalPages={get(categories, "categoriesList.totalPages", 1)}
                        handleLimitChange={(e) => {
                            dispatch(setFilter({ limit: Number(e.target.value), page: 1 }));
                        }}
                        handlePageChange={(page) => {
                            dispatch(setFilter({ page }));
                        }}
                        limit={get(filter, "limit", 10)}
                        page={get(filter, "page", 1)}
                    />
                </div>
            </div>
        </section>
    );
};

export default Categories;
