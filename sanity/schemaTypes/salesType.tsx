import { TagIcon } from 'lucide-react'
import { title } from 'process'
import { defineField, defineType } from 'sanity'

export const salesType = defineType({
  name: 'sales',
  title: 'Sale',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Sale Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Sale Description',
    }),
    defineField({
      name: 'disCountAmount',
      type: 'number',
      title: 'Descount Amount',
      description: 'Amount off in percentage or fixed value',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive',
    },
    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select
      const status = isActive ? 'Active' : 'Inactive'
      return {
        title,
        subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
      }
    },
  },
})
