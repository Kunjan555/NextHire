import React, { useEffect, useState } from 'react'

export default function PostJobForm() {

    const [value, setValue] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "",
        description: "",
        skills: "",
        workMode: "",
        experienceLevel: "",
      });
      const [errors, setError] = useState({});

      function handleBlur(e,field,regEx) {
        const error = {}
        console.log(regEx)
        console.log(regEx.test(e.target.value))
        if(!regEx.test(e.target.value)){
            error[field] = "Enter Valid Input" 
        }else {
      delete error[field];
    }
        setError({...errors , ...error})
        return errors.length == 0;
    }
    function handleValue(name, inputValue){
        console.log(typeof(value[name]))
        setValue({...value,[name] : inputValue})
    }
function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!/^[A-Za-z][A-Za-z\s'-]{1,}$/.test(value.title)) {
      newErrors.title = "Enter valid job title";
    }
    if (!/^[A-Za-z0-9&\s'-]{2,}$/.test(value.company)) {
      newErrors.company = "Enter valid company name";
    }
    if (!/^[A-Za-z\s,.-]+$/.test(value.location)) {
      newErrors.location = "Enter valid location";
    }
    if (!/^(?:[₹$€]?\s?\d{1,3}(?:,\d{3})*|\d+)(?:\.\d{1,2})?\s?[₹$€]?$/.test(value.salary)) {
      newErrors.salary = "Enter valid salary (numbers only)";
    }
    if (!/^[A-Za-z\s]+$/.test(value.type)) {
      newErrors.type = "Enter valid job type";
    }
    if (!value.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!/^[A-Za-z\s,]+$/.test(value.skills)) {
      newErrors.skills = "Enter valid skills (comma separated)";
    }
    if (!/^[A-Za-z\s]+$/.test(value.workMode)) {
      newErrors.workMode = "Enter valid work mode";
    }
    if (!/^[A-Za-z\s]+$/.test(value.experienceLevel)) {
      newErrors.experienceLevel = "Enter valid experience level";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    console.log("Form submitted:", value);

    setValue({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "",
      description: "",
      skills: "",
      workMode: "",
      experienceLevel: "",
    });
    setError({});
  }

useEffect(()=>{
    console.log(errors)
},[errors])
  return (
    
    <>  
             <form id="postJobForm" onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            value={value.title}
            onBlur={(e) => handleBlur(e, "title", /^[A-Za-z][A-Za-z\s'-]{1,}$/)}
            onChange={(e) => {
                handleValue("title",e.target.value);
              setError({ ...errors, title: "" });
            }}
            className="form-control"
            id="title"
            placeholder="Enter job title"
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        {/* Company */}
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            value={value.company}
            onBlur={(e) => handleBlur(e, "company", /^[A-Za-z0-9&\s'-]{2,}$/)}
            onChange={(e) => {
            handleValue("company",e.target.value);
              setError({ ...errors, company: "" });
            }}
            className="form-control"
            id="company"
            placeholder="Enter company name"
          />
          {errors.company && <p className="error-text">{errors.company}</p>}
        </div>

        {/* Location */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            value={value.location}
            onBlur={(e) => handleBlur(e, "location", /^[A-Za-z\s,.-]+$/)}
            onChange={(e) => {
              handleValue("location",e.target.value);
              setError({ ...errors, location: "" });
            }}
            className="form-control"
            id="location"
            placeholder="Enter location"
          />
          {errors.location && <p className="error-text">{errors.location}</p>}
        </div>

        {/* Salary */}
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            value={value.salary}
            onBlur={(e) => handleBlur(e, "salary",/^(?:[₹$€]?\s?\d{1,3}(?:,\d{3})*|\d+)(?:\.\d{1,2})?\s?[₹$€]?$/)}
            onChange={(e) => {
            handleValue("salary",e.target.value);
              setError({ ...errors, salary: "" });
            }}
            className="form-control"
            id="salary"
            placeholder="Enter salary"
          />
          {errors.salary && <p className="error-text">{errors.salary}</p>}
        </div>

        {/* Type */}
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            value={value.type}
            onBlur={(e) => handleBlur(e, "type", /^[A-Za-z\s]+$/)}
            onChange={(e) => {
            handleValue("type",e.target.value);
              setError({ ...errors, type: "" });
            }}
            className="form-control"
            id="type"
            placeholder="Enter type"
          />
          {errors.type && <p className="error-text">{errors.type}</p>}
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            value={value.description}
            onBlur={(e) => handleBlur(e, "description", /^(?=\s*\S).*$/)}
            onChange={(e) => {
            handleValue("description",e.target.value);
              setError({ ...errors, description: "" });
            }}
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
          ></textarea>
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>

        {/* Skills */}
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            value={value.skills}
            onBlur={(e) => handleBlur(e, "skills", /^[A-Za-z\s,]+$/)}
            onChange={(e) => {
            handleValue("skills",e.target.value);
              setError({ ...errors, skills: "" });
            }}
            className="form-control"
            id="skills"
            placeholder="Enter skills (comma separated)"
          />
          {errors.skills && <p className="error-text">{errors.skills}</p>}
        </div>

        {/* Work Mode */}
        <div className="form-group">
          <label htmlFor="workMode">Work Mode</label>
          <input
            type="text"
            value={value.workMode}
            onBlur={(e) => handleBlur(e, "workMode", /^[A-Za-z\s]+$/)}
            onChange={(e) => {
            handleValue("workMode",e.target.value);
              setError({ ...errors, workMode: "" });
            }}
            className="form-control"
            id="workMode"
            placeholder="Enter work mode"
          />
          {errors.workMode && <p className="error-text">{errors.workMode}</p>}
        </div>

        {/* Experience Level */}
        <div className="form-group">
          <label htmlFor="experienceLevel">Experience Level</label>
          <input
            type="text"
            value={value.experienceLevel}
            onBlur={(e) => handleBlur(e, "experienceLevel", /^[A-Za-z\s]+$/)}
            onChange={(e) => {
            handleValue("experienceLevel",e.target.value);
              setError({ ...errors, experienceLevel: "" });
            }}
            className="form-control"
            id="experienceLevel"
            placeholder="Enter experience level"
          />
          {errors.experienceLevel && <p className="error-text">{errors.experienceLevel}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}
