// Utility functions
module.exports = {
    getCurrentDate: () => {
        const now = new Date();
        return now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    },
    greetUser: (name) => {
        return `Hello, ${name}! Welcome to our website.`;
    },
};