export const ICON_MAP = new Map();

addMapping([0, 1], "sun");
addMapping([2], "cloud-sun");
addMapping([3, 45, 48], "cloud");

addMapping([51, 61], "cloud-rain");
addMapping([53, 55, 63, 65, 80, 81], "cloud-showers-heavy");
addMapping([56, 57, 66, 67, 71, 73, 75, 77, 85, 86], "cloud-meatball");
addMapping([82, 95, 96, 99], "cloud-bolt");
//addMapping([0, 1], "sun");
//addMapping([0, 1], "sun");

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}
