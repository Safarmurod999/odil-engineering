import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Form = ({ children, onSubmit, direction = "x", width }) => {
  return (
    <form
      className={`form flex ${direction == "y" ? "flex-col" : "flex-row"
        } w-${width}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
const FormRow = ({ children, direction = "x" }) => {
  return <div className={`form-row ${direction == "y" ? "flex-col" : "flex-row"}`}>{children}</div>;
};
const FormControl = ({
  type = "text",
  placeholder = "",
  label = null,
  required = false,
  onChange,
  value,
  defaultValue,
  width = "full",
  name
}) => {
  return (
    <div className={`form-control w-${width}`}>
      {label && <label className="form-label">{label}</label>}
      {
        defaultValue ?
          <input
            className="form-input"
            type={type}
            placeholder={placeholder}
            defaultValue={value || ""}
            onChange={onChange}
            required={required}
            name={name}
          /> : <input
            className="form-input"
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            required={required}
            name={name}

          />
      }
    </div>
  );
};


const FormSelect = ({
  placeholder,
  label,
  required,
  onChange,
  value,
  options,
  width,
  name
}) => {
  return (
    <div className={`form-control w-${width}`}>
      <label className="form-label">{label}</label>
      <select
        className="form-input"
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const FormSwitch = ({ value, onChange, name }) => {
  return (
    <label className="form-switch">
      <input type="checkbox" checked={value} onChange={onChange} name={name} />
      <div className={`toggle ${value ? "checked" : ""}`}></div>
    </label>
  );
};

const FormBtn = ({ text, icon, onClick }) => {
  return (
    <button className="form-button" type="submit" onClick={onClick}>
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

const FormImage = ({ label, onChange, width, name }) => {
  return (
    <div className={`form-control w-${width}`}>
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        type="file"
        name={name}
        accept="image/png image/jpeg image/jpg"
        onChange={onChange}
      />
    </div>
  );
};
const FormMultiImage = ({ setFieldValue, values }) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  const handleImage = (acceptedFiles) => {
    const validFiles = acceptedFiles.filter((file) => allowedTypes.includes(file.type));

    if (validFiles.length !== acceptedFiles.length) {
      toast.error("Only jpeg and png files are allowed", {
        position: "bottom-right",
        duration: 2000,
      });
      return;
    }

    setFieldValue("images", [...values, ...validFiles]);
  };

  const removeImage = (index) => {
    const updatedImages = values.filter((_, i) => i !== index);
    setFieldValue("images", updatedImages);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: handleImage,
    multiple: true,
  });

  return (
    <div className="multi-image-upload">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drop images here or click to upload</p>
      </div>
      <div className="image-preview">
        {values.map((file, index) => (
          <div key={index} className="image-item">
            <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
            <button className="remove-btn" onClick={() => removeImage(index)}>
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Form, FormRow, FormControl, FormSelect, FormBtn, FormSwitch, FormImage, FormMultiImage };
