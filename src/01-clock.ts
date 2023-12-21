function getClockAngle(hh_mm: string): number {
  const [hour, minute] = hh_mm.split(":").map(x => +x);
  const Ha = (hour % 12) * 30 + minute * 0.5;
  const Ma = minute * 6;
  const AngleDiff = Math.abs(Ha - Ma);
  const AlterDiff = 360 - AngleDiff;
  return Math.min(AngleDiff, AlterDiff);
}