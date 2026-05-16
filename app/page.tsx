// app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

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
  const [showExampleModal, setShowExampleModal] = useState<string | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const [fullName, setFullName] = useState('Sarah Johnson');
  const [jobTitle, setJobTitle] = useState('Marketing Manager');
  const [email, setEmail] = useState('sarah.j@marketingpro.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [address, setAddress] = useState('New York, NY');
  const [linkedin, setLinkedin] = useState('linkedin.com/in/sarahjohnson');
  const [github, setGithub] = useState('');
  const [summary, setSummary] = useState('Results-driven Marketing Manager with 6+ years of experience in digital strategy and brand management. Proven track record of increasing engagement by 150% and leading successful product launches.');
  const [skills, setSkills] = useState('Digital Marketing, SEO, Content Strategy, Analytics, Brand Management, Social Media');
  
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: 1, title: 'Senior Marketing Manager', company: 'Digital Growth Agency', period: '2022 – Present', description: 'Led marketing campaigns resulting in 200% ROI increase. Managed team of 5 marketing specialists.' },
    { id: 2, title: 'Marketing Specialist', company: 'Brand Solutions Inc.', period: '2019 – 2022', description: 'Developed social media strategy growing followers by 300%. Increased conversion rates by 45%.' }
  ]);
  
  const [educations, setEducations] = useState<Education[]>([
    { id: 3, degree: 'MBA in Marketing', institution: 'Columbia University', year: '2017-2019' },
    { id: 4, degree: 'BBA in Business', institution: 'NYU Stern', year: '2013-2017' }
  ]);
  
  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: 5, name: 'Google Digital Marketing Certification', issuer: 'Google', year: '2023' },
    { id: 6, name: 'HubSpot Content Marketing', issuer: 'HubSpot', year: '2022' }
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

  const exampleData = {
    experience: {
      title: 'Senior Project Manager',
      company: 'Tech Solutions Inc.',
      period: '2021 – Present',
      description: 'Led cross-functional teams to deliver 15+ projects on time and under budget. Implemented agile methodologies increasing team productivity by 40%.'
    },
    education: {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      year: '2018-2020'
    },
    certificate: {
      name: 'Project Management Professional (PMP)',
      issuer: 'PMI',
      year: '2023'
    }
  };

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

  const addExampleExperience = () => {
    setExperiences([...experiences, { id: Date.now(), ...exampleData.experience }]);
    setShowExampleModal(null);
  };

  const addExampleEducation = () => {
    setEducations([...educations, { id: Date.now(), ...exampleData.education }]);
    setShowExampleModal(null);
  };

  const addExampleCertificate = () => {
    setCertificates([...certificates, { id: Date.now(), ...exampleData.certificate }]);
    setShowExampleModal(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          min-height: 100vh;
        }
        
        /* Mobile First Responsive Design */
        .app-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px;
        }
        
        @media (min-width: 768px) {
          .app-container {
            padding: 30px 24px;
          }
        }
        
        .welcome-banner {
          background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
          color: #1e293b;
          text-align: center;
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .welcome-banner h2 {
          font-size: 1.1rem;
          font-weight: 700;
        }
        
        .welcome-banner p {
          font-size: 0.7rem;
          margin-top: 4px;
        }
        
        @media (min-width: 768px) {
          .welcome-banner h2 {
            font-size: 1.3rem;
          }
          .welcome-banner p {
            font-size: 0.85rem;
          }
        }
        
        .header {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        @media (min-width: 768px) {
          .header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          }
        }
        
        .title-section h1 {
          font-size: 1.3rem;
          font-weight: 800;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .title-section p {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.9);
          margin-top: 4px;
        }
        
        @media (min-width: 768px) {
          .title-section h1 {
            font-size: 2rem;
          }
          .title-section p {
            font-size: 0.85rem;
          }
        }
        
        .print-btn {
          background: #facc15;
          color: #1e293b;
          padding: 10px 20px;
          border-radius: 50px;
          border: none;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        @media (min-width: 768px) {
          .print-btn {
            padding: 12px 28px;
            font-size: 0.9rem;
          }
        }
        
        .builder-layout {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        @media (min-width: 1024px) {
          .builder-layout {
            flex-direction: row;
            gap: 30px;
          }
        }
        
        .form-panel {
          flex: 1.2;
        }
        
        .form-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.2);
          padding: 20px;
          max-height: none;
          overflow-y: visible;
        }
        
        @media (min-width: 768px) {
          .form-card {
            padding: 28px;
            position: sticky;
            top: 20px;
            max-height: 85vh;
            overflow-y: auto;
          }
        }
        
        .form-card h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          border-bottom: 3px solid #facc15;
          display: inline-block;
          margin-bottom: 20px;
          padding-bottom: 6px;
        }
        
        @media (min-width: 768px) {
          .form-card h2 {
            font-size: 1.5rem;
            margin-bottom: 24px;
          }
        }
        
        .input-group {
          margin-bottom: 14px;
        }
        
        .input-group label {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #64748b;
          display: block;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }
        
        @media (min-width: 768px) {
          .input-group label {
            font-size: 0.75rem;
            margin-bottom: 6px;
          }
        }
        
        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          background: #f8fafc;
        }
        
        @media (min-width: 768px) {
          .input-group input,
          .input-group textarea {
            padding: 12px 16px;
            font-size: 0.85rem;
          }
        }
        
        .grid-2col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        
        @media (min-width: 640px) {
          .grid-2col {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
        }
        
        .optional-badge {
          font-size: 0.55rem;
          background: #e2e8f0;
          color: #64748b;
          padding: 2px 6px;
          border-radius: 20px;
          margin-left: 6px;
        }
        
        .toggle-panel {
          background: #fefce8;
          border-radius: 16px;
          padding: 14px;
          margin: 18px 0;
        }
        
        .toggle-panel h3 {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 10px;
        }
        
        .toggle-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        
        .toggle-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          cursor: pointer;
        }
        
        .dynamic-section {
          margin-bottom: 20px;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .section-header h3 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1e293b;
        }
        
        .button-group {
          display: flex;
          gap: 8px;
        }
        
        .add-btn, .example-btn {
          background: #facc15;
          color: #1e293b;
          padding: 4px 10px;
          border-radius: 30px;
          border: none;
          font-size: 0.65rem;
          font-weight: 600;
          cursor: pointer;
        }
        
        .example-btn {
          background: #3b82f6;
          color: white;
        }
        
        .dynamic-item {
          background: #f8fafc;
          padding: 12px;
          border-radius: 14px;
          margin-bottom: 10px;
          border: 1px solid #e2e8f0;
        }
        
        .dynamic-item input,
        .dynamic-item textarea {
          width: 100%;
          margin-bottom: 8px;
          padding: 8px 10px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.75rem;
        }
        
        .remove-btn {
          color: #ef4444;
          background: none;
          border: none;
          font-size: 0.65rem;
          cursor: pointer;
        }
        
        .preview-panel {
          flex: 2;
        }
        
        /* CRITICAL FIX: CSS Grid for equal height columns */
        .resume-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.2);
          overflow: hidden;
          display: block;
        }
        
        .resume-two-column {
          display: grid;
          grid-template-columns: 1fr 2fr;
          align-items: stretch;
        }
        
        @media (max-width: 768px) {
          .resume-two-column {
            grid-template-columns: 1fr;
          }
        }
        
        .resume-left {
          background: linear-gradient(135deg, #0a1927 0%, #0f2b3d 100%);
          color: #e2e8f0;
          padding: 25px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .resume-right {
          background: #f5f7fa;
          padding: 25px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .resume-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 6px;
        }
        
        @media (min-width: 768px) {
          .resume-name {
            font-size: 1.6rem;
          }
        }
        
        .resume-title {
          color: #facc15;
          font-size: 0.7rem;
          font-weight: 600;
          margin-bottom: 20px;
          display: inline-block;
          background: rgba(250,204,21,0.15);
          padding: 4px 10px;
          border-radius: 30px;
        }
        
        @media (min-width: 768px) {
          .resume-title {
            font-size: 0.8rem;
          }
        }
        
        .left-section {
          margin-bottom: 20px;
        }
        
        .left-section h3 {
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #facc15;
          border-left: 3px solid #facc15;
          padding-left: 10px;
          margin-bottom: 10px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.6rem;
          margin-bottom: 8px;
          word-break: break-word;
        }
        
        .contact-item i {
          width: 18px;
          color: #facc15;
          font-size: 0.65rem;
        }
        
        .skill-tag {
          background: rgba(255,255,255,0.12);
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.6rem;
          display: inline-block;
          margin: 2px;
        }
        
        .right-section {
          margin-bottom: 20px;
        }
        
        .right-section h2 {
          font-size: 0.8rem;
          font-weight: 800;
          color: #0a1927;
          border-bottom: 2px solid #facc15;
          display: inline-block;
          padding-bottom: 3px;
          margin-bottom: 12px;
        }
        
        @media (min-width: 768px) {
          .right-section h2 {
            font-size: 0.9rem;
          }
        }
        
        .summary-text {
          font-size: 0.7rem;
          line-height: 1.5;
          color: #1e293b;
        }
        
        .exp-title {
          font-weight: 800;
          font-size: 0.75rem;
          color: #0a1927;
        }
        
        .exp-meta {
          font-size: 0.6rem;
          color: #475569;
          margin: 3px 0 4px 0;
        }
        
        .exp-desc {
          font-size: 0.65rem;
          color: #334155;
          line-height: 1.4;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 16px;
        }
        
        .modal-content {
          background: white;
          border-radius: 20px;
          padding: 24px;
          max-width: 400px;
          width: 100%;
        }
        
        .modal-content h3 {
          font-size: 1.2rem;
          margin-bottom: 16px;
        }
        
        .modal-example {
          background: #f1f5f9;
          padding: 16px;
          border-radius: 12px;
          margin: 16px 0;
        }
        
        .modal-example p {
          font-size: 0.8rem;
          margin: 4px 0;
        }
        
        .modal-buttons {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        
        .modal-buttons button {
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }
        
        .confirm-btn {
          background: #facc15;
          color: #1e293b;
        }
        
        .cancel-btn {
          background: #e2e8f0;
          color: #475569;
        }
        
        .watermark::after {
          content: "Created with Resume Builder by Pervez Khan Afridi";
          position: fixed;
          bottom: 8px;
          right: 8px;
          font-size: 7px;
          color: rgba(0,0,0,0.25);
          font-family: monospace;
          pointer-events: none;
          z-index: 9999;
          background: rgba(255,255,255,0.85);
          padding: 3px 8px;
          border-radius: 16px;
        }
        
        @media (min-width: 768px) {
          .watermark::after {
            bottom: 12px;
            right: 12px;
            font-size: 9px;
            padding: 4px 12px;
          }
        }
        
        /* PERFECT PRINT STYLES - Single Page, Equal Columns */
        @media print {
          /* Reset everything */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html, body {
            height: auto;
            width: 100%;
            background: white;
          }
          
          /* Hide non-printable elements */
          .no-print,
          .welcome-banner,
          .header,
          .form-panel,
          .modal-overlay,
          .watermark::after {
            display: none !important;
          }
          
          /* Make preview fill the printable area */
          .preview-panel {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          
          .resume-card {
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            margin: 0 !important;
          }
          
          /* CSS Grid for equal height columns in print */
          .resume-two-column {
            display: grid !important;
            grid-template-columns: 1fr 2fr !important;
            align-items: stretch !important;
            gap: 0 !important;
            width: 100% !important;
          }
          
          .resume-left {
            background: #0a1927 !important;
            color: #e2e8f0 !important;
            padding: 20px !important;
            height: auto !important;
            min-height: 100% !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .resume-right {
            background: #f5f7fa !important;
            padding: 20px !important;
            height: auto !important;
            min-height: 100% !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Typography for print */
          .resume-name {
            font-size: 18pt !important;
            margin-bottom: 8pt !important;
          }
          
          .resume-title {
            font-size: 11pt !important;
            margin-bottom: 16pt !important;
          }
          
          .left-section h3, .right-section h2 {
            font-size: 10pt !important;
            margin-bottom: 8pt !important;
          }
          
          .contact-item, .summary-text, .exp-desc {
            font-size: 9pt !important;
            line-height: 1.4 !important;
          }
          
          .exp-title {
            font-size: 10pt !important;
          }
          
          .exp-meta {
            font-size: 8pt !important;
          }
          
          .skill-tag {
            font-size: 8pt !important;
            padding: 2px 6px !important;
          }
          
          /* Spacing adjustments */
          .left-section, .right-section {
            margin-bottom: 12pt !important;
          }
          
          .exp-item, .edu-item, .cert-item {
            margin-bottom: 8pt !important;
          }
          
          /* Page settings - Single page only */
          @page {
            size: A4;
            margin: 0.8cm;
          }
          
          /* Prevent page breaks inside columns */
          .resume-left, .resume-right {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          
          /* Ensure no extra pages */
          body {
            height: auto;
          }
        }
        
        @media (max-width: 768px) {
          .builder-layout {
            flex-direction: column;
          }
          .form-card {
            position: static;
            max-height: none;
          }
          .resume-two-column {
            grid-template-columns: 1fr;
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
            <p>Create your professional resume | Mobile friendly | Prints perfectly on one page</p>
          </div>
          
          <div className="header no-print">
            <div className="title-section">
              <h1><i className="fas fa-file-alt" style={{color: '#facc15', marginRight: '8px'}}></i>Professional Resume Builder</h1>
              <p>Fill your details - All sections are optional</p>
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
                  <div className="input-group"><label>Full Name</label><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Sarah Johnson" /></div>
                  <div className="input-group"><label>Job Title</label><input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Marketing Manager" /></div>
                  <div className="input-group"><label>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" /></div>
                  <div className="input-group"><label>Phone</label><input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 555 123 4567" /></div>
                  <div className="input-group"><label>Location</label><input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="City, Country" /></div>
                  <div className="input-group"><label>LinkedIn <span className="optional-badge">Optional</span></label><input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/username" /></div>
                  <div className="input-group"><label>GitHub <span className="optional-badge">Optional</span></label><input type="text" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="github.com/username" /></div>
                </div>
                
                <div className="input-group"><label>Professional Summary</label><textarea rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Write a brief professional summary..."></textarea></div>
                <div className="input-group"><label>Skills (comma separated)</label><input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skill 1, Skill 2, Skill 3" /></div>

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
                  <div className="section-header">
                    <h3><i className="fas fa-briefcase"></i> Work Experience</h3>
                    <div className="button-group">
                      <button className="example-btn" onClick={() => setShowExampleModal('experience')}>📋 Example</button>
                      <button className="add-btn" onClick={addExperience}>+ Add Role</button>
                    </div>
                  </div>
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
                  <div className="section-header">
                    <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                    <div className="button-group">
                      <button className="example-btn" onClick={() => setShowExampleModal('education')}>📋 Example</button>
                      <button className="add-btn" onClick={addEducation}>+ Add Degree</button>
                    </div>
                  </div>
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
                  <div className="section-header">
                    <h3><i className="fas fa-certificate"></i> Certifications</h3>
                    <div className="button-group">
                      <button className="example-btn" onClick={() => setShowExampleModal('certificate')}>📋 Example</button>
                      <button className="add-btn" onClick={addCertificate}>+ Add Certificate</button>
                    </div>
                  </div>
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
              <div className="resume-card" ref={resumeRef}>
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

      {/* Modals for Examples */}
      {showExampleModal === 'experience' && (
        <div className="modal-overlay" onClick={() => setShowExampleModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>📋 Example Work Experience</h3>
            <div className="modal-example">
              <p><strong>Title:</strong> Senior Project Manager</p>
              <p><strong>Company:</strong> Tech Solutions Inc.</p>
              <p><strong>Period:</strong> 2021 – Present</p>
              <p><strong>Description:</strong> Led cross-functional teams to deliver 15+ projects on time and under budget. Implemented agile methodologies increasing team productivity by 40%.</p>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowExampleModal(null)}>Cancel</button>
              <button className="confirm-btn" onClick={addExampleExperience}>Add Example</button>
            </div>
          </div>
        </div>
      )}

      {showExampleModal === 'education' && (
        <div className="modal-overlay" onClick={() => setShowExampleModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>📋 Example Education</h3>
            <div className="modal-example">
              <p><strong>Degree:</strong> Master of Science in Computer Science</p>
              <p><strong>Institution:</strong> Stanford University</p>
              <p><strong>Year:</strong> 2018-2020</p>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowExampleModal(null)}>Cancel</button>
              <button className="confirm-btn" onClick={addExampleEducation}>Add Example</button>
            </div>
          </div>
        </div>
      )}

      {showExampleModal === 'certificate' && (
        <div className="modal-overlay" onClick={() => setShowExampleModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>📋 Example Certificate</h3>
            <div className="modal-example">
              <p><strong>Name:</strong> Project Management Professional (PMP)</p>
              <p><strong>Issuer:</strong> PMI</p>
              <p><strong>Year:</strong> 2023</p>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowExampleModal(null)}>Cancel</button>
              <button className="confirm-btn" onClick={addExampleCertificate}>Add Example</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}