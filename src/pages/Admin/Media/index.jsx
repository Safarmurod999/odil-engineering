import React, { useState } from "react";
import useConnect from "./connect";
import { IoAddSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router";
import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import { Form, FormBtn, FormControl, FormSwitch } from "components/ui/Form/Form";
import Pagination from "components/ui/Pagination/Pagination";
import { get } from "lodash";
const Users = () => {
    const {
        media,
        navigate,
        handleDelete,
        handleUpdate,
        dispatch,
        filter,
        setFilter
    } = useConnect();
    return (
        <section className="media">
            <div className="admin-container">
                <Breadcrumb title="Media" />
                <div className="data-table-container">
                    <div className="table-search">
                        <div className="flex">
                            <Link
                                to={"/admin/media/create"}
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
                                    <th>Title</th>
                                    <th>Link</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {media.loading ? (
                                    <tr>
                                        <td colSpan={5}>
                                            <p className="loader"> Loading...</p>
                                        </td>
                                    </tr>
                                ) : media && media.mediaList?.data?.length ? (
                                    media.mediaList.data.map((media, index) => (
                                        <tr key={media.id}>
                                            <td>{index + 1}</td>
                                            <td>{media.title_uz}</td>
                                            <td>{media.link}</td>
                                            <td>
                                                <FormSwitch
                                                    onChange={(e) =>
                                                        handleUpdate(e, media.id, media.is_active)
                                                    }
                                                    value={media.is_active || false}
                                                />
                                            </td>
                                            <td>
                                                <div className="table-actions">
                                                    <button onClick={() => navigate(`/admin/media/edit/${media.id}`)}
                                                        className="action-btn"
                                                    >
                                                        <CiEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(media.id)}
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
                        currentPage={get(media, "mediaList.currentPage", 1)}
                        totalPages={get(media, "mediaList.totalPages", 1)}
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
