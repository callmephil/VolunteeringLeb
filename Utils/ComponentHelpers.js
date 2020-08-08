import { isObject } from "./General";

export const isDesktop = () => {
  return window.innerWidth > 1024;
};

export const isTablet = () => {
  const width = window.innerWidth;
  return width <= 1024 && width > 640;
};

export const isMobile = () => {
  return window.innerWidth <= 640;
};

export const getArrayOfSelectedOptions = (list, primaryID) => {
  if (typeof list === "undefined" || list === null) return [];

  return list.map(element => {
    return parseInt(element[primaryID]);
  });
};

/**
 * return an array of the given prop(s)...
 * @param {any[] | object | number | string} props - Incoming data to convert
 * @param {string | number} primaryKey - ID to extract
 */
export const getDefaultSelectionStructure = (props, primaryKey) => {
  try {
    if (props === null || typeof props === "undefined") return undefined;

    const propType = typeof props;
    switch (propType) {
      case "string":
      case "number":
        return [parseInt(props)];
      case "object":
        if (Array.isArray(props)) {
          //! TODO || HACKFIX
          return props
            .map(el => {
              if (el === null || typeof props === "undefined") return null;
              else return isObject(el) ? parseInt(el[primaryKey]) : parseInt(el);
            })
            .filter(x => x !== null);
        } else {
          return [parseInt(props[primaryKey])];
        }
      default:
        return undefined;
    }
  } catch (err) {
    console.error(`getDefaultSelectionStructure err ${err.message}`, err);
    return undefined;
  }
};

export const makeDropdownOptions = (_this, list, nameObj, codeObj, extraText = "") => {
  if (!codeObj) codeObj = nameObj;

  const options = list.map(element => {
    const name = `${extraText}${element[nameObj]}`;
    return { name, code: element[codeObj] };
  });

  return _this === null ? options : _this.setState({ options });
};

export const getSubmitOrUpdateLabel = (isLoading, targetId) => {
  return isLoading ? "Processing..." : targetId !== null ? "Update" : "Submit";
};

export const isDisabled = disabledType => disabledType === 1; // Will return true or false.
export const isDisabledLabel = disabledType => (disabledType === 1 ? "Activate" : "Disable");

export const getUserAttendanceStatus = status_type => {
  switch (status_type) {
    case 0:
      return "Default";
    case 1:
      return "Late";
    case 2:
      return "Excused";
    default:
      return "Unknown";
  }
};

export const getUserRole = user_role => {
  switch (user_role) {
    case 0:
      return "Super Administrator";
    case 1:
      return "Administrator";
    case 2:
      return "Core Mentor";
    case 3:
      return "Mentor";
    case 4:
      return "Intern";
    default:
      return "unknown";
  }
};

export const getTaskOrTeamType = team_type => {
  switch (team_type) {
    case 0:
      return {
        name: "Team",
        icon: "fa fa-users"
      };
    case 1:
      return {
        name: "Personal",
        icon: "fa fa-user-o"
      };
    case 2:
      return {
        name: "Research",
        icon: "fa fa-search"
      };
    default:
      return {
        name: "Unknown",
        icon: "fa fa-question"
      };
  }
};

export const getUserAsbenceRequestStatus = status_type => {
  switch (status_type) {
    case 0:
      return "Pending";
    case 1:
      return "Approved";
    case 2:
      return "Denied";
    default:
      return "Unknown";
  }
};

export const getIsProgressStatus = progressType => {
  switch (progressType) {
    case 0:
      return "In progress";
    case 1:
      return "Completed";
    case 2:
      return "Verified";
    default:
      return "Unknown";
  }
};

export const getSkillType = type => {
  switch (type) {
    case 0:
      return "Skill";
    case 1:
      return "Competencies";
    default:
      return "Unknown";
  }
};

export const capitalizeFirstLetter = (input, all = false) => {
  if (!input || typeof input === 'undefined')
    return "";
  const regexPattern = all ? /\b\w/g : /\b\w/;
  return input.replace(regexPattern, fL => fL.toLocaleUpperCase());
}
