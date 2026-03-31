'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Lock, 
  FileText, 
  AlertCircle,
  Eye,
  Database,
  Share2,
  Trash2,
  Users,
  Globe,
  Cookie,
  Fingerprint,
  Building2,
  Gavel,
  GraduationCap,
  Mail,
  Calendar,
  UserCheck,
  HardDrive,
  Scale,
  Bell,
  Key,
  Bug,
  FileSignature,
  Handshake
} from 'lucide-react';

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  subsections?: {
    title: string;
    content: string;
  }[];
  tables?: {
    headers: string[];
    rows: string[][];
  }[];
  principles?: string[];
}

const PolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'purpose', 'definitions', 'lawfulBases', 'rights'
  ]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const policySections: PolicySection[] = [
    {
      id: 'purpose',
      title: '1. Purpose and Scope',
      icon: <FileText className="w-6 h-6" />,
      content: [
        'This Privacy Policy establishes the rules and commitments governing how Waltergates Ghana Limited collects, uses, stores, shares, secures, retains, and disposes of personal data. It is intended to support lawful and responsible processing of information relating to clients, prospective clients, website users, employees, applicants, contractors, suppliers, and other business contacts.',
        'This policy applies across all business units, information systems, software platforms, development environments, communication channels, paper files, cloud services, and third-party arrangements used by or on behalf of Waltergates Ghana Limited.'
      ]
    },
    {
      id: 'objectives',
      title: '2. Policy Objectives',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'Protect the privacy, dignity, and rights of individuals whose personal data is processed by the company.',
        'Ensure alignment with the Ghana Data Protection Act, 2012 (Act 843), cybersecurity requirements, and internal governance expectations.',
        'Define clear rules for transparency, lawful collection, use limitation, security, retention, and accountability.',
        'Support secure software development, operational continuity, employee governance, and client trust.',
        'Provide a practical framework for responding to rights requests, complaints, incidents, and regulatory enquiries.'
      ]
    },
    {
      id: 'principles',
      title: '3. Privacy Principles',
      icon: <Handshake className="w-6 h-6" />,
      content: [
        'Waltergates Ghana Limited shall process personal data in accordance with the following principles:'
      ],
      principles: [
        'Accountability: each processing activity must have a responsible owner, evidence of compliance, and appropriate oversight.',
        'Lawfulness, fairness, and transparency: personal data shall be processed only on legitimate grounds and in a manner that individuals can understand.',
        'Purpose specification: personal data shall be collected for defined, explicit, and lawful purposes.',
        'Compatibility of further processing: data shall not be used later in a way that is incompatible with the original purpose unless a lawful basis exists.',
        'Information quality: personal data must be relevant, adequate, accurate, complete where necessary, and kept up to date.',
        'Openness: data subjects must be informed about who is collecting their data, why it is needed, and how to exercise their rights.',
        'Security safeguards: personal data must be protected through appropriate technical and organisational controls.',
        'Data subject participation: individuals must be able to access, correct, object to, or otherwise exercise rights over their personal data in accordance with law.'
      ]
    },
    {
      id: 'definitions',
      title: '4. Definitions',
      icon: <Database className="w-6 h-6" />,
      content: [
        'Personal Data: information relating to an identified or identifiable natural person.',
        'Sensitive Personal Data: special categories of information requiring enhanced protection, such as health, religious belief, ethnicity, biometric data, or criminal-related information, where applicable.',
        'Data Subject: the individual to whom personal data relates.',
        'Data Controller: the person or organisation that determines the purpose and means of processing personal data.',
        'Data Processor: a person or service provider that processes personal data on behalf of a controller.',
        'Processing: any activity involving personal data, including collection, recording, storage, retrieval, analysis, disclosure, transfer, deletion, or destruction.',
        'Personal Data Breach: an actual or reasonably suspected event involving unauthorised access, disclosure, alteration, loss, destruction, or unavailability of personal data.'
      ]
    },
    {
      id: 'governance',
      title: '5. Governance, Registration, and Accountability',
      icon: <Building2 className="w-6 h-6" />,
      content: [
        'Waltergates Ghana Limited shall maintain active data protection registration where required, publish an organisational privacy policy on relevant platforms, and designate a qualified Data Protection Supervisor or equivalent compliance lead. Privacy compliance shall be embedded into governance, procurement, HR administration, cybersecurity, and software delivery processes.'
      ],
      tables: [
        {
          headers: ['Role', 'Responsibility'],
          rows: [
            ['Board / CEO', 'Approve the policy, set tone from the top, allocate resources, and oversee compliance and risk management.'],
            ['Head of Technology / Data Protection Supervisor', 'Lead policy implementation, maintain data inventory, coordinate privacy-by-design, conduct impact assessments, monitor security controls, and manage breach escalation.'],
            ['Department Heads / Asset Owners', 'Identify data processing activities, ensure lawful collection and use, approve access, maintain data quality, and support rights requests.'],
            ['HR / Administration', 'Apply privacy controls in recruitment, onboarding, employment administration, and exit procedures.'],
            ['IT / Security Team', 'Implement technical and organisational safeguards, access control, logging, encryption, backup, recovery, and incident response.'],
            ['All Employees and Contractors', 'Process personal data only for authorised purposes, protect confidentiality, report incidents promptly, and complete required training.']
          ]
        }
      ]
    },
    {
      id: 'lawfulBases',
      title: '6. Lawful Bases for Processing',
      icon: <Scale className="w-6 h-6" />,
      content: [
        'The company shall process personal data only where at least one lawful condition applies. Depending on the context, Waltergates Ghana Limited may rely on one or more of the following grounds:',
        '• the data subject has provided clear and informed consent;',
        '• processing is necessary to enter into, perform, or manage a contract;',
        '• processing is required to comply with a legal or regulatory obligation;',
        '• processing is necessary for legitimate business interests that are not overridden by the rights and freedoms of the data subject;',
        '• processing is necessary to protect a vital interest or to perform a public or lawful function where applicable.',
        'Sensitive personal data shall be processed only where strictly necessary, lawful, proportionate, and subject to enhanced safeguards, documented approvals, and restricted access.'
      ]
    },
    {
      id: 'transparency',
      title: '7. Transparency and Collection Notice Requirements',
      icon: <Bell className="w-6 h-6" />,
      content: [
        'At or before the time of collection, Waltergates Ghana Limited shall take reasonable steps to ensure that the individual is informed of the nature of the data being collected, the identity and contact details of the collector, the purpose of collection, whether provision of the data is mandatory or optional, the consequences of not providing it, the legal or authorised basis for collection, the intended recipients or categories of recipients, and the existence of rights of access and rectification.',
        'Where personal data is obtained from a third party, the company shall provide this information to the data subject as soon as reasonably practicable unless a lawful exception applies.'
      ]
    },
    {
      id: 'categories',
      title: '8. Categories, Sources, and Uses of Personal Data',
      icon: <Database className="w-6 h-6" />,
      content: [],
      tables: [
        {
          headers: ['Category', 'Examples', 'Typical Purpose'],
          rows: [
            ['Identity and contact data', 'Name, phone number, email address, job title, company name, address, digital identifiers', 'Client engagement, supplier management, recruitment, communication, support and account administration'],
            ['Employment and HR data', 'CVs, contracts, attendance, payroll references, training records, performance and disciplinary records, device assignment', 'Employment administration, onboarding, governance, security and compliance management'],
            ['Client and project data', 'Project contacts, service records, support tickets, contracts, technical requirements, communications', 'Service delivery, quality assurance, billing, client relationship management and business continuity'],
            ['Technical and security data', 'IP address, login history, access logs, device IDs, audit trails, repository activity, network and endpoint telemetry', 'Security monitoring, access control, incident response and platform reliability'],
            ['Financial and transactional data', 'Invoices, payment references, banking or tax-related records where applicable', 'Accounting, tax compliance, collections and audit support'],
            ['Special or sensitive data', 'Health information, biometric identifiers, religious belief, ethnicity, criminal allegation/record', 'Only where strictly necessary, lawful, proportionate, and subject to enhanced safeguards']
          ]
        }
      ],
      subsections: [
        {
          title: 'Sources of Personal Data',
          content: '• directly from data subjects through forms, emails, meetings, contracts, support interactions, recruitment applications, onboarding materials, and website submissions;\n• from company systems and devices through account administration, project tools, source code repositories, access controls, and security logs;\n• from third parties such as referral partners, background verification providers, payment partners, corporate clients, regulators, or publicly available lawful sources;\n• from cookies or similar online technologies where company websites or digital services use them for analytics, security, or service functionality.'
        },
        {
          title: 'Permitted Business Uses',
          content: '• delivering software development, support, consulting, and related services;\n• managing contracts, billing, procurement, vendor relationships, and audits;\n• recruitment, onboarding, employment administration, training, performance, and exit management;\n• protecting systems, source code, client data, intellectual property, and operational resilience;\n• meeting legal, tax, labour, regulatory, investigation, and reporting obligations;\n• communicating service updates, responding to enquiries, and maintaining business relationships.'
        }
      ]
    },
    {
      id: 'minimisation',
      title: '9. Data Minimisation and Data Quality',
      icon: <Trash2 className="w-6 h-6" />,
      content: [
        'The company shall collect only the personal data reasonably required for a legitimate and defined purpose. Personal data that is excessive, irrelevant, duplicative, inaccurate, or outdated shall be corrected, restricted, or deleted as appropriate. Department heads and system owners shall periodically review records under their control to support completeness, relevance, and accuracy.'
      ]
    },
    {
      id: 'accessControl',
      title: '10. Access Control, Confidentiality, and Employee Responsibilities',
      icon: <Key className="w-6 h-6" />,
      content: [
        'Access to personal data shall be granted strictly on a need-to-know basis and in line with role-based access control, least privilege, segregation of duties, and documented approval processes. Access to confidential or highly confidential information shall be restricted, logged, and periodically reviewed.',
        'Employees and contractors must process personal data only for authorised business purposes. Passwords, access tokens, encryption keys, and repository credentials must be protected in accordance with company cybersecurity rules. Personal data must not be copied to unauthorised devices, public repositories, personal email, or consumer cloud storage. Confidentiality obligations continue after employment or contract termination.',
        'Where the company provides equipment, platforms, email, internet access, or development resources, these systems may be monitored for legitimate security, operational, compliance, and asset protection purposes, subject to applicable law and internal governance.'
      ]
    },
    {
      id: 'security',
      title: '11. Information Security Safeguards',
      icon: <Lock className="w-6 h-6" />,
      content: [
        'Waltergates Ghana Limited shall implement appropriate, reasonable, technical and organisational measures to protect the confidentiality, integrity, and availability of personal data. These measures shall be risk-based and consistent with the company cybersecurity policy, secure software development practices, and asset classification standards.',
        '• classification of information assets as Public, Internal, Confidential, or Highly Confidential;\n• encryption of sensitive personal data at rest and in transit, including secure transport protocols and strong cryptographic controls where applicable;\n• multi-factor authentication for email, repositories, cloud services, VPN, privileged access, and other high-risk systems;\n• endpoint, network, and repository security controls, including patch management, anti-malware/EDR, logging, branch protection, and secret management;\n• regular backups using a tested recovery strategy and secure offsite or cloud retention where approved;\n• vendor due diligence, contractual confidentiality, and access restrictions for third-party processors;\n• periodic audits, access reviews, vulnerability management, and security awareness training.'
      ]
    },
    {
      id: 'sharing',
      title: '12. Sharing and Disclosure of Personal Data',
      icon: <Share2 className="w-6 h-6" />,
      content: [
        'Waltergates Ghana Limited may share personal data only on a lawful, necessary, and proportionate basis. Personal data may be disclosed to the following categories of recipients where relevant:',
        '• employees, managers, and project teams who require access for authorised duties;\n• service providers and processors such as cloud hosting providers, payroll providers, collaboration platforms, legal advisers, auditors, and payment partners;\n• clients, business partners, or subcontractors where required to perform contractual services;\n• regulators, courts, law enforcement agencies, or competent authorities where disclosure is required by law or legal process;\n• successors, investors, or advisers in relation to a lawful corporate transaction, subject to confidentiality safeguards.',
        'All processors and third parties handling personal data on behalf of the company shall be subject to appropriate contractual obligations covering confidentiality, security, lawful use, incident reporting, return or deletion of data, and audit or assurance rights where appropriate.'
      ]
    },
    {
      id: 'crossBorder',
      title: '13. Cross-Border Transfers',
      icon: <Globe className="w-6 h-6" />,
      content: [
        'Where personal data is stored, accessed, backed up, or processed outside Ghana, Waltergates Ghana Limited shall take reasonable steps to ensure that the transfer is lawful and that the receiving environment provides adequate protection for the data. The company shall document the countries involved, assess transfer risk, apply contractual or technical safeguards where needed, and take into account any legal requirements applicable to foreign data subjects or receiving jurisdictions.'
      ]
    },
    {
      id: 'marketing',
      title: '14. Direct Marketing, Websites, and Cookies',
      icon: <Cookie className="w-6 h-6" />,
      content: [
        'Personal data shall not be used for direct marketing without the prior written consent of the data subject where required by law. Individuals must be given a clear opportunity to opt out of marketing communications, and opt-out instructions shall be honoured promptly.',
        '• Website forms shall present transparent notices describing what information is collected and why.\n• Where cookies, analytics tags, or similar technologies are used, the company shall provide appropriate disclosure and any consent mechanism required by law or best practice.\n• Essential security and functionality technologies may be used to operate websites, portals, and support platforms.'
      ]
    },
    {
      id: 'retention',
      title: '15. Retention, Archiving, and Secure Disposal',
      icon: <Calendar className="w-6 h-6" />,
      content: [
        'Personal data shall not be retained for longer than necessary to fulfil the original purpose of collection unless continued retention is required or justified by contract, law, legitimate business need, dispute handling, audit, or security obligations. Archived data shall remain subject to access control and confidentiality obligations.'
      ],
      tables: [
        {
          headers: ['Record Type', 'Baseline Retention Approach', 'Disposal Method'],
          rows: [
            ['Client and contract records', 'Retain for the duration of the engagement and thereafter only as required for legal, audit, dispute, tax, or contractual obligations.', 'Secure deletion from active systems and backups in line with approved disposal procedures.'],
            ['Employee and recruitment records', 'Retain during employment or recruitment and afterwards only for lawful labour, pension, tax, or dispute management purposes.', 'Restricted archive followed by secure destruction when no longer required.'],
            ['Security and access logs', 'Retain only for the period necessary to support cybersecurity monitoring, investigations, and audit requirements.', 'Log rotation, secure overwrite, and irrecoverable deletion.'],
            ['Marketing and consent records', 'Retain until consent is withdrawn, the purpose expires, or contact details become inactive or inaccurate.', 'Suppression list handling where legally necessary and deletion of inactive records.'],
            ['Backups and recovery copies', 'Retain according to the approved backup schedule and 3-2-1 recovery strategy, subject to periodic testing and minimisation.', 'Expiry-based deletion, media sanitisation, or physical destruction where appropriate.']
          ]
        }
      ],
      subsections: [
        {
          title: 'Disposal Methods',
          content: 'Media and records containing personal data must be disposed of in a manner that prevents reconstruction or unauthorised recovery. Depending on the medium and sensitivity, this may include secure deletion, overwrite, cryptographic erasure, shredding, degaussing, or certified destruction.'
        }
      ]
    },
    {
      id: 'rights',
      title: '16. Data Subject Rights and Request Handling',
      icon: <UserCheck className="w-6 h-6" />,
      content: [
        'Waltergates Ghana Limited recognises the rights of data subjects, subject to applicable legal conditions and exemptions. Individuals may request:',
        '• confirmation of whether the company holds personal data about them;\n• access to the personal data and related information about the processing;\n• correction, completion, update, restriction, or deletion of inaccurate, excessive, irrelevant, or unlawfully held data;\n• objection to certain forms of processing, including direct marketing;\n• withdrawal of consent where processing relies on consent, without affecting prior lawful processing;\n• information about recipients or categories of recipients and, where applicable, transfer arrangements.',
        'Requests shall be submitted through the company\'s designated privacy contact channel or other approved communication channel. The company shall verify identity where necessary, log the request, assess any applicable legal limitations, and respond within the timeframe required by law or within a reasonable documented period if the law does not specify a fixed deadline for the scenario concerned.'
      ]
    },
    {
      id: 'privacyByDesign',
      title: '17. Privacy by Design, Change Management, and DPIAs',
      icon: <Eye className="w-6 h-6" />,
      content: [
        'Privacy and security shall be considered from the earliest stages of projects, procurement, software development, onboarding, and operational change. Where a new or materially changed processing activity may create heightened privacy risk, the responsible owner shall conduct a documented Data Protection Impact Assessment (DPIA) before implementation and consult the Data Protection Commission where appropriate.',
        '• new technologies, platforms, or data integrations;\n• significant changes to existing processing activities;\n• large-scale processing of sensitive or high-risk data;\n• monitoring, profiling, or automated decision processes that may materially affect individuals.'
      ]
    },
    {
      id: 'breaches',
      title: '18. Personal Data Breaches and Incident Management',
      icon: <Bug className="w-6 h-6" />,
      content: [
        'All employees, contractors, and service providers must report suspected or confirmed privacy or security incidents immediately through the company\'s incident reporting channels. The incident response process shall include detection, validation, containment, eradication, recovery, impact assessment, root-cause review, and remediation.',
        'The company shall assess whether personal data has been accessed, acquired, lost, altered, or disclosed without authorisation. Where there are reasonable grounds to believe that unauthorised access or acquisition has occurred, the company shall notify the Data Protection Commission and the affected data subject as soon as reasonably practicable, and any shorter internal escalation targets shall be followed.',
        'Where client contracts, sector obligations, or cybersecurity procedures require faster notification, the stricter requirement shall be applied operationally.'
      ]
    },
    {
      id: 'training',
      title: '19. Training, Awareness, Monitoring, and Audit',
      icon: <GraduationCap className="w-6 h-6" />,
      content: [
        'Privacy compliance depends on continuous staff awareness, role-specific instruction, and management oversight. Waltergates Ghana Limited shall deliver induction and refresher training, targeted guidance for developers, managers, HR, and administrators, and periodic assessments of understanding and compliance behaviour.',
        '• new hires shall receive privacy and acceptable use orientation as part of onboarding;\n• employees with access to client, HR, financial, or security-sensitive data shall receive additional role-specific instruction;\n• the company may conduct audits, access reviews, documentation checks, and control testing to verify compliance;\n• failures or repeated non-compliance may lead to retraining, corrective action, disciplinary measures, or legal escalation depending on severity.'
      ]
    },
    {
      id: 'complaints',
      title: '20. Complaints, Regulator Engagement, and Contact Point',
      icon: <Mail className="w-6 h-6" />,
      content: [
        'Questions, complaints, rights requests, or concerns regarding personal data processing should be directed to the designated Data Protection Supervisor or the official privacy contact published by Waltergates Ghana Limited. Individuals also have the right to lodge a complaint with the Ghana Data Protection Commission where they believe their rights have been infringed.',
        'Internal privacy contact: [Insert privacy contact email / office address / phone number]',
        'Security incident channel: security@waltergatesgh.com',
        'Regulator: Data Protection Commission, Ghana'
      ]
    },
    {
      id: 'enforcement',
      title: '21. Enforcement and Policy Review',
      icon: <Gavel className="w-6 h-6" />,
      content: [
        'Non-compliance with this policy may result in corrective action, suspension of access, disciplinary sanctions, termination of engagement, contractual remedies, or legal action depending on the seriousness of the breach and the applicable legal framework. The policy shall be reviewed at least annually and whenever there is a significant change in law, business model, information systems, data flows, vendors, or threat landscape.'
      ]
    },
    {
      id: 'approval',
      title: '22. Approval and Acknowledgment',
      icon: <FileSignature className="w-6 h-6" />,
      content: [
        'This policy becomes effective upon approval by the authorised leadership of Waltergates Ghana Limited and shall be communicated to relevant personnel and, where appropriate, published on company platforms for data subject awareness.',
        'Chief Executive Officer — Signature / Date: 01-02-2026',
        'Head of Technology / Data Protection Supervisor — Signature / Date: 01-02-2026'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-br from-[#0B2B40] via-[#144d5c] to-[#1f6e7a] py-20 md:py-28"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Data Protection Act 843 (2012) Compliant</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Privacy & Data Protection
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Waltergates Ghana Limited — Commitment to transparency, security, and individual privacy rights
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-white/80">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Effective: February 2026</div>
            <div className="flex items-center gap-2"><FileText className="w-4 h-4" /> Document ID: WGL-PRIV-2026-001 | v1.0</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Policy Owner: Head of Technology / DPS</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            At Waltergates Ghana Limited, we are committed to protecting your privacy and ensuring lawful processing of personal data. 
            This comprehensive policy outlines our practices in accordance with the Ghana Data Protection Act, 2012 (Act 843).
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-4">
          {policySections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#1f6e7a] bg-[#eef2fc] p-2 rounded-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 text-left">
                    {section.title}
                  </h2>
                </div>
                <div className="text-[#1f6e7a]">
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Section Content */}
              {expandedSections.includes(section.id) && (
                <div className="px-6 pb-6 pt-4 border-t border-gray-100 space-y-5">
                  {/* Regular paragraphs */}
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}

                  {/* Principles list */}
                  {section.principles && (
                    <div className="mt-4 space-y-2">
                      {section.principles.map((principle, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <Shield className="w-5 h-5 text-[#1f6e7a] flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700 text-sm">{principle}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tables */}
                  {section.tables && section.tables.map((table, tableIdx) => (
                    <div key={tableIdx} className="overflow-x-auto mt-4">
                      <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                        <thead className="bg-gray-50">
                          <tr>
                            {table.headers.map((header, idx) => (
                              <th key={idx} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {table.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-gray-50">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 text-sm text-gray-600 align-top">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-5 mt-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="border-l-4 border-[#1f6e7a] pl-4">
                          <h3 className="text-md font-semibold text-gray-800 mb-2">
                            {subsection.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Contact */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#eef2fc] to-[#e6f4f0] rounded-2xl border border-[#cbdde6]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Document ID:</span> WGL-PRIV-2026-001 v1.0
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold text-gray-900">Review Cycle:</span> At least annually and upon major legal, operational, or technology change
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold text-gray-900">Security Incident Channel:</span>{' '}
                <a href="mailto:security@waltergatesgh.com" className="text-[#1f6e7a] hover:underline font-medium">
                  security@waltergatesgh.com
                </a>
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Regulator:</span> Data Protection Commission, Ghana
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Questions? Contact our Data Protection Supervisor
              </p>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Waltergates Ghana Limited. All rights reserved. This policy is effective as of February 2026.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;