import { UseFormReturn } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

interface HealthcareProvidersProps {
  form: UseFormReturn<any>
}

export default function HealthcareProviders({ form }: HealthcareProvidersProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="healthcareProviders.primaryProvider"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Primary Healthcare Provider</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Name, contact information, etc." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="healthcareProviders.otherProviders"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Other Healthcare Providers</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Names, specialties, contact information, etc." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}