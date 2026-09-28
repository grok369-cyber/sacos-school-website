import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsletterSubscriber",
  title: "Newsletter Subscriber",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Unsubscribed", value: "unsubscribed" },
        ],
        layout: "radio",
      },
      initialValue: "active",
    }),
    defineField({
      name: "subscribedAt",
      title: "Subscribed at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: "email", subtitle: "status" },
  },
});
