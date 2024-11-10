import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function RedFlags() {
  return (
    <>
      <p className="mb-4 text-sm text-muted-foreground">
        If any of the following red flags are identified, referring the patient
        to another health care provider is strongly recommended
      </p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="newIncontinence" />
          <Label htmlFor="newIncontinence">New incontinence</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="historyNephrolithiasis" />
          <Label htmlFor="historyNephrolithiasis">
            History of nephrolithiasis (kidney stones)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="voidingIssues" />
          <Label htmlFor="voidingIssues">
            Women who have voiding issues (e.g. incontinence, prolapse)
          </Label>
        </div>
        {/* Add more red flags as checkboxes */}
      </div>
    </>
  );
}
