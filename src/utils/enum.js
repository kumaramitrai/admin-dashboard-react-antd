// BasicStatus enum
const BasicStatus = {
  DISABLE: 0,
  ENABLE: 1,
};

// ResultEnum enum
const ResultEnum = {
  SUCCESS: 0,
  ERROR: -1,
  TIMEOUT: 401,
};

// StorageEnum enum
const StorageEnum = {
  User: "user",
  Token: "token",
  Settings: "settings",
  I18N: "i18nextLng",
};

// ThemeMode enum
const ThemeMode = {
  Light: "light",
  Dark: "dark",
};

// ThemeLayout enum
const ThemeLayout = {
  Vertical: "vertical",
  Horizontal: "horizontal",
  Mini: "mini",
};

// ThemeColorPresets enum
const ThemeColorPresets = {
  Default: "default",
  Cyan: "cyan",
  Purple: "purple",
  Blue: "blue",
  Orange: "orange",
  Red: "red",
};

// LocalEnum enum
const LocalEnum = {
  en_US: "en_US",
  zh_CN: "zh_CN",
};

// MultiTabOperation enum
const MultiTabOperation = {
  FULLSCREEN: "fullscreen",
  REFRESH: "refresh",
  CLOSE: "close",
  CLOSEOTHERS: "closeOthers",
  CLOSEALL: "closeAll",
  CLOSELEFT: "closeLeft",
  CLOSERIGHT: "closeRight",
};

// PermissionType enum
const PermissionType = {
  CATALOGUE: 0,
  MENU: 1,
  BUTTON: 2,
};

export {
  BasicStatus,
  StorageEnum,
  ResultEnum,
  PermissionType,
  MultiTabOperation,
  LocalEnum,
  ThemeColorPresets,
  ThemeMode,
  ThemeLayout,
};
