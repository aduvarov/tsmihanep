type Level = 'junior' | 'middle' | 'senior'

interface Developer {
    login: string
    skills: string[]
    level: Level
}

function gradeDeveloper(level: Level, developer: Developer) {
    developer.level = level
}
