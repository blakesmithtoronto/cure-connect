import { UseFormReturn } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

interface DisclaimerProps {
  form: UseFormReturn<any>
}

export default function Disclaimer({ form }: DisclaimerProps) {
  return (
    <div className="space-y-6">
      <FormDescription>
        This form is intended for use by pharmacists in the assessment and treatment of uncomplicated urinary tract infections.
        Please read and acknowledge the following statements before proceeding.
      </FormDescription>

      <FormField
        control={form.control}
        name="disclaimer.understand"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I understand that this form is for uncomplicated urinary tract infections only.
              </FormLabel>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="disclaimer.referComplex"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I agree to refer patients with complex or severe symptoms to a physician or emergency department.
              </FormLabel>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="disclaimer.followGuidelines"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I will follow all applicable guidelines and regulations in assessing and treating patients.
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  )
}