import { UseFormReturn } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SocialHistoryProps {
  form: UseFormReturn<any>
}

export default function SocialHistory({ form }: SocialHistoryProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="socialHistory.pregnancy"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pregnancy</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Yes
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    No
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="unknown" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Unknown
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.pregnancyTrimester"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pregnancy Trimester (if applicable)</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.diet"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Diet</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Describe any specific dietary habits or restrictions
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.alcoholUse"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Alcohol Use</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Describe frequency and amount of alcohol consumption
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.caffeineIntake"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Caffeine Intake</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Describe frequency and amount of caffeine consumption
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.recreationalDrugUse"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Recreational Drug Use</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Describe any recreational drug use
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.isSmoker"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Smoker</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Yes
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    No
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.smoking"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Smoking (if applicable)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormDescription>
              Number of cigarettes smoked
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.smokingFrequency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Smoking Frequency (if applicable)</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="day">Per Day</SelectItem>
                <SelectItem value="week">Per Week</SelectItem>
                <SelectItem value="month">Per Month</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.physicalActivity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Physical Activity</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Describe frequency and type of physical activity
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="socialHistory.other"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Other Relevant Social History</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Any other relevant social history information
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}