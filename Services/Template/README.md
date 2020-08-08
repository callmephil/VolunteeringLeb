# AUTO GENERATED FILE 23/12/2019

# AUTH API
### /auth/
```js
const AUTH = {
};
```
# DISCORD API
### /discord/
```js
const DISCORD = {
};
```
# ASSIGNMENTS API 
### /assignments/*
```js
const ASSIGNMENTS = {
GET_ASSIGNMENT: { _fn: "getAssignment", method: "GET", path: "/assignments/:assignment_id" },
GET_ALL_ASSIGNMENTS: { _fn: "getAllAssignments", method: "GET", path: "/assignments/list/:date" },
CREATE_ASSIGNMENT: { _fn: "createAssignment", method: "POST", path: "/assignments/" },
UPDATE_ASSIGNMENT: { _fn: "updateAssignment", method: "PATCH", path: "/assignments/:assignment_id" },
DELETE_ASSIGNMENT: { _fn: "deleteAssignment", method: "DELETE", path: "/assignments/:assignment_id" },
};
```
# COHORT API
### /cohorts/*
```js
const COHORTS = {
GET_ALL_COHORTS_CALENDAR: { _fn: "getAllCohortsCalendar", method: "GET", path: "/cohorts/calendar" },
GET_COHORT: { _fn: "getCohort", method: "GET", path: "/cohorts/:cohort_id" },
GET_ALL_COHORTS: { _fn: "getAllCohorts", method: "GET", path: "/cohorts/" },
CREATE_COHORT: { _fn: "createCohort", method: "POST", path: "/cohorts/" },
DELETE_COHORT: { _fn: "deleteCohort", method: "DELETE", path: "/cohorts/:cohort_id" },
UPDATE_COHORT: { _fn: "updateCohort", method: "PATCH", path: "/cohorts/:cohort_id" },
};
```
# GROUP API
### /groups/*
```js
const GROUPS = {
GET_GROUP_BY_PROPS: { _fn: "getGroupByProps", method: "GET", path: "/groups/" },
CREATE_GROUP: { _fn: "createGroup", method: "POST", path: "/groups/" },
UPDATE_GROUP: { _fn: "updateGroup", method: "PATCH", path: "/groups/:group_id" },
DISABLE_GROUP: { _fn: "disableGroup", method: "PATCH", path: "/groups/disable/:group_id" },
GET_GROUP_MEMBER_BY_PROPS: { _fn: "getGroupMemberByProps", method: "GET", path: "/groups/members" },
ADD_GROUP_MEMBER: { _fn: "addGroupMember", method: "POST", path: "/groups/members" },
REMOVE_GROUP_MEMBER: { _fn: "removeGroupMember", method: "DELETE", path: "/groups/members" },
};
```
# PROJECT API
### /projects/*
```js
const PROJECTS = {
GET_TASKS_BY_PROJECT_ID_AND_USER: { _fn: "getTasksByProjectID_AND_USER", method: "GET", path: "/projects/tasks/users" },
GET_TASKS_BY_PROJECT_ID: { _fn: "getTasksByProjectID", method: "GET", path: "/projects/tasks/:project_id" },
CREATE_PROJECT: { _fn: "createProject", method: "POST", path: "/projects/" },
GET_ALL_PROJECT_TITLES: { _fn: "getAllProjectTitles", method: "GET", path: "/projects/titles" },
GET_ALL_PROJECTS: { _fn: "getAllProjects", method: "GET", path: "/projects/" },
GET_PROJECTS_BY_ID: { _fn: "getProjectsById", method: "GET", path: "/projects/:project_id" },
DELETE_PROJECT: { _fn: "deleteProject", method: "DELETE", path: "/projects/:project_id" },
UPDATE_PROJECT: { _fn: "updateProject", method: "PATCH", path: "/projects/:project_id" },
DELETE_PROJECT_PROPRETIES: { _fn: "deleteProjectPropreties", method: "DELETE", path: "/projects/props/:project_id" },
CREATE_PROJECT_TASK: { _fn: "createProjectTask", method: "POST", path: "/projects/task" },
DELETE_PROJECT_TASK: { _fn: "deleteProjectTask", method: "DELETE", path: "/projects/task/:project_id/:task_id" },
CREATE_PROJECT_COMPETENCIES: { _fn: "createProjectCompetencies", method: "POST", path: "/projects/competencies" },
DELETE_PROJECT_COMPETENCIES: { _fn: "deleteProjectCompetencies", method: "DELETE", path: "/projects/competencies/:project_id/:skill_id" },
};
```
# SKILLS API 
### /skills/*
```js
const SKILLS = {
GET_SKILL: { _fn: "getSkill", method: "GET", path: "/skills/:skill_id" },
GET_ALL_SKILLS: { _fn: "getAllSkills", method: "GET", path: "/skills/" },
CREATE_SKILL: { _fn: "createSkill", method: "POST", path: "/skills/" },
DELETE_SKILL: { _fn: "deleteSkill", method: "DELETE", path: "/skills/:skill_id" },
UPDATE_SKILL: { _fn: "updateSkill", method: "PATCH", path: "/skills/:skill_id" },
};
```
# TASKS API
### /tasks/properties/*
```js
const TASKS = {
GET_TASK_PROPERTIES: { _fn: "getTaskProperties", method: "GET", path: "/tasks/properties/:task_id/:skill_ids" },
GET_ALL_TASK_PROPERTIES: { _fn: "getAllTaskProperties", method: "GET", path: "/tasks/properties/:task_id" },
CREATE_TASK_PROPERTIES: { _fn: "createTaskProperties", method: "POST", path: "/tasks/properties" },
DELETE_TASK_PROPERTIES: { _fn: "deleteTaskProperties", method: "DELETE", path: "/tasks/properties" },
UPDATE_TASK_PROPERTIES: { _fn: "updateTaskProperties", method: "PATCH", path: "/tasks/properties" },
GET_TASK: { _fn: "getTask", method: "GET", path: "/tasks/:task_id" },
GET_ALL_TASK: { _fn: "getAllTask", method: "GET", path: "/tasks/" },
CREATE_TASK: { _fn: "createTask", method: "POST", path: "/tasks/" },
DELETE_TASK: { _fn: "deleteTask", method: "DELETE", path: "/tasks/:task_id" },
UPDATE_TASK: { _fn: "updateTask", method: "PATCH", path: "/tasks/:task_id" },
};
```
# REGISTRATION KEY API
### /registrationkey/*
```js
const REGISTRATIONKEY = {
GET_REGISTRATION_KEY: { _fn: "getRegistrationKey", method: "GET", path: "/registrationkey/code/:registration_key" },
GET_REGISTRATION_KEY_BY_COHORT_ID: { _fn: "getRegistrationKeyByCohortId", method: "GET", path: "/registrationkey/cohort/:cohort_id" },
GET_ALL_REGISTRATION_KEY: { _fn: "getAllRegistrationKey", method: "GET", path: "/registrationkey/" },
CREATE_REGISTRATION_KEY: { _fn: "createRegistrationKey", method: "POST", path: "/registrationkey/" },
UPDATE_REGISTRATION_KEY_USER_COUNT: { _fn: "updateRegistrationKeyUserCount", method: "PATCH", path: "/registrationkey/userCount/:registration_key" },
};
```
# USERS ACCOUNTS API
### /users/accounts/*
```js
const USER_ACCOUNTS = {
GET_ALL_USERS: { _fn: "getAllUsers", method: "GET", path: "users/accounts/" },
GET_ALL_USERS_BY_ROLE: { _fn: "getAllUsersByRole", method: "GET", path: "users/accounts/filter/role/:role_id" },
CREATE_USER: { _fn: "createUser", method: "POST", path: "users/accounts/" },
GET_USER: { _fn: "getUser", method: "GET", path: "users/accounts/:user_id" },
UPDATE_USER: { _fn: "updateUser", method: "PATCH", path: "users/accounts/:user_id" },
BAN_USER: { _fn: "banUser", method: "PATCH", path: "users/accounts/ban/:user_id" },
GET_ALL_USER_ABSENCE_REQUEST: { _fn: "getAllUserAbsenceRequest", method: "GET", path: "users/accounts/request/absence" },
GET_USER_ABSENCE_REQUEST: { _fn: "getUserAbsenceRequest", method: "GET", path: "users/accounts/request/absence/:user_id" },
CREATE_USER_ABSENCE_REQUEST: { _fn: "createUserAbsenceRequest", method: "POST", path: "users/accounts/request/absence" },
UPDATE_USER_ABSENCE_REQUEST: { _fn: "updateUserAbsenceRequest", method: "PATCH", path: "users/accounts/request/absence/:user_id/:rowid" },
GET_ALL_USER_CONTACT_INFORMATION: { _fn: "getAllUserContactInformation", method: "GET", path: "users/accounts/contact/all" },
GET_USER_CONTACT_INFORMATION: { _fn: "getUserContactInformation", method: "GET", path: "users/accounts/contact/:user_id" },
UPDATE_USER_CONTACT_INFORMATION: { _fn: "updateUserContactInformation", method: "PATCH", path: "users/accounts/contact/:user_id" },
};
```
# USERS ASSIGNMENTS API
### /users/assignments/*
```js
const USER_ASSIGNMENTS = {
CREATE_USER_ASSIGNMENT: { _fn: "createUserAssignment", method: "POST", path: "users/assignments/:user_id/:assignment_id" },
UPDATE_USER_ASSIGNMENT: { _fn: "updateUserAssignment", method: "PATCH", path: "users/assignments/:user_id/:assignment_id" },
DELETE_USER_ASSIGNMENT: { _fn: "deleteUserAssignment", method: "DELETE", path: "users/assignments/:user_id/:assignment_id" },
GET_USER_ASSIGNMENT: { _fn: "getUserAssignment", method: "GET", path: "users/assignments/:user_id/:assignment_id" },
GET_USER_ASSIGNMENTS: { _fn: "getUserAssignments", method: "GET", path: "users/assignments/:user_id" },
};
```
# USERS ATTENDANCES API
### /users/attendances/*
```js
const USER_ATTENDANCES = {
GET_ATTENDANCE_FOR_USER: { _fn: "getAttendanceForUser", method: "GET", path: "users/attendances/list" },
GET_ATTENDANCE_LIST: { _fn: "getAttendanceList", method: "GET", path: "users/attendances/list/date" },
UPDATE_ATTENDANCES: { _fn: "updateAttendances", method: "PATCH", path: "users/attendances/update/:user_id" },
};
```
# USERS COMPETENCIES API
### /users/competencies/
```js
const USER_COMPETENCIES = {
GET_USER_COMPETENCIES: { _fn: "getUserCompetencies", method: "GET", path: "users/competencies/:user_id" },
CREATE_USER_COMPETENCIES: { _fn: "createUserCompetencies", method: "POST", path: "users/competencies/:user_id" },
UPDATE_USER_COMPETENCIES: { _fn: "updateUserCompetencies", method: "PATCH", path: "users/competencies/:user_id/:competencie_id" },
};
```

# USERS LINKS API
### /users/links/
```js
const USER_LINKS = {
GET_USER_LINKS: { _fn: "getUserLinks", method: "GET", path: "users/links/:user_id" },
CREATE_USER_LINK: { _fn: "createUserLink", method: "POST", path: "users/links/:user_id" },
UPDATE_USER_LINK: { _fn: "updateUserLink", method: "PATCH", path: "users/links/:user_id/:rowId" },
DELETE_USER_LINK: { _fn: "deleteUserLink", method: "DELETE", path: "users/links/:user_id" },
};
```
# USERS NOTES API
### /users/notes/
```js
const USER_NOTES = {
GET_ALL_USER_NOTES: { _fn: "getAllUserNotes", method: "GET", path: "users/notes/all" },
GET_USER_NOTE: { _fn: "getUserNote", method: "GET", path: "users/notes/:user_id" },
CREATE_USER_NOTE: { _fn: "createUserNote", method: "POST", path: "users/notes/:user_id" },
UPDATE_USER_NOTE: { _fn: "updateUserNote", method: "PATCH", path: "users/notes/:user_id/:rowId" },
DELETE_USER_NOTE: { _fn: "deleteUserNote", method: "DELETE", path: "users/notes/:user_id/:rowId" },
};
```
# USERS SKILLS API
### /users/skills/
```js
const USER_SKILLS = {
GET_USER_SKILLS: { _fn: "getUserSkills", method: "GET", path: "users/skills/:user_id" },
UPDATE_USER_SKILL: { _fn: "updateUserSkill", method: "PATCH", path: "users/skills/:user_id/:skill_id" },
CREATE_OR_UPDATE_SKILL: { _fn: "createOrUpdateSkill", method: "POST", path: "users/skills/:user_id" },
};
```

# USERS TASKS API
### /users/tasks/*
```js
const USER_TASKS = {
CREATE_USER_TASK: { _fn: "createUserTask", method: "POST", path: "users/tasks/:user_id/:task_id" },
SET_USER_TASK_VERIFIED: { _fn: "setUserTaskVerified", method: "PATCH", path: "users/tasks/verified" },
UPDATE_USER_TASK: { _fn: "updateUserTask", method: "PATCH", path: "users/tasks/:user_id/:task_id" },
DELETE_USER_TASK: { _fn: "deleteUserTask", method: "DELETE", path: "users/tasks/:user_id/:task_id" },
GET_USERS_TASKS_BY_STATUS: { _fn: "getUsersTasksByStatus", method: "GET", path: "users/tasks/all" },
GET_USER_TASK: { _fn: "getUserTask", method: "GET", path: "users/tasks/:user_id/:task_id" },
GET_USER_TASKS: { _fn: "getUserTasks", method: "GET", path: "users/tasks/:user_id" },
};
```