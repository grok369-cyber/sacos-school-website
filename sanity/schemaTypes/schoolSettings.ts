import { defineField, defineType } from "sanity";

export const heroSlide = {
  name: "heroSlide",
  title: "Homepage slide",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Slide image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Slide title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Slide description",
      type: "text",
      rows: 3,
    }),
  ],
};

export const academicLevel = {
  name: "academicLevel",
  title: "Academic level",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
  ],
};

export const uaceResult = {
  name: "uaceResult",
  title: "UACE result",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Student name", type: "string", validation: (Rule: any) => Rule.required() }),
    defineField({ name: "combination", title: "Combination", type: "string" }),
    defineField({ name: "points", title: "Points", type: "string" }),
  ],
};

export const uceResult = {
  name: "uceResult",
  title: "UCE result",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Student name", type: "string", validation: (Rule: any) => Rule.required() }),
    defineField({ name: "aggregates", title: "Aggregates", type: "string" }),
  ],
};

export default defineType({
  name: "schoolSettings",
  title: "School settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "School name", type: "string" }),
    defineField({ name: "motto", title: "Motto", type: "string" }),
    defineField({ name: "about", title: "About", type: "text" }),
    defineField({ name: "vision", title: "Vision", type: "text" }),
    defineField({ name: "mission", title: "Mission", type: "text" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),

    defineField({
      name: "heroImage",
      title: "Default homepage hero image",
      type: "image",
      description: "Used when no homepage slides have been added.",
      options: { hotspot: true },
    }),

    defineField({
      name: "heroSlides",
      title: "Homepage slider",
      type: "array",
      description: "Add, remove and reorder the images and text shown in the homepage slider.",
      of: [{ type: "heroSlide" }],
    }),

    defineField({
      name: "academicHeroTitle",
      title: "Academics page title",
      type: "string",
    }),
    defineField({
      name: "academicHeroIntro",
      title: "Academics page introduction",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "academicLevels",
      title: "Academic levels",
      type: "array",
      of: [{ type: "academicLevel" }],
    }),
    defineField({
      name: "uaceTitle",
      title: "UACE section title",
      type: "string",
    }),
    defineField({
      name: "uaceIntro",
      title: "UACE section introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "uaceResults",
      title: "UACE performers",
      type: "array",
      of: [{ type: "uaceResult" }],
    }),
    defineField({
      name: "uceTitle",
      title: "UCE section title",
      type: "string",
    }),
    defineField({
      name: "uceResults",
      title: "UCE Division 1 performers",
      type: "array",
      of: [{ type: "uceResult" }],
    }),
  ],
});
