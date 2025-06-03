import React from "react";
import useConnect from "./connect";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import { FormSwitch } from "components/ui/Form/Form";
import Pagination from "components/ui/Pagination/Pagination";
import { get } from "lodash";
const Offers = () => {
    const {
        suppliers,
        navigate,
        handleDelete,
        handleUpdate,
        dispatch,
        filter,
        setFilter
    } = useConnect();
    return (
        <section className="suppliers">
            <div className="admin-container">
                <Breadcrumb title="Murojaatlar" />
                <div className="data-table-container">
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Sarlavha</th>
                                    <th>Link</th>
                                    <th>Status</th>
                                    <th>Amallar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.loading ? (
                                    <tr>
                                        <td colSpan={5}>
                                            <p className="loader"> Yuklanmoqda...</p>
                                        </td>
                                    </tr>
                                ) : suppliers && suppliers.suppliersList?.data?.length ? (
                                    suppliers.suppliersList.data.map((lead, index) => (
                                        <tr key={lead.id}>
                                            <td>{index + 1}</td>
                                            <td>{lead.company_name}</td>
                                            <td>{lead.email}</td>
                                            <td>
                                                <FormSwitch
                                                    onChange={(e) =>
                                                        handleUpdate(e, lead.id, lead.is_active)
                                                    }
                                                    value={lead.is_active || false}
                                                />
                                            </td>
                                            <td>
                                                <div className="table-actions">
                                                    <button onClick={() => navigate(`/admin/suppliers/edit/${lead.id}`)}
                                                        className="action-btn"
                                                    >
                                                        <CiEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(lead.id)}
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
                        currentPage={get(suppliers, "suppliersList.currentPage", 1)}
                        totalPages={get(suppliers, "suppliersList.totalPages", 1)}
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

export default Offers;
