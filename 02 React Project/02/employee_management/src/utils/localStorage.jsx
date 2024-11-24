const employees = [
    {
        "id": 1,
        "name": "Ravi Sharma",
        "email": "ravi@me.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare project report",
                "description": "Complete the detailed project report for the new client.",
                "date": "2024-11-25",
                "category": "Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Develop login module",
                "description": "Create and test the login functionality for the app.",
                "date": "2024-11-26",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client feedback analysis",
                "description": "Analyze and compile client feedback from the last sprint.",
                "date": "2024-11-27",
                "category": "Analysis",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Team meeting preparation",
                "description": "Prepare agenda and slides for the team meeting.",
                "date": "2024-11-29",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Fix UI bugs",
                "description": "Resolve issues with the homepage UI responsiveness.",
                "date": "2024-11-30",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Priya Mehta",
        "email": "priya@me.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write API documentation",
                "description": "Document endpoints for the new APIs.",
                "date": "2024-11-26",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Optimize search functionality",
                "description": "Enhance the performance of the search feature.",
                "date": "2024-11-28",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "User testing for app",
                "description": "Conduct user testing for the new mobile app version.",
                "date": "2024-11-30",
                "category": "Testing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Create marketing material",
                "description": "Design promotional content for the upcoming product launch.",
                "date": "2024-12-01",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Amit Kumar",
        "email": "amit@me.com",
        "password": "123",
        "tasks": [
            {
                "title": "Database migration",
                "description": "Migrate the database to a new server with minimal downtime.",
                "date": "2024-11-27",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Resolve high-priority tickets",
                "description": "Address critical issues reported by the customer support team.",
                "date": "2024-11-29",
                "category": "Support",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Optimize backend APIs",
                "description": "Improve the performance of frequently used APIs.",
                "date": "2024-12-01",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Prepare deployment plan",
                "description": "Outline the deployment steps for the upcoming release.",
                "date": "2024-12-03",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Anjali Singh",
        "email": "anjali@me.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design app dashboard",
                "description": "Create a user-friendly design for the admin dashboard.",
                "date": "2024-11-28",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Research new frameworks",
                "description": "Evaluate the pros and cons of adopting React Native.",
                "date": "2024-12-01",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Bug fixes for mobile app",
                "description": "Resolve UI and performance issues in the mobile app.",
                "date": "2024-12-03",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client demo preparation",
                "description": "Prepare the product demo for the next client meeting.",
                "date": "2024-12-05",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Vikram Gupta",
        "email": "vikram@me.com",
        "password": "123",
        "tasks": [
            {
                "title": "SEO optimization",
                "description": "Enhance website content for better search engine rankings.",
                "date": "2024-11-29",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Deploy new feature",
                "description": "Roll out the new chat functionality on the production server.",
                "date": "2024-12-01",
                "category": "Deployment",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Conduct security audit",
                "description": "Perform a security audit of the application.",
                "date": "2024-12-03",
                "category": "Security",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Develop REST APIs",
                "description": "Build and test the new RESTful APIs for the backend.",
                "date": "2024-12-05",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
];



const admin = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "email": "admin1@me.com",
        "password": "123",
        "permissions": ["manage_users", "view_reports", "assign_tasks"]
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "admin2@me.com",
        "password": "123",
        "permissions": ["manage_users", "edit_projects", "approve_budget"]
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "email": "admin3@me.com",
        "password": "123",
        "permissions": ["view_reports", "assign_tasks", "manage_finances"]
    },
    {
        "id": 4,
        "name": "Diana White",
        "email": "admin4@me.com",
        "password": "123",
        "permissions": ["manage_users", "edit_projects", "view_reports"]
    },
    {
        "id": 5,
        "name": "Ethan Black",
        "email": "admin5@me.com",
        "password": "123",
        "permissions": ["assign_tasks", "manage_finances", "approve_budget"]
    }
];



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// localStorage.clear();

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

setLocalStorage();

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
}


