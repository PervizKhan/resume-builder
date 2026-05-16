// app/page.tsx
'use client';

import { useState, useEffect } from 'react';

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
  const [isClient, setIsClient] = useState(false);
  
  const [fullName, setFullName] = useState('Alex Morgan');
  const [jobTitle, setJobTitle] = useState('Senior Frontend Architect');
  const [email, setEmail] = useState('alex.m@techstudio.com');
  const [phone, setPhone] = useState('+1 (415) 555-1234');
  const [address, setAddress] = useState('San Francisco, CA');
  const [linkedin, setLinkedin] = useState('linkedin.com/in/alexm');
  const [github, setGithub] = useState('github.com/alexmorgan');
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

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        }
        
        .welcome-banner {
          background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
          color: #1e293b;
          text-align: center;
          padding: 12px 20px;
          margin-bottom: 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .welcome-banner h2 {
          font-size: 1.3rem;
          font-weight: 700;
        }
        
        .welcome-banner p {
          font-size: 0.85rem;
          opacity: 0.9;
          margin-top: 4px;
        }
        
        .app-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 30px 24px;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .title-section h1 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .title-section p {
          color: rgba(255,255,255,0.9);
          margin-top: 5px;
        }
        
        .print-btn {
          background: #facc15;
          color: #1e293b;
          padding: 12px 28px;
          border-radius: 50px;
          border: none;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .print-btn:hover {
          background: #eab308;
          transform: translateY(-2px);
        }
        
        .builder-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }
        
        .form-panel {
          flex: 1.2;
          min-width: 350px;
        }
        
        .form-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.2);
          padding: 28px;
          position: sticky;
          top: 20px;
          max-height: 85vh;
          overflow-y: auto;
        }
        
        .form-card h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          border-bottom: 3px solid #facc15;
          display: inline-block;
          margin-bottom: 24px;
          padding-bottom: 8px;
        }
        
        .input-group {
          margin-bottom: 18px;
        }
        
        .input-group label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #64748b;
          display: block;
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }
        
        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          transition: all 0.2s;
          background: #f8fafc;
        }
        
        .input-group input:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: #facc15;
          background: white;
          box-shadow: 0 0 0 3px rgba(250,204,21,0.1);
        }
        
        .optional-badge {
          font-size: 0.6rem;
          background: #e2e8f0;
          color: #64748b;
          padding: 2px 8px;
          border-radius: 20px;
          margin-left: 8px;
          font-weight: 500;
        }
        
        .grid-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        
        .toggle-panel {
          background: #fefce8;
          border-radius: 20px;
          padding: 18px;
          margin: 24px 0;
        }
        
        .toggle-panel h3 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 14px;
        }
        
        .toggle-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .toggle-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          cursor: pointer;
          padding: 6px;
          border-radius: 10px;
        }
        
        .toggle-item:hover {
          background: rgba(250,204,21,0.2);
        }
        
        .dynamic-section {
          margin-bottom: 24px;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }
        
        .section-header h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #1e293b;
        }
        
        .add-btn {
          background: #facc15;
          color: #1e293b;
          padding: 6px 14px;
          border-radius: 30px;
          border: none;
          font-size: 0.7rem;
          font-weight: 600;
          cursor: pointer;
        }
        
        .dynamic-item {
          background: #f8fafc;
          padding: 14px;
          border-radius: 16px;
          margin-bottom: 12px;
          border: 1px solid #e2e8f0;
        }
        
        .dynamic-item input,
        .dynamic-item textarea {
          width: 100%;
          margin-bottom: 10px;
          padding: 10px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 0.8rem;
          font-family: 'Inter', sans-serif;
        }
        
        .remove-btn {
          color: #ef4444;
          background: none;
          border: none;
          font-size: 0.7rem;
          cursor: pointer;
          text-decoration: underline;
        }
        
        .preview-panel {
          flex: 2;
          min-width: 450px;
        }
        
        .resume-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.2);
          overflow: hidden;
        }
        
        .resume-two-column {
          display: flex;
          flex-wrap: wrap;
        }
        
        .resume-left {
          background: linear-gradient(135deg, #0a1927 0%, #0f2b3d 100%);
          color: #e2e8f0;
          flex: 1.2;
          padding: 35px 25px;
          min-width: 260px;
        }
        
        .resume-name {
          font-size: 1.7rem;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        
        .resume-title {
          color: #facc15;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 25px;
          display: inline-block;
          background: rgba(250,204,21,0.15);
          padding: 5px 14px;
          border-radius: 30px;
        }
        
        .left-section {
          margin-bottom: 28px;
        }
        
        .left-section h3 {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #facc15;
          border-left: 3px solid #facc15;
          padding-left: 12px;
          margin-bottom: 14px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.7rem;
          margin-bottom: 12px;
          word-break: break-word;
          color: #cbd5e1;
        }
        
        .contact-item i {
          width: 20px;
          color: #facc15;
          font-size: 0.8rem;
        }
        
        .skill-tag {
          background: rgba(255,255,255,0.12);
          padding: 5px 12px;
          border-radius: 25px;
          font-size: 0.68rem;
          display: inline-block;
          margin: 3px;
          color: #e2e8f0;
          font-weight: 500;
        }
        
        .resume-right {
          background: #f5f7fa;
          flex: 2;
          padding: 35px 30px;
        }
        
        .right-section {
          margin-bottom: 28px;
        }
        
        .right-section h2 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0a1927;
          border-bottom: 3px solid #facc15;
          display: inline-block;
          padding-bottom: 5px;
          margin-bottom: 18px;
        }
        
        .summary-text {
          font-size: 0.82rem;
          line-height: 1.6;
          color: #1e293b;
        }
        
        .exp-item, .edu-item, .cert-item {
          margin-bottom: 20px;
        }
        
        .exp-title {
          font-weight: 800;
          font-size: 0.88rem;
          color: #0a1927;
        }
        
        .exp-meta {
          font-size: 0.72rem;
          color: #475569;
          margin: 5px 0 6px 0;
          font-weight: 500;
        }
        
        .exp-desc {
          font-size: 0.78rem;
          color: #334155;
          line-height: 1.45;
        }
        
        .watermark::after {
          content: "Created with Resume Builder by Pervez Khan Afridi";
          position: fixed;
          bottom: 12px;
          right: 12px;
          font-size: 9px;
          color: rgba(0,0,0,0.25);
          font-family: monospace;
          pointer-events: none;
          z-index: 9999;
          background: rgba(255,255,255,0.85);
          padding: 4px 12px;
          border-radius: 20px;
        }
        
        @media print {
          .no-print {
            display: none !important;
          }
          .watermark::after {
            content: "Created with Resume Builder by Pervez Khan Afridi";
            position: fixed;
            bottom: 8px;
            right: 8px;
            font-size: 7px;
            opacity: 0.3;
            background: transparent;
          }
          .resume-card {
            box-shadow: none;
          }
          .resume-two-column {
            break-inside: avoid;
          }
          @page {
            size: A4;
            margin: 1.2cm;
          }
          .resume-right {
            background: #f5f7fa !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        
        @media (max-width: 900px) {
          .builder-layout {
            flex-direction: column;
          }
          .form-card {
            position: static;
            max-height: none;
          }
          .resume-two-column {
            flex-direction: column;
          }
          .title-section h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="watermark">
        <div className="app-container">
          <div className="welcome-banner no-print">
            <h2>✨ Welcome to Resume Builder by Pervez Khan Afridi ✨</h2>
            <p>Create your professional resume in minutes | Print ready | Two-column design</p>
          </div>
          
          <div className="header no-print">
            <div className="title-section">
              <h1><i className="fas fa-file-alt" style={{color: '#facc15', marginRight: '10px'}}></i>Professional Resume Builder</h1>
              <p>Customize your resume - All sections are optional</p>
            </div>
            <button className="print-btn" onClick={handlePrint}>
              <i className="fas fa-print"></i> Print / Save PDF
            </button>
          </div>

          <div className="builder-layout">
            <div className="form-panel no-print">
              <div className="form-card">
                <h2><i className="fas fa-user-edit" style={{color: '#facc15', marginRight: '8px'}}></i>Employee Details</h2>
                
                <div className="grid-2col">
                  <div className="input-group"><label>Full Name</label><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Alex Morgan" /></div>
                  <div className="input-group"><label>Job Title</label><input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Senior Developer" /></div>
                  <div className="input-group"><label>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" /></div>
                  <div className="input-group"><label>Phone</label><input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 234 567 890" /></div>
                  <div className="input-group"><label>Location</label><input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="City, Country" /></div>
                  <div className="input-group"><label>LinkedIn <span className="optional-badge">Optional</span></label><input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/username" /></div>
                  <div className="input-group"><label>GitHub <span className="optional-badge">Optional</span></label><input type="text" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="github.com/username" /></div>
                </div>
                
                <div className="input-group"><label>Professional Summary</label><textarea rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Write a brief professional summary..."></textarea></div>
                <div className="input-group"><label>Skills (comma separated)</label><input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="React, TypeScript, Node.js" /></div>

                <div className="toggle-panel">
                  <h3><i className="fas fa-layer-group"></i> Toggle Resume Sections</h3>
                  <div className="toggle-grid">
                    <label className="toggle-item"><input type="checkbox" checked={toggles.summary} onChange={(e) => setToggles({...toggles, summary: e.target.checked})} /> Summary</label>
                    <label className="toggle-item"><input type="checkbox" checked={toggles.experience} onChange={(e) => setToggles({...toggles, experience: e.target.checked})} /> Work Experience</label>
                    <label className="toggle-item"><input type="checkbox" checked={toggles.education} onChange={(e) => setToggles({...toggles, education: e.target.checked})} /> Education</label>
                    <label className="toggle-item"><input type="checkbox" checked={toggles.certificates} onChange={(e) => setToggles({...toggles, certificates: e.target.checked})} /> Certificates</label>
                    <label className="toggle-item"><input type="checkbox" checked={toggles.skills} onChange={(e) => setToggles({...toggles, skills: e.target.checked})} /> Skills</label>
                    <label className="toggle-item"><input type="checkbox" checked={toggles.contact} onChange={(e) => setToggles({...toggles, contact: e.target.checked})} /> Contact</label>
                  </div>
                </div>

                <div className="dynamic-section">
                  <div className="section-header"><h3><i className="fas fa-briefcase"></i> Work Experience</h3><button className="add-btn" onClick={addExperience}>+ Add Role</button></div>
                  {experiences.map(exp => (
                    <div key={exp.id} className="dynamic-item">
                      <input type="text" placeholder="Job Title" value={exp.title} onChange={(e) => updateExperience(exp.id, 'title', e.target.value)} />
                      <input type="text" placeholder="Company" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} />
                      <input type="text" placeholder="Period" value={exp.period} onChange={(e) => updateExperience(exp.id, 'period', e.target.value)} />
                      <textarea placeholder="Description" value={exp.description} onChange={(e) => updateExperience(exp.id, 'description', e.target.value)} rows={2}></textarea>
                      <button className="remove-btn" onClick={() => removeExperience(exp.id)}><i className="fas fa-trash-alt"></i> Remove</button>
                    </div>
                  ))}
                </div>

                <div className="dynamic-section">
                  <div className="section-header"><h3><i className="fas fa-graduation-cap"></i> Education</h3><button className="add-btn" onClick={addEducation}>+ Add Degree</button></div>
                  {educations.map(edu => (
                    <div key={edu.id} className="dynamic-item">
                      <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} />
                      <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)} />
                      <input type="text" placeholder="Year" value={edu.year} onChange={(e) => updateEducation(edu.id, 'year', e.target.value)} />
                      <button className="remove-btn" onClick={() => removeEducation(edu.id)}><i className="fas fa-trash-alt"></i> Remove</button>
                    </div>
                  ))}
                </div>

                <div className="dynamic-section">
                  <div className="section-header"><h3><i className="fas fa-certificate"></i> Certifications</h3><button className="add-btn" onClick={addCertificate}>+ Add Certificate</button></div>
                  {certificates.map(cert => (
                    <div key={cert.id} className="dynamic-item">
                      <input type="text" placeholder="Certificate Name" value={cert.name} onChange={(e) => updateCertificate(cert.id, 'name', e.target.value)} />
                      <input type="text" placeholder="Issuer" value={cert.issuer} onChange={(e) => updateCertificate(cert.id, 'issuer', e.target.value)} />
                      <input type="text" placeholder="Year" value={cert.year} onChange={(e) => updateCertificate(cert.id, 'year', e.target.value)} />
                      <button className="remove-btn" onClick={() => removeCertificate(cert.id)}><i className="fas fa-trash-alt"></i> Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="preview-panel">
              <div className="resume-card">
                <div className="resume-two-column">
                  <div className="resume-left">
                    <div className="resume-name">{fullName || 'Your Name'}</div>
                    <div className="resume-title">{jobTitle || 'Professional'}</div>
                    
                    {toggles.contact && (
                      <div className="left-section">
                        <h3>CONTACT</h3>
                        <div className="contact-item"><i className="fas fa-envelope"></i> {email || 'email@example.com'}</div>
                        <div className="contact-item"><i className="fas fa-phone-alt"></i> {phone || '+1 234 567 890'}</div>
                        <div className="contact-item"><i className="fas fa-map-marker-alt"></i> {address || 'Your Location'}</div>
                        {linkedin && linkedin.trim() !== '' && <div className="contact-item"><i className="fab fa-linkedin"></i> {linkedin}</div>}
                        {github && github.trim() !== '' && <div className="contact-item"><i className="fab fa-github"></i> {github}</div>}
                      </div>
                    )}
                    
                    {toggles.skills && (
                      <div className="left-section">
                        <h3>SKILLS</h3>
                        <div>
                          {skillsArray.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="resume-right">
                    {toggles.summary && (
                      <div className="right-section">
                        <h2>PROFILE</h2>
                        <div className="summary-text">{summary || 'No summary provided.'}</div>
                      </div>
                    )}
                    
                    {toggles.experience && (
                      <div className="right-section">
                        <h2>WORK EXPERIENCE</h2>
                        {experiences.map(exp => (
                          <div key={exp.id} className="exp-item">
                            <div className="exp-title">{exp.title || 'Position'}</div>
                            <div className="exp-meta">{exp.company || 'Company'} | {exp.period || 'Date'}</div>
                            <div className="exp-desc">{exp.description || 'Description'}</div>
                          </div>
                        ))}
                        {experiences.length === 0 && <div className="exp-desc">No work experience added.</div>}
                      </div>
                    )}
                    
                    {toggles.education && (
                      <div className="right-section">
                        <h2>EDUCATION</h2>
                        {educations.map(edu => (
                          <div key={edu.id} className="edu-item">
                            <div className="exp-title">{edu.degree || 'Degree'}</div>
                            <div className="exp-meta">{edu.institution || 'Institution'} | {edu.year || 'Year'}</div>
                          </div>
                        ))}
                        {educations.length === 0 && <div className="exp-desc">No education added.</div>}
                      </div>
                    )}
                    
                    {toggles.certificates && (
                      <div className="right-section">
                        <h2>CERTIFICATIONS</h2>
                        {certificates.map(cert => (
                          <div key={cert.id} className="cert-item">
                            <div className="exp-title">📜 {cert.name || 'Certificate'}</div>
                            <div className="exp-meta">{cert.issuer || 'Issuer'} • {cert.year || 'Year'}</div>
                          </div>
                        ))}
                        {certificates.length === 0 && <div className="exp-desc">No certifications added.</div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}