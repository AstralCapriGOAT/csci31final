import { redirect } from 'next/navigation'
import { insertCard } from '../utils/supabase-client'
import Button from './Button'
import Field from './Field'
import Label from './Label'
import Input from './Input'

async function createCard(formData) {
  'use server'
  const title = formData.get('title')
  const subtitle = formData.get('subtitle')
  const img = formData.get('img')
  const description = formData.get('description')
  await insertCard(title, subtitle, img, description) // await card is inserted before redirect
  // get each field out of formData
  // call supabase-client insertCard
  redirect.push('/')
}

export default function CardForm() {
  return (
    <form action={createCard} className="p-6 bg-gray-600 rounded-lg mt-4">
      <Field>
        <Label label="title" />
        <Input id="title" name="title" />
      </Field>
      <Field>
        <Label label="subtitle" />
        <Input id="subtitle" name="subtitle" />
      </Field>
      <Field>
        <Label label="img" />
        <Input id="img" name="image" />
      </Field>
      <Field>
        <Label label="description" />
        <Input id="description" name="description" />
      </Field>
      <div className="mt-4 flex justify-end">
        <Button type="submit">Add Card</Button>
      </div>
    </form>
  )
}
