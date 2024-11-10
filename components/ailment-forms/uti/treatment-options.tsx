import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TreatmentOptions() {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Checkbox id="fosfomycin" className="mt-1" />
          <Label htmlFor="fosfomycin" className="leading-none pt-1">
            Fosfomycin
          </Label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="nitrofurantoin" className="mt-1" />
          <Label htmlFor="nitrofurantoin" className="leading-none pt-1">
            Nitrofurantoin
          </Label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="trimethoprim" className="mt-1" />
          <Label htmlFor="trimethoprim" className="leading-none pt-1">
            Trimethoprim
          </Label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="smx-tmp" className="mt-1" />
          <Label htmlFor="smx-tmp" className="leading-none pt-1">
            Sulfamethoxazole/trimethoprim (SMX/TMP also known as co-trimoxazole)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="otherTreatment" className="mt-1" />
          <Label htmlFor="otherTreatment" className="leading-none pt-1">
            Other
          </Label>
          <Input className="w-full mt-1" placeholder="Specify" />
        </div>
      </div>
      <div>
        <Label htmlFor="strength">Strength</Label>
        <Input id="strength" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input id="quantity" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="directions">Directions</Label>
        <Textarea id="directions" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="additionalInstructions">Additional instructions</Label>
        <Textarea id="additionalInstructions" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="rationale">
          Rationale for prescription/recommendations
        </Label>
        <Textarea id="rationale" className="mt-1" />
      </div>
    </div>
  );
}
