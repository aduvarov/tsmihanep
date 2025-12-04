// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

interface User {
    login: string
    email: string
    password: string
    isOnline: boolean
    lastVisited: Date
}

interface Admin {
    login: string
    email: string
    password: string
    isOnline: boolean
    lastVisited: Date
    role: string
}

const user1: User = {
    login: 'Anatoliy',
    email: 'anatoliy@mail.ru',
    password: 'xjdkdkdkdkdkdkdsjasdf',
    isOnline: false,
    lastVisited: new Date(2025, 11, 4),
}

const admin1: Admin = {
    login: 'Anatoliy',
    email: 'anatoliy@mail.ru',
    password: 'xjdkdkdkdkdkdkdsjasdf',
    isOnline: false,
    lastVisited: new Date(2025, 11, 4),
    role: 'superAdmin',
}

function login(user: { login: string; password: string }): void {
    if (user.login && user.password) {
        console.log(`Hello ${user.login}!`)
    }
}

login(user1)
login(admin1)
