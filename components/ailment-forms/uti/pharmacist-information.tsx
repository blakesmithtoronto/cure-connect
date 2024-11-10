import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PharmacistInformation() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="usedProfessionalJudgement" />
        <Label htmlFor="usedProfessionalJudgement">
          I have used my professional judgement to assess the patient and to
          educate the patient in making an informed decision about their
          treatment
        </Label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="pharmacistName">Name</Label>
          <Input id="pharmacistName" />
        </div>
        <div>
          <Label htmlFor="licenseNumber">License number</Label>
          <Input id="licenseNumber" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="pharmacistSignature">Signature</Label>
          <Input id="pharmacistSignature" />
        </div>
        <div>
          <Label htmlFor="pharmacistDate">Date</Label>
          <Input id="pharmacistDate" type="date" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="pharmacistPhone">Phone</Label>
          <Input id="pharmacistPhone" type="tel" />
        </div>
        <div>
          <Label htmlFor="pharmacistEmail">Email</Label>
          <Input id="pharmacistEmail" type="email" />
        </div>
        <div>
          <Label htmlFor="pharmacistFax">Fax</Label>
          <Input id="pharmacistFax" type="tel" />
        </div>
      </div>
      <div>
        <Label htmlFor="pharmacyAddress">Pharmacy address</Label>
        <Textarea id="pharmacyAddress" />
      </div>
    </div>
  );
}
