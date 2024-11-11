import { UseFormReturn } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface DifferentialDiagnosisProps {
  form: UseFormReturn<any>
}

export default function DifferentialDiagnosis({ form }: DifferentialDiagnosisProps) {
  return (
    <div className="space-y-6">
      <FormDescription className="text-sm italic">
        The following are possible conditions that may present with similar symptoms to the minor ailment associated with this
        prescribing form. If the pharmacist considers any of these differential diagnoses to be likely, the patient should be referred
        for further investigation.
      </FormDescription>

      <div className="space-y-4">
        <h3 className="font-medium">Complicated urinary tract infection</h3>
        <FormDescription className="text-sm italic">
          Symptoms of uncomplicated UTI plus signs indicative of infection beyond the bladder
        </FormDescription>
        <FormField
          control={form.control}
          name="differentialDiagnosis.systemicSymptoms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Systemic symptoms (e.g. fever, chills, extreme fatigue)</FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <FormDescription className="text-sm italic">
          Symptoms of uncomplicated UTI in patients with special considerations
        </FormDescription>
        {[
          { name: "male", label: "Male" },
          { name: "ageUnder12", label: "Age <12 years" },
          { name: "urologicAbnormalities", label: "Patients with underlying urologic abnormalities (e.g. stents, urinary diversions)" },
          { name: "catheter", label: "Patients with a catheter" },
          { name: "pregnant", label: "Pregnant patient (should be referred for a urine culture)" },
          { name: "renalTransplant", label: "Renal transplant recipients" },
          { name: "diabetes", label: "Patients with diabetes" },
          { name: "immunocompromised", label: "Immunocompromised patients" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-medium">Nephrolithiasis (kidney stones)</h3>
        {[
          { name: "flankPain", label: "Significant flank pain" },
          { name: "hematuria", label: "Hematuria" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Interstitial cystitis (painful bladder syndrome)</h3>
        {[
          { name: "icDysuria", label: "Dysuria" },
          { name: "icFrequentUrination", label: "Frequent urination" },
          { name: "icUrinaryUrgency", label: "Urinary urgency" },
          { name: "icNoInfection", label: "No evidence of infection" },
          { name: "icNoOtherCause", label: "No other identifiable cause" },
          { name: "icChronic", label: "Duration (chronic)" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Vaginitis</h3>
        {[
          { name: "vDysuria", label: "Dysuria" },
          { name: "pruritis", label: "Pruritis" },
          { name: "dyspareunia", label: "Dyspareunia" },
          { name: "vaginalDischarge", label: "Vaginal discharge and/or odour" },
          { name: "noFrequentUrination", label: "No frequent urination" },
          { name: "noUrinaryUrgency", label: "No urinary urgency" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Urethritis</h3>
        <FormDescription className="text-sm italic">More likely in sexually active men</FormDescription>
        {[
          { name: "penileUlcerations", label: "Penile ulcerations" },
          { name: "urethralDischarge", label: "Urethral discharge" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Bacterial prostatitis</h3>
        {[
          { name: "pelvicPerinealPain", label: "Pelvic or perineal pain" },
          { name: "radiatingPain", label: "Pain radiating along the penis" },
          { name: "urinaryHesitancy", label: "Dribbling or urinary hesitancy" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Pelvic inflammatory disease</h3>
        {[
          { name: "lowerAbdominalPain", label: "Lower abdominal/pelvic pain" },
          { name: "pidFever", label: "Fever" },
          { name: "pidDysuria", label: "Dysuria" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Pyelonephritis</h3>
        {[
          { name: "nausea", label: "Nausea and vomiting" },
          { name: "pnFlankPain", label: "Flank pain" },
          { name: "cvaTenderness", label: "Costovertebral angle (CVA) tenderness" },
        ].map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={`differentialDiagnosis.${item.name}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{item.label}</FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="differentialDiagnosis.other"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}