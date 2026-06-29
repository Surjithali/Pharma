# Next.js Custom Application

This is a modern full-stack web application built using Next.js (App Router) and Prisma ORM. It uses a local SQLite configuration, allowing you to run the application immediately without installing an external database.

---

## 🛠️ Tech Stack & Dependencies

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Database ORM:** [Prisma](https://www.prisma.io/)
* **Database Engine:** SQLite (Stored as a local file)
* **Font Optimization:** `next/font` (Geist Sans & Geist Mono)

---

## 🚀 Getting Started & Local Setup

Follow these steps in order to get the application up and running locally.

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18.x or higher) installed on your system. 

### 2. Clone and Install Dependencies

First, clone the repository to your local machine and navigate into the project directory:

```bash
cd your-repo-name

Next, install the required node modules:

Bash

npm install
# or
yarn install
# or
pnpm install
# or
bun install

3. Set Up the Environment File
Create a .env file in the root directory of your project. Paste the following line to tell Prisma to use a local file for the database:

DATABASE_URL="file:./dev.db"

4. Initialize the Local Database

# Push your database schema and create the local file
npx prisma db push
npx prisma generate


# Generate the local Prisma Client
npx prisma generate


npm install
(1. Run  'npm approve-scripts')
(2. Run 'npm approve-scripts --all')

npx prisma db push

npx prisma generate

npm run dev


