import { CinemaDate } from "domain/date";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

const MONDAY_OF_WEEK = 1;
const TUESDAY_OF_WEEK = 2;
const WEDNESDAY_OF_WEEK = 3;
const THURSDAY_OF_WEEK = 4;
const FRIDAY_OF_WEEK = 5;
const SATURDAY_OF_WEEK = 6;
const SUNDAY_OF_WEEK = 0;

describe("CinemaDate", () => {
  describe("#isWeekday", () => {
    test("月曜日はtrueを返す.", () => {
      const monday = dayjs().isoWeekday(MONDAY_OF_WEEK).toDate();
      expect(new CinemaDate(monday).isWeekday()).toBe(true);
    });
    test("火曜日はtrueを返す.", () => {
      const tuesday = dayjs().isoWeekday(TUESDAY_OF_WEEK).toDate();
      expect(new CinemaDate(tuesday).isWeekday()).toBe(true);
    });
    test("水曜日はtrueを返す.", () => {
      const wednesday = dayjs().isoWeekday(WEDNESDAY_OF_WEEK).toDate();
      expect(new CinemaDate(wednesday).isWeekday()).toBe(true);
    });
    test("木曜日はtrueを返す.", () => {
      const thursday = dayjs().isoWeekday(THURSDAY_OF_WEEK).toDate();
      expect(new CinemaDate(thursday).isWeekday()).toBe(true);
    });
    test("金曜日はtrueを返す.", () => {
      const friday = dayjs().isoWeekday(FRIDAY_OF_WEEK).toDate();
      expect(new CinemaDate(friday).isWeekday()).toBe(true);
    });
    test("土曜日はfalseを返す.", () => {
      const saturday = dayjs().isoWeekday(SATURDAY_OF_WEEK).toDate();
      expect(new CinemaDate(saturday).isWeekday()).toBe(false);
    });
    test("日曜日はfalseを返す.", () => {
      const sunday = dayjs().isoWeekday(SUNDAY_OF_WEEK).toDate();
      expect(new CinemaDate(sunday).isWeekday()).toBe(false);
    });
  });

  describe("#isLateShow", () => {
    test("20時以降はtrueを返す.", () => {
      const lateShow = dayjs().hour(20).minute(0).second(0);
      expect(new CinemaDate(lateShow.toDate()).isLateShow()).toBe(true);
    });
    test("20時未満まではfalseを返す.", () => {
      const notLateShow = dayjs().hour(19).minute(59).second(59);
      expect(new CinemaDate(notLateShow.toDate()).isLateShow()).toBe(false);
    });
  });

  describe("#isCinemaDay", () => {
    test("映画の日(=1日)はtrueを返す.", () => {
      const firstDayOfMonth = new CinemaDate(dayjs().startOf("month").toDate());
      expect(firstDayOfMonth.isCinemaDay()).toBe(true);
    });
    test("映画の日(=1日)以外はfalseを返す.", () => {
      const notFirstDayOfMonth = new CinemaDate(
        dayjs().startOf("month").add(1, "day").toDate(),
      );
      expect(notFirstDayOfMonth.isCinemaDay()).toBe(false);
    });
  });
});
