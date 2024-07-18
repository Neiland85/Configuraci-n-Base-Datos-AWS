# Configuracion-Base-Datos-AWS-azure-openai

This repository contains a project that integrates AWS RDS database with Azure OpenAI services. It demonstrates how to set up and configure both services using command line tools and how to deploy a Node.js application that connects to the AWS database and utilizes Azure OpenAI for generative AI tasks.

## Project Structure

Configuracion-Base-Datos-AWS-azure-openai/
├── src/
│ ├── main.js
│ ├── db/
│ │ └── connection.js
│ └── services/
│ └── openaiService.js
├── config/
│ └── config.js
├── .github/
│ └── workflows/
│ └── cleanup.yml
├── .gitignore
├── README.md
├── package.json
├── requirements.txt
└── .env

## Testing the Setup

### Verify Database Connection

To verify the connection to the AWS RDS database, run:
```sh
node src/main.js


### Installation Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/Configuracion-Base-Datos-AWS-azure-openai.git
   cd Configuracion-Base-Datos-AWS-azure-openai

Create and activate a virtual environment (Python):

sh
Copiar código
python -m venv venv
source venv/bin/activate  # On Windows use `.\venv\Scripts\activate`
Install the dependencies:

sh
Copiar código
pip install -r requirements.txt
npm install
Set up environment variables:
Create a .env file in the root directory and add the following environment variables:

env
Copiar código
DB_HOST=your_aws_rds_endpoint
DB_PORT=your_rds_port
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
OPENAI_API_KEY=your_openai_api_key
Run the application:

sh
Copiar código
node src/main.js
Workflow Configuration
This project includes a GitHub Actions workflow to automatically clean up the workspace. The workflow is defined in .github/workflows/cleanup.yml and performs the following tasks:

Sets up Python and installs dependencies.
Cleans up the workspace by removing unnecessary files.
Purpose
The main goal of this project is to demonstrate how to integrate an AWS RDS database with Azure OpenAI services using a Node.js application. This includes setting up and configuring both services via command line tools, developing the application to connect to the database and utilize OpenAI services, and maintaining a clean development environment using GitHub Actions.

Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.

bash
Copiar código
