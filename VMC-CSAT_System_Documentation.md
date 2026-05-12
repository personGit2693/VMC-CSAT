# SYSTEM DOCUMENTATION: VMC-CSAT
## Valenzuela Medical Center - Customer Satisfaction Measurement System

---

### 1. Title Page
**System Name:** VMC-CSAT  
**Version:** 1.0.0  
**Organization:** Valenzuela Medical Center (VMC)  
**Department:** Information Management and Information Systems Service (IMISS)  
**Document Type:** System Documentation  
**Date:** May 12, 2026  
**Status:** Final  

---

### 2. Revision History
| Version | Date | Description | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-05-12 | Initial System Documentation Release | Senior Systems Analyst |

---

### 3. Table of Contents
1. Title Page
2. Revision History
3. Table of Contents
4. Executive Summary
5. System Overview
6. System Architecture
7. Functional Requirements
8. User Roles & Permissions
9. System Workflow / Process Flow
10. Database Design Overview
11. System Design Overview
12. Security Features
13. Non-Functional Requirements
14. System Requirements
15. Deployment Guide
16. Maintenance & Support
17. Limitations
18. Future Enhancements
19. Conclusion

---

### 4. Executive Summary
The VMC-CSAT (Valenzuela Medical Center - Customer Satisfaction Measurement) system is a specialized web-based application designed to capture, manage, and analyze patient and client feedback. Developed to align with the requirements of the Anti-Red Tape Authority (ARTA) and the Ease of Doing Business (EODB) Act, the system replaces traditional paper-based surveys with a streamlined digital interface. It utilizes a modular PHP-based architecture and a proprietary JavaScript framework (Rogrid) to provide a responsive and secure environment for both respondents and administrative staff.

---

### 5. System Overview
#### Purpose
The primary purpose of VMC-CSAT is to provide a reliable digital platform for measuring the quality of services provided by the Valenzuela Medical Center. It ensures that feedback is collected systematically, stored securely, and reported accurately to facilitate data-driven decision-making and compliance with national standards.

#### Objectives
*   To automate the customer satisfaction survey process.
*   To provide real-time analytics and reporting for hospital management.
*   To ensure data privacy and integrity in accordance with the Data Privacy Act.
*   To generate ARTA-compliant Customer Satisfaction Measurement (CSM) reports.

#### Scope
The system covers the entire survey lifecycle, from the initial Data Privacy agreement to the generation of complex analytical reports. It includes modules for survey administration, office/department management, and technical configuration via the IMISS portal.

#### Key Features
*   **Privacy-First Interface:** Mandatory Data Privacy Act (DPA) agreement before survey entry.
*   **Secure Survey Entry:** Passcode-based authentication to prevent duplicate or unauthorized entries.
*   **Modular Survey Logic:** Dynamically adjusts questions based on respondent type and office visited.
*   **Comprehensive Analytics:** Real-time dashboards and exportable Excel reports (Data One, CSM Output).
*   **Administrative Management:** Dedicated panels for managing offices, services, and survey questions.

---

### 6. System Architecture
#### Architectural Design
The system follows a **Modular Monolithic** architecture. Each feature (Survey, Reports, Office) is encapsulated in its own directory, containing its own client-side logic, server-side handlers, and styles.

#### Components
*   **Presentation Layer:** HTML5, SCSS, and JavaScript (ES6 Modules).
*   **Business Logic Layer:** PHP 7.4/8.x (Response Handlers) and Rogrid JS Framework.
*   **Data Access Layer:** PDO (PHP Data Objects) with prepared statements.
*   **Database:** MySQL/MariaDB.

#### Technology Stack
*   **Backend:** PHP (Native/Vanilla)
*   **Frontend:** JavaScript (Native ES6), jQuery, Select2
*   **Styling:** SCSS, CSS (Rostrap/Rogrid UI)
*   **Server:** Apache (Laragon environment for local development)
*   **Charts/Analytics:** Google Visualization API

#### Infrastructure Overview
The system is hosted on an internal network (on-premise server) or accessible via a secured web server. It connects to a primary database (`vmc_csat`) for survey data and a secondary database (`vmc_platform`) for cross-platform integration.

---

### 7. Functional Requirements
#### Module: Survey Entry (`Module Survey`)
*   **Input:** Respondent demographics (Age, Gender, Religion, etc.), Office visited, Service availed.
*   **Output:** Encoded respondent record and survey ratings.
*   **Business Rule:** A valid passcode must be generated and validated before the survey can be submitted.

