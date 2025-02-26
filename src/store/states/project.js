import { createSelector } from "@reduxjs/toolkit";
import {
  selectProjectData,
  selectProjectFilter,
} from "store/selectors/project";

export const projectData = createSelector(selectProjectData, (project) => ({
  project: project.projectList,
  projectData: project.projectData,
}));
export const projectFilter = createSelector(
  selectProjectFilter,
  (project) => project.filter
);
