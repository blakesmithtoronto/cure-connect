import { UseFormReturn } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface PatientConsentProps {
  form: UseFormReturn<any>
}

export default function Component({ form }: PatientConsentProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="patientConsent.isPatient"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>I am the patient</FormLabel>
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="patientConsent.isAgent"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>I am an agent of the patient and my relationship to the patient is:</FormLabel>
            </div>
            <Input 
              className="w-40" 
              {...form.register("patientConsent.agentRelationship")}
            />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="patientConsent.receivedAssessment"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>I have received this assessment and been informed of the treatment options available</FormLabel>
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="patientConsent.consentPrescription"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>I consent to receiving the prescription and recommendations made as a result of this assessment</FormLabel>
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="patientConsent.permitNotification"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>I permit the pharmacist to notify other health care providers of this assessment and prescription</FormLabel>
            </div>
          </FormItem>
        )}
      />
      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={form.control}
          name="patientConsent.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="patientConsent.signature"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Signature</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="patientConsent.date"
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
      </div>
    </div>
  )
}