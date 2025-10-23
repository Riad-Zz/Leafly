
export const saveUserStats = (newData) => {
    const existing = JSON.parse(localStorage.getItem("userStats")) || {};
    const merged = { ...existing, ...newData };
    localStorage.setItem("userStats", JSON.stringify(merged));
};

export const clearUserStats = () => {
    localStorage.removeItem("userStats");
};