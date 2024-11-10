import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function Symptoms() {
  return (
    <div className="space-y-3">
      <div className="flex items-start space-x-2">
        <Checkbox id="dysuria" className="mt-1" />
        <Label htmlFor="dysuria" className="leading-none pt-1">
          Dysuria
        </Label>
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="frequentUrination" className="mt-1" />
        <Label htmlFor="frequentUrination" className="leading-none pt-1">
          Frequent urination
        </Label>
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="suprapubicPain" className="mt-1" />
        <Label htmlFor="suprapubicPain" className="leading-none pt-1">
          Suprapubic pain
        </Label>
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="urinaryUrgency" className="mt-1" />
        <Label htmlFor="urinaryUrgency" className="leading-none pt-1">
          Urinary urgency
        </Label>
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="otherSymptoms" className="mt-1" />
        <Label htmlFor="otherSymptoms" className="leading-none pt-1">
          Other
        </Label>
      </div>
    </div>
  );
}
