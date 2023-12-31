import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "project",
      title: "Porject Name",
      type: "string",
    },
    {
      name: "project_link",
      title: "Project Link",
      type: "url",
    },
    {
      name: "image",
      title: "Display Image",
      type: "image",
    },
    {
      name: "block",
      title: "Project Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
});
