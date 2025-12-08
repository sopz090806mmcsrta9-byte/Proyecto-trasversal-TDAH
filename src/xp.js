export const XP = {
  get() { return Number(localStorage.getItem("xp") || 0); },
  add(amount) {
    const total = XP.get() + amount;
    localStorage.setItem("xp", total);
  }
};
