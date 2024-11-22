const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design homepage UI",
                "description": "This is a brief description of the task.",
                "date": "2024-11-25",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Fix API bugs",
                "description": "This is a brief description of the task.",
                "date": "2024-11-26",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Write user documentation",
                "description": "This is a brief description of the task.",
                "date": "2024-11-28",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Test the login functionality",
                "description": "This is a brief description of the task.",
                "date": "2024-11-27",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Set up CI/CD pipeline",
                "description": "This is a brief description of the task.",
                "date": "2024-11-29",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Improve website accessibility",
                "description": "This is a brief description of the task.",
                "date": "2024-12-01",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Resolve customer tickets",
                "description": "This is a brief description of the task.",
                "date": "2024-11-30",
                "category": "Support",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Conduct performance testing",
                "description": "This is a brief description of the task.",
                "date": "2024-12-02",
                "category": "Testing",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Optimize database queries",
                "description": "This is a brief description of the task.",
                "date": "2024-12-05",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write user documentation",
                "description": "This is a brief description of the task.",
                "date": "2024-11-25",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Design homepage UI",
                "description": "This is a brief description of the task.",
                "date": "2024-11-26",
                "category": "Design",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix API bugs",
                "description": "This is a brief description of the task.",
                "date": "2024-11-28",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Create wireframes for mobile app",
                "description": "This is a brief description of the task.",
                "date": "2024-11-25",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Improve website accessibility",
                "description": "This is a brief description of the task.",
                "date": "2024-11-27",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Optimize database queries",
                "description": "This is a brief description of the task.",
                "date": "2024-11-28",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// localStorage.clear();

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin }
}


