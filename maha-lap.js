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
      case day === "พฤหัสบดี":
        return 5;
        break;
      case day === "ศุกร์":
        return 6;
        break;
      case day === "เสาร์":
        return 7;
        break;
      case day === "สงกรานต์":
        return 13;
        break;
      case day === "ฮาโลวีน":
        return 31;
        break;
      default:
        return 1;
    }
  }
}

module.exports = MahaLap;
