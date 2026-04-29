# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VMC-CSAT is a Customer Satisfaction survey platform for Valmed Corporation (VMC). It is a traditional server-rendered PHP application with no build pipeline — files are served directly through Laragon (local) or an Apache/PHP server (production).

## Development Environment

**Local server**: Laragon. Place the project at `C:\laragon\www\VMC-CSAT\` and access via `http://vmc-csat.test` or `http://localhost/VMC-CSAT`.

There are no npm, Composer, or build steps. PHP files and JavaScript ES6 modules are served as-is.

**PHP timezone** is set to `Asia/Manila` across all modules.

## Database Configuration

Two databases are used, configured in `/Global PHP/Global_Connection.php`:

| Name | Host | Database | User |
|------|------|----------|------|
| `vmc_csat` (primary) | localhost | `valmed_vmc_csat` | root (no password) |
| `vmc_platform` (secondary) | 192.168.12.10 | `vmc_platform` | agms |

Connect via the factory function:
```php
$conn = connectToDb('vmc_csat');      // returns stdClass
$pdo  = $conn->selectedPdoConn;       // PDO instance
```

Always use PDO prepared statements. Direct query string interpolation is not used in this codebase.

## Architecture

### Module Structure

Each feature is a self-contained module directory following this layout:

```
Module <Name>/
├── Client Side/      # JS: Controllers, Gateways, Requests, Executors
├── Server Side/      # PHP: Response handlers (endpoints)
├── Pages/            # HTML page files
└── Style/            # CSS scoped to the module
```

### Frontend Data Flow

Every user interaction follows this chain:

```
Executor_*.js  →  Controller_*.js  →  SubmitRequest*.js
    →  Gateway_*.js  →  Request_*.js  (fetch POST)
    →  Server Side/Response_*.php
    →  JSON  →  back up the chain to Controller (DOM update)
```

- **Executor** — initializes the page, attaches event listeners, calls Controller
- **Controller** — owns event logic and DOM updates
- **Gateway** — wraps a Request in a Promise, handles resolve/reject
- **Request** — executes the `fetch()` call against a Server Side endpoint
- **Elements_*.js** — centralizes all `document.querySelector` references for the page
- **Values_*.js** — shared constants for the module

### Backend Pattern

Server Side PHP files (`Response_*.php`) are simple request handlers:
1. Validate the incoming token/session
2. Execute a PDO prepared statement
3. `echo json_encode(...)` the result

They do not use routing — each file is its own endpoint, referenced directly by the corresponding `Request_*.js`.

### Global Utilities

| Path | Purpose |
|------|---------|
| `/Global PHP/Global_Connection.php` | Multi-DB connection factory |
| `/Global PHP/Connection.php` | Direct single-DB connection (legacy) |
| `/Global PHP/Token_Class.php` | Token generation/validation |
| `/Global PHP/Passcode_Class.php` | Passcode generation |
| `/Global PHP/RateToken_Class.php` | Rate-service token management |
| `/Global Client Side/Token.js` | Hardcoded global auth token used in all fetch requests |

### UI Framework — Rogrid

`/Rogrid/Scripts/RogridNodeScript_Index.js` is the core in-house component library (~710 lines). It provides the component/view/output rendering pipeline used across all modules. Do not replace it with external libraries.

### User Journey

1. `index.php` — Data Privacy Policy agreement
2. `Module Index` — Passcode entry → `Response_ValidateCode.php` → generates rate token
3. `Module Survey` — Survey form → response encoding
4. `Module Reports` — Analytics and export

### Session & Auth

- `session_start()` is called in `index.php`; `$_SESSION["unitAbbre"]` stores the unit abbreviation (base64-decoded from query param)
- `/Global PHP/DestroySessions.php` handles session teardown

## Adding a New Module

Use `Module Pattern/` as the boilerplate. Copy the directory structure and rename files following the existing naming convention (`Executor_`, `Controller_`, `Gateway_`, `Request_`, `Response_`, `Elements_`, `Values_`).

## Key Conventions

- All fetch calls POST JSON; responses are always JSON
- PHP endpoints echo a single `json_encode()` — no framework routing
- JavaScript uses ES6 `import`/`export` (no bundler); `type="module"` on script tags
- CSS is module-scoped; global styles live in `/Global Style/` and `/Rogrid/Styles/`
- Charts use the Google Visualization API (`Plugin_GstaticChart.js`)
- Table exports use `table2excel.js`, `html2canvas.js`, `FileSaver.js`
- Dropdowns use Select2 (`/Global JS/`)
