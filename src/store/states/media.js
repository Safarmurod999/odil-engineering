import { createSelector } from "@reduxjs/toolkit";
import { selectMediaData, selectMediaFilter } from "store/selectors/media";

export const mediaData = createSelector(selectMediaData, (media) => ({
  media: media.mediaList,
  mediaData: media.mediaData,
}));
export const mediaFilter = createSelector(
  selectMediaFilter,
  (media) => media.filter
);
