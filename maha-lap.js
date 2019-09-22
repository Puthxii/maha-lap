class MahaLap {
  static tamnaiWithDay(day) {
    switch (true) {
      case day === "จันทร์":
        return 2;
        break;
      case day === "อังคาร":
        return 3;
        break;
      case day === "พุธ":
        return 4;
        break;
      default:
        return 1;
    }
  }
}

module.exports = MahaLap;
