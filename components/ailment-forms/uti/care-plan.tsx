import { UseFormReturn } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface CarePlanProps {
  form: UseFormReturn<any>
}

export default function Component({ form }: CarePlanProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="carePlan.therapeuticGoal"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Therapeutic Goal</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="carePlan.monitoringParameters"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Monitoring Parameters (including timeframe)</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="carePlan.conductedBy"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Conducted by</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="carePlan.date"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="carePlan.results"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Results</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="carePlan.followUp"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Follow-up</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="carePlan.additionalComments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional comments and recommendations</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}