import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Tetimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "organization",
      title: "Organization",
      type: "string",
    },
    {
      name: "profiele_link",
      title: "Profile Link",
      type: "url",
    },
    {
      name: "image",
      title: "Display Image",
      type: "image",
    },
    {
      name: "block",
      title: "What they say",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
});
