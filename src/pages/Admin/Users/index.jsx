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
        users,
        navigate,
        handleSubmit,
        handleChange,
        handleReset,
        handleDelete,
        handleUpdate,
        values,
        dispatch,
        filter,
        setFilter
    } = useConnect();
    return (
        <section className="users">
            <div className="admin-container">
                <Breadcrumb title="Users" />
                <div className="data-table-container">
                    <div className="table-search">
                        <Form width="[300px]"
                            onSubmit={handleSubmit}
                        >
                            <FormControl
                                type="text"
                                placeholder="Username"
                                name="search"
                                value={get(values, "search", "")}
                                onChange={handleChange}
                            />
                            <FormBtn text="Search" />
                            <FormBtn text="Reset" onClick={handleReset} />
                        </Form>
                        <div className="flex">
                            <Link
                                to={"/admin/users/create"}
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
                                    <th>Username</th>
                                    <th>Passsword</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.loading ? (
                                    <tr>
                                        <td colSpan={5}>
                                            <p className="loader"> Loading...</p>
                                        </td>
                                    </tr>
                                ) : users && users.usersList?.data?.length ? (
                                    users.usersList.data.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.user_name}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <FormSwitch
                                                    onChange={(e) =>
                                                        handleUpdate(e, user.id, user.is_active)
                                                    }
                                                    value={user.is_active || false}
                                                />
                                            </td>
                                            <td>
                                                <div className="table-actions">
                                                    <button onClick={() => navigate(`/admin/users/edit/${user.id}`)}
                                                        className="action-btn"
                                                    >
                                                        <CiEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(user.id)}
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
                        currentPage={get(users, "usersList.currentPage", 1)}
                        totalPages={get(users, "usersList.totalPages", 1)}
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
