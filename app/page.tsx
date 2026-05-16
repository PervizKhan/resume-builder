// app/page.tsx (simplified with Tailwind classes)
'use client';

import { useState } from 'react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  year: string;
}

export default function ResumeBuilder() {
  const [fullName, setFullName] = useState('Alex Morgan');
  const [jobTitle, setJobTitle] = useState('Senior Frontend Architect');
  const [email, setEmail] = useState('alex.m@techstudio.com');
  const [phone, setPhone] = useState('+1 (415) 555-1234');
  const [address, setAddress] = useState('San Francisco, CA');
  const [website, setWebsite] = useState('linkedin.com/in/alexm');
  const [summary, setSummary] = useState('Creative Frontend Architect with 8+ years of experience building scalable web apps. Expert in React, Vue, and design systems. Passionate about UX and performance.');
  const [skills, setSkills] = useState('React, Vue.js, TypeScript, Tailwind, Figma, Webpack, Jest');
  
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: 1, title: 'Lead Frontend Engineer', company: 'DesignHub Inc.', period: '2022 – Present', description: 'Led redesign of design system, improved performance by 40%.' },
    { id: 2, title: 'UI Developer', company: 'CreativeLabs', period: '2019 – 2022', description: 'Developed reusable component libraries and mentored juniors.' }
  ]);
  
  const [educations, setEducations] = useState<Education[]>([
    { id: 3, degree: 'BSc Computer Science', institution: 'Stanford University', year: '2015-2019' },
    { id: 4, degree: 'Frontend Nanodegree', institution: 'Udacity', year: '2020' }
  ]);
  
  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: 5, name: 'AWS Certified Developer', issuer: 'Amazon', year: '2023' },
    { id: 6, name: 'Scrum Master Certified', issuer: 'Scrum Alliance', year: '2022' }
  ]);
  
  const [toggles, setToggles] = useState({
    summary: true,
    experience: true,
    education: true,
    certificates: true,
    skills: true,
    contact: true
  });

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now(), title: 'New Role', company: 'Company Name', period: '2024 - Present', description: 'Describe responsibilities' }]);
  };
  
  const addEducation = () => {
    setEducations([...educations, { id: Date.now(), degree: "Master's Degree", institution: 'University', year: '2024' }]);
  };
  
  const addCertificate = () => {
    setCertificates([...certificates, { id: Date.now(), name: 'New Certification', issuer: 'Issuing Body', year: '2024' }]);
  };
  
  const removeExperience = (id: number) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };
  
  const removeEducation = (id: number) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };
  
  const removeCertificate = (id: number) => {
    setCertificates(certificates.filter(cert => cert.id !== id));
  };
  
  const updateExperience = (id: number, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };
  
  const updateEducation = (id: number, field: keyof Education, value: string) => {
    setEducations(educations.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));
  };
  
  const updateCertificate = (id: number, field: keyof Certificate, value: string) => {
    setCertificates(certificates.map(cert => cert.id === id ? { ...cert, [field]: value } : cert));
  };

  const handlePrint = () => {
    window.print();
  };

  const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto p-6 md:p-8">
        {/* Header */}
        <div className="no-print mb-6 flex justify-between items-center flex-wrap gap-3">
          <div>
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
              <i className="fas fa-file-alt text-yellow-400 mr-3"></i>
              Professional Resume Builder
            </h1>
            <p className="text-white text-opacity-90 mt-1">Create, customize, and print professional resumes instantly</p>
          </div>
          <button onClick={handlePrint} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 font-semibold transform hover:scale-105">
            <i className="fas fa-print"></i> Print / Save PDF
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Panel */}
          <div className="lg:w-2/5 no-print fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6 border border-gray-200 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center gap-2 border-b pb-3 mb-4">
                <i className="fas fa-user-edit text-yellow-500 text-2xl"></i>
                <h2 className="font-bold text-2xl text-gray-800">Employee Details</h2>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div><label className="text-xs font-semibold uppercase text-gray-500">Full name</label><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border rounded-xl p-2 mt-1 focus:ring-2 focus:ring-yellow-400 focus:border-transparent" /></div>
                <div><label className="text-xs font-semibold uppercase text-gray-500">Job Title</label><input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full border rounded-xl p-2 mt-1 focus:ring-2 focus:ring-yellow-400" /></div>
                <div><label className="text-xs font-semibold uppercase text-gray-500">Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-xl p-2 mt-1" /></div>
                <div><label className="text-xs font-semibold uppercase text-gray-500">Phone</label><input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded-xl p-2 mt-1" /></div>
                <div><label className="text-xs font-semibold uppercase text-gray-500">Location</label><input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border rounded-xl p-2 mt-1" /></div>
                <div><label className="text-xs font-semibold uppercase text-gray-500">LinkedIn/Web</label><input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full border rounded-xl p-2 mt-1" /></div>
              </div>
              
              <div className="mb-5"><label className="text-xs font-semibold uppercase text-gray-500">Professional Summary</label><textarea rows={2} value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full border rounded-xl p-2 mt-1 focus:ring-2 focus:ring-yellow-400"></textarea></div>
              <div className="mb-5"><label className="text-xs font-semibold uppercase text-gray-500">Skills (comma separated)</label><input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full border rounded-xl p-2 mt-1 focus:ring-2 focus:ring-yellow-400" /></div>

              {/* Section Toggles */}
              <div className="border-t border-b py-4 my-4 bg-yellow-50 rounded-lg px-3">
                <h3 className="font-bold text-gray-700 mb-2"><i className="fas fa-layer-group"></i> Toggle Resume Sections</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(toggles).map(([key, value]) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer hover:bg-yellow-100 p-1 rounded transition">
                      <input type="checkbox" checked={value} onChange={(e) => setToggles({...toggles, [key]: e.target.checked})} className="w-4 h-4" />
                      <span className="text-sm"><i className={`fas fa-${key === 'summary' ? 'user-circle' : key === 'experience' ? 'briefcase' : key === 'education' ? 'graduation-cap' : key === 'certificates' ? 'certificate' : key === 'skills' ? 'code' : 'address-card'}`}></i> {key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2"><label className="font-bold text-gray-800"><i className="fas fa-briefcase text-yellow-600"></i> Work Experience</label><button onClick={addExperience} className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full transition"><i className="fas fa-plus"></i> Add Role</button></div>
                <div className="space-y-3 mt-3 max-h-60 overflow-y-auto">
                  {experiences.map(exp => (
                    <div key={exp.id} className="bg-gray-50 p-3 rounded-xl border hover:shadow-md transition">
                      <input type="text" placeholder="Job Title" value={exp.title} onChange={(e) => updateExperience(exp.id, 'title', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <input type="text" placeholder="Company" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <input type="text" placeholder="Period" value={exp.period} onChange={(e) => updateExperience(exp.id, 'period', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <textarea placeholder="Description" value={exp.description} onChange={(e) => updateExperience(exp.id, 'description', e.target.value)} className="w-full border rounded-lg p-1 px-2" rows={1}></textarea>
                      <button onClick={() => removeExperience(exp.id)} className="text-red-500 text-xs hover:underline mt-1"><i className="fas fa-trash-alt"></i> Remove</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2"><label className="font-bold text-gray-800"><i className="fas fa-university"></i> Education</label><button onClick={addEducation} className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full transition"><i className="fas fa-plus"></i> Add Degree</button></div>
                <div className="space-y-3 mt-3 max-h-60 overflow-y-auto">
                  {educations.map(edu => (
                    <div key={edu.id} className="bg-gray-50 p-3 rounded-xl border hover:shadow-md transition">
                      <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <input type="text" placeholder="Year" value={edu.year} onChange={(e) => updateEducation(edu.id, 'year', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <button onClick={() => removeEducation(edu.id)} className="text-red-500 text-xs hover:underline"><i className="fas fa-trash-alt"></i> Remove</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2"><label className="font-bold text-gray-800"><i className="fas fa-certificate"></i> Certifications</label><button onClick={addCertificate} className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full transition"><i className="fas fa-plus"></i> Add Certificate</button></div>
                <div className="space-y-3 mt-3 max-h-48 overflow-y-auto">
                  {certificates.map(cert => (
                    <div key={cert.id} className="bg-gray-50 p-3 rounded-xl border hover:shadow-md transition">
                      <input type="text" placeholder="Certificate Name" value={cert.name} onChange={(e) => updateCertificate(cert.id, 'name', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <input type="text" placeholder="Issuer" value={cert.issuer} onChange={(e) => updateCertificate(cert.id, 'issuer', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <input type="text" placeholder="Year" value={cert.year} onChange={(e) => updateCertificate(cert.id, 'year', e.target.value)} className="w-full border rounded-lg p-1 px-2 mb-1" />
                      <button onClick={() => removeCertificate(cert.id)} className="text-red-500 text-xs hover:underline"><i className="fas fa-trash-alt"></i> Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="lg:w-3/5 fade-in">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none transition-all hover:shadow-3xl" id="resumePreview">
              <div className="flex flex-col md:flex-row">
                {/* Left Column */}
                <div className="bg-gray-900 text-white p-6 md:w-1/3">
                  <div className="mb-5">
                    <h1 className="text-2xl font-bold leading-tight">{fullName || 'Your Name'}</h1>
                    <div className="text-yellow-400 text-sm font-semibold mt-1">{jobTitle || 'Professional'}</div>
                  </div>
                  {toggles.contact && (
                    <div className="mb-5">
                      <h3 className="text-xs font-semibold uppercase tracking-wider border-l-3 border-yellow-400 pl-2 mb-2">Contact</h3>
                      <div className="space-y-1 text-sm break-words"><i className="fas fa-envelope w-4 mr-2 text-yellow-400"></i> {email}</div>
                      <div className="space-y-1 text-sm mt-1"><i className="fas fa-phone-alt w-4 mr-2 text-yellow-400"></i> {phone}</div>
                      <div className="space-y-1 text-sm mt-1"><i className="fas fa-map-marker-alt w-4 mr-2 text-yellow-400"></i> {address}</div>
                      <div className="space-y-1 text-sm mt-1 break-words"><i className="fas fa-link w-4 mr-2 text-yellow-400"></i> {website}</div>
                    </div>
                  )}
                  {toggles.skills && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider border-l-3 border-yellow-400 pl-2 mb-2">Core Skills</h3>
                      <div className="flex flex-wrap gap-1">
                        {skillsArray.map((skill, idx) => (
                          <span key={idx} className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="bg-white p-6 md:w-2/3">
                  {toggles.summary && (
                    <div className="mb-5">
                      <h2 className="font-bold text-gray-800 border-b-2 border-yellow-400 inline-block pb-1 text-md">PROFILE</h2>
                      <p className="text-gray-700 text-sm mt-2 leading-relaxed">{summary}</p>
                    </div>
                  )}
                  {toggles.experience && (
                    <div className="mb-5">
                      <h2 className="font-bold text-gray-800 border-b-2 border-yellow-400 inline-block pb-1 text-md">WORK EXPERIENCE</h2>
                      <div className="mt-2 space-y-3">
                        {experiences.map(exp => (
                          <div key={exp.id} className="mb-2">
                            <div className="font-bold text-gray-800 text-sm">{exp.title}</div>
                            <div className="text-xs text-gray-500">{exp.company} | {exp.period}</div>
                            <div className="text-xs text-gray-600 mt-1">{exp.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {toggles.education && (
                    <div className="mb-5">
                      <h2 className="font-bold text-gray-800 border-b-2 border-yellow-400 inline-block pb-1 text-md">EDUCATION</h2>
                      <div className="mt-2 space-y-2">
                        {educations.map(edu => (
                          <div key={edu.id} className="mb-2">
                            <div className="font-semibold text-gray-800 text-sm">{edu.degree}</div>
                            <div className="text-xs text-gray-500">{edu.institution} | {edu.year}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {toggles.certificates && (
                    <div>
                      <h2 className="font-bold text-gray-800 border-b-2 border-yellow-400 inline-block pb-1 text-md">CERTIFICATIONS</h2>
                      <div className="mt-2 space-y-2">
                        {certificates.map(cert => (
                          <div key={cert.id} className="mb-2">
                            <div className="font-medium text-sm">📜 {cert.name}</div>
                            <div className="text-xs text-gray-500">{cert.issuer} • {cert.year}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}