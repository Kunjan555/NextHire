import React, { useEffect, useState } from 'react';

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
        const error = {};
        if(!regEx.test(e.target.value)){
            error[field] = "Enter Valid Input" 
        } else {
            delete error[field];
        }
        setError({...errors , ...error});
        return Object.keys(errors).length === 0;
    }

    function handleValue(name, inputValue){
        setValue({...value,[name] : inputValue});
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
        console.log(errors);
    },[errors]);

    return (
        <>
            <form id="postJobForm" onSubmit={handleSubmit} className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='form-wrapper w-auto flex flex-wrap justify-between gap-x-16'>
                {/* Job Title */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="title">Job Title</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.title}
                            onBlur={(e) => handleBlur(e, "title", /^[A-Za-z][A-Za-z\s'-]{1,}$/)}
                            onChange={(e) => {
                                handleValue("title", e.target.value);
                                setError({ ...errors, title: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="title"
                            placeholder="Enter job title"
                        />
                    </div>
                    {errors.title && <p className="text-xs font-medium text-red-500">{errors.title}</p>}
                </div>

                {/* Company */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="company">Company</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.company}
                            onBlur={(e) => handleBlur(e, "company", /^[A-Za-z0-9&\s'-]{2,}$/)}
                            onChange={(e) => {
                                handleValue("company", e.target.value);
                                setError({ ...errors, company: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="company"
                            placeholder="Enter company name"
                        />
                    </div>
                    {errors.company && <p className="text-xs font-medium text-red-500">{errors.company}</p>}
                </div>

                {/* Location */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="location">Location</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.location}
                            onBlur={(e) => handleBlur(e, "location", /^[A-Za-z\s,.-]+$/)}
                            onChange={(e) => {
                                handleValue("location", e.target.value);
                                setError({ ...errors, location: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="location"
                            placeholder="Enter location"
                        />
                    </div>
                    {errors.location && <p className="text-xs font-medium text-red-500">{errors.location}</p>}
                </div>

                {/* Salary */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="salary">Salary</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.salary}
                            onBlur={(e) => handleBlur(e, "salary", /^(?:[₹$€]?\s?\d{1,3}(?:,\d{3})*|\d+)(?:\.\d{1,2})?\s?[₹$€]?$/)}
                            onChange={(e) => {
                                handleValue("salary", e.target.value);
                                setError({ ...errors, salary: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="salary"
                            placeholder="Enter salary"
                        />
                    </div>
                    {errors.salary && <p className="text-xs font-medium text-red-500">{errors.salary}</p>}
                </div>

                {/* Type */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="type">Type</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.type}
                            onBlur={(e) => handleBlur(e, "type", /^[A-Za-z\s]+$/)}
                            onChange={(e) => {
                                handleValue("type", e.target.value);
                                setError({ ...errors, type: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="type"
                            placeholder="Enter type"
                        />
                    </div>
                    {errors.type && <p className="text-xs font-medium text-red-500">{errors.type}</p>}
                </div>

                {/* Skills */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="skills">Skills</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.skills}
                            onBlur={(e) => handleBlur(e, "skills", /^[A-Za-z\s,]+$/)}
                            onChange={(e) => {
                                handleValue("skills", e.target.value);
                                setError({ ...errors, skills: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="skills"
                            placeholder="Enter skills (comma separated)"
                        />
                    </div>
                    {errors.skills && <p className="text-xs font-medium text-red-500">{errors.skills}</p>}
                </div>

                {/* Work Mode */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="workMode">Work Mode</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.workMode}
                            onBlur={(e) => handleBlur(e, "workMode", /^[A-Za-z\s]+$/)}
                            onChange={(e) => {
                                handleValue("workMode", e.target.value);
                                setError({ ...errors, workMode: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="workMode"
                            placeholder="Enter work mode"
                        />
                    </div>
                    {errors.workMode && <p className="text-xs font-medium text-red-500">{errors.workMode}</p>}
                </div>

                {/* Experience Level */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 max-w-lg  mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="experienceLevel">Experience Level</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={value.experienceLevel}
                            onBlur={(e) => handleBlur(e, "experienceLevel", /^[A-Za-z\s]+$/)}
                            onChange={(e) => {
                                handleValue("experienceLevel", e.target.value);
                                setError({ ...errors, experienceLevel: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="experienceLevel"
                            placeholder="Enter experience level"
                        />
                    </div>
                    {errors.experienceLevel && <p className="text-xs font-medium text-red-500">{errors.experienceLevel}</p>}
                </div>
                                {/* Description */}
                <div className="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700 w-full mb-4">
                    <label className="font-medium transition-colors duration-300 ease-in-out peer-disabled:opacity-70 text-xs whitespace-nowrap text-black" htmlFor="description">Description</label>
                    <div className="relative w-full">
                        <textarea
                            value={value.description}
                            onBlur={(e) => handleBlur(e, "description", /^(?=\s*\S).*$/)}
                            onChange={(e) => {
                                handleValue("description", e.target.value);
                                setError({ ...errors, description: "" });
                            }}
                            className="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5"
                            id="description"
                            rows="3"
                            placeholder="Enter description"
                        ></textarea>
                    </div>
                    {errors.description && <p className="text-xs font-medium text-red-500">{errors.description}</p>}
                </div>
                </div>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-8">
                    Submit
                </button>
            </form>
        </>
    );
}
