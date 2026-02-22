# Simple Core Banking API

API ini dibangun menggunakan **Node.js (Express.js)**, **PostgreSQL**, dan **Sequelize ORM**. Fokus utama dari aplikasi ini adalah mendemonstrasikan implementasi **JWT Authentication** dan **Database Transaction (ACID)** untuk proses transfer antar rekening yang aman.

## 🚀 Fitur Utama

- **User Authentication**: Register & Login dengan password yang di-hash menggunakan `bcrypt`.
- **JWT Protection**: Middleware untuk memproteksi endpoint sensitif.
- **Atomic Transfers**: Menggunakan _Sequelize Managed Transactions_ untuk memastikan integritas data saldo saat terjadi kegagalan sistem.
- **Input Validation**: Memastikan saldo cukup dan rekening tujuan tersedia.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Security**: JSON Web Token (JWT), BcryptJS
- **Dev Tool**: Nodemon, Sequelize-CLI

---

## ⚙️ Instalasi & Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/fadhil004/bank-api.git
   cd cimb-api-test
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Konfigurasi Database**: Sesuaikan kredensial PostgreSQL Anda di file config/config.json.
4. **Run Migration**
   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```
5. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```

---
