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
const Users = () => {
    const {
        leads,
        navigate,
        handleDelete,
        handleUpdate,
        dispatch,
        filter,
        setFilter
    } = useConnect();
    return (
        <section className="leads">
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
                                    {/* <th>Status</th> */}
                                    <th>Amallar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.loading ? (
                                    <tr>
                                        <td colSpan={5}>
                                            <p className="loader"> Yuklanmoqda...</p>
                                        </td>
                                    </tr>
                                ) : leads && leads.leadsList?.data?.length ? (
                                    leads.leadsList.data.map((lead, index) => (
                                        <tr key={lead.id}>
                                            <td>{index + 1}</td>
                                            <td>{lead.name}</td>
                                            <td>{lead.email}</td>
                                            {/* <td>
                                                <FormSwitch
                                                    onChange={(e) =>
                                                        handleUpdate(e, lead.id, lead.is_active)
                                                    }
                                                    value={lead.is_active || false}
                                                />
                                            </td> */}
                                            <td>
                                                <div className="table-actions">
                                                    <button onClick={() => navigate(`/admin/leads/view/${lead.id}`)}
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
                        currentPage={get(leads, "leadsList.currentPage", 1)}
                        totalPages={get(leads, "leadsList.totalPages", 1)}
                        handleLimitChange={(e) => {
                            dispatch(setFilter({ limit: Number(e.target.value), page: 1 }));
                        }}
                        handlePageChange={(page) => {
                            dispatch(setFilter({ page }));
                        }}
                        page={get(filter, "page", 1)}
                    />
                </div>
            </div>
        </section>
    );
};

export default Users;