#### Module: Reports & Analytics (`Module Reports`)
*   **Input:** Date range filters, Office selection, Respondent type.
*   **Output:** Tabular reports, ARTA CSM scores, Exportable Excel files.
*   **Business Rule:** Access is restricted to authorized administrative personnel.

#### Module: IMISS Management (`Page IMISS`)
*   **Input:** New question strings, Point of Entry updates, Office name changes.
*   **Output:** Updated system configuration.
*   **Business Rule:** Direct modification of core system parameters.

---

### 8. User Roles & Permissions
| Role | Access Level | Responsibilities |
| :--- | :--- | :--- |
| **Respondent** | Public/Tokenized | Completes survey forms; No access to administrative data. |
| **Department Admin** | Restricted | Views reports for their specific office; Cannot modify system settings. |
| **Super Admin (IMISS)** | Full | Full access to all modules, database management, and system configuration. |

---

### 9. System Workflow / Process Flow
1.  **Agreement:** User visits the index page and agrees to the Data Privacy Policy.
2.  **Authentication:** User enters a system-generated passcode.
3.  **Survey Capture:** User provides demographic data and rates the service provided.
4.  **Processing:** The system encodes the response and calculates ratings in real-time.
5.  **Analytics:** Management accesses the Reports module to view trends and export compliance data.

---

### 10. Database Design Overview
The system uses a relational database schema optimized for reporting.
*   **`clientresponses_tab`:** Central table storing respondent metadata and link to ratings.
*   **`respondents_tab`:** Stores individual respondent identifiers.
*   **`offices_tab`:** List of hospital departments/offices.
*   **`officeservices_tab`:** Specific services offered per office.
*   **`serviceresponses_tab`:** Bridge table for multiple services availed.
*   **`questions_tab`:** Dynamic list of survey questions.

---

### 11. Security Features
*   **Authentication:** Passcode-based entry for surveys; Credential-based login for admins.
*   **Authorization:** Role-based access control (RBAC) implemented via session tokens.
*   **Input Validation:** Mandatory use of PDO prepared statements to prevent SQL Injection.
*   **Encryption:** Passwords hashed using MD5 (with salt); Sensitive identifiers base64 encoded.
*   **Audit Logging:** Recording of respondent IP addresses (`client_secretkey`).

---

### 12. Non-Functional Requirements
*   **Performance:** Reports must generate within < 3 seconds for standard date ranges.
*   **Scalability:** Modular design allows for the easy addition of new offices and questions.
*   **Reliability:** Use of local server (Laragon) ensures high uptime within the hospital network.
*   **Availability:** 24/7 access for survey kiosks and administrative offices.

---

### 13. System Requirements
*   **Hardware:** Minimum 4GB RAM, Quad-core processor, 20GB Disk Space (Server).
*   **Software:** PHP 7.4+, MySQL 5.7+ / MariaDB 10.4+, Apache Server.
*   **Browser Compatibility:** Chrome (Recommended), Edge, Firefox.
*   **Network:** LAN/WAN with access to the local server IP.

---

### 14. Deployment Guide
1.  **Environment Setup:** Install Laragon or XAMPP.
2.  **Files:** Copy the `VMC-CSAT` folder to the `www` or `htdocs` directory.
3.  **Database:** Import the provided `.sql` schemas into MySQL.
4.  **Configuration:** Update `Global PHP/Global_Connection.php` with correct database credentials.
5.  **Verification:** Access the system via `http://localhost/VMC-CSAT`.

---

### 15. Maintenance & Support
*   **Backups:** Daily automated backups of the `vmc_csat` database are recommended.
*   **Troubleshooting:** Check `error_log` in the root directory and browser console (F12) for JS errors.
*   **Support:** Managed by the VMC-IMISS Department.

---

### 16. Limitations
*   Requires active network connectivity to the local server.
*   Current reporting is optimized for desktop view; mobile reporting view is limited.

---

### 17. Future Enhancements
*   Integration with SMS API for feedback notifications.
*   AI-powered sentiment analysis for open-ended comments.
*   Mobile application version for remote feedback collection.

---

### 18. Conclusion
The VMC-CSAT system is a robust, purpose-built solution that ensures Valenzuela Medical Center remains at the forefront of customer service excellence. By digitizing the satisfaction measurement process, VMC guarantees transparency, efficiency, and continuous improvement in healthcare service delivery.
