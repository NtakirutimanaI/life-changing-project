import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Target, Loader2, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { GoalType, GoalStatus } from '@/lib/types';

interface Milestone {
  description: string;
  targetAmount: string;
  targetDate: string;
}

export default function AddGoalPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [milestones, setMilestones] = useState<Milestone[]>([
    { description: '', targetAmount: '', targetDate: '' }
  ]);
  const [actionPlanSteps, setActionPlanSteps] = useState<string[]>(['']);
  const [resourcesNeeded, setResourcesNeeded] = useState<string[]>(['']);
  
  const [formData, setFormData] = useState({
    description: '',
    type: '',
    targetAmount: '',
    targetDate: '',
    notes: '',
    timeline: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.description || !formData.type || !formData.targetAmount || !formData.targetDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Goal created successfully!');
      setIsLoading(false);
      navigate('/dashboard/goals');
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addMilestone = () => {
    setMilestones([...milestones, { description: '', targetAmount: '', targetDate: '' }]);
  };

  const updateMilestone = (index: number, field: keyof Milestone, value: string) => {
    const newMilestones = [...milestones];
    newMilestones[index][field] = value;
    setMilestones(newMilestones);
  };

  const removeMilestone = (index: number) => {
    const newMilestones = milestones.filter((_, i) => i !== index);
    setMilestones(newMilestones.length === 0 ? [{ description: '', targetAmount: '', targetDate: '' }] : newMilestones);
  };

  const addArrayItem = (
    items: string[],
    setItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setItems([...items, '']);
  };

  const updateArrayItem = (
    index: number,
    value: string,
    items: string[],
    setItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const removeArrayItem = (
    index: number,
    items: string[],
    setItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems.length === 0 ? [''] : newItems);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/dashboard/goals')}
          className="rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Create New Goal</h1>
          <p className="text-muted-foreground">
            Set a new goal to track your progress and stay motivated
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="max-w-4xl border-2 border-[#4c9789]/20">
          <CardHeader className="bg-gradient-to-br from-[#4c9789]/5 to-[#eacfa2]/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#4c9789] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Goal Information</CardTitle>
                <CardDescription>
                  Define your goal and create a plan to achieve it
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Basic Information
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Goal Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your goal in detail..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="type">Goal Type *</Label>
                    <Select 
                      value={formData.type}
                      onValueChange={(value) => handleChange('type', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select goal type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={GoalType.FINANCIAL}>Financial</SelectItem>
                        <SelectItem value={GoalType.BUSINESS}>Business</SelectItem>
                        <SelectItem value={GoalType.EDUCATION}>Education</SelectItem>
                        <SelectItem value={GoalType.PERSONAL}>Personal</SelectItem>
                        <SelectItem value={GoalType.SKILLS}>Skills</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetAmount">Target Amount (RWF) *</Label>
                    <Input
                      id="targetAmount"
                      type="number"
                      placeholder="100000"
                      min="0"
                      step="0.01"
                      value={formData.targetAmount}
                      onChange={(e) => handleChange('targetAmount', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetDate">Target Date *</Label>
                  <Input
                    id="targetDate"
                    type="date"
                    value={formData.targetDate}
                    onChange={(e) => handleChange('targetDate', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Milestones (Optional)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Break down your goal into smaller, achievable milestones
                </p>
                
                {milestones.map((milestone, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label>Milestone {index + 1}</Label>
                          {milestones.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeMilestone(index)}
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`milestone-desc-${index}`}>Description</Label>
                          <Input
                            id={`milestone-desc-${index}`}
                            placeholder="Milestone description"
                            value={milestone.description}
                            onChange={(e) =>
                              updateMilestone(index, 'description', e.target.value)
                            }
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor={`milestone-amount-${index}`}>
                              Target Amount (RWF)
                            </Label>
                            <Input
                              id={`milestone-amount-${index}`}
                              type="number"
                              placeholder="0"
                              min="0"
                              step="0.01"
                              value={milestone.targetAmount}
                              onChange={(e) =>
                                updateMilestone(index, 'targetAmount', e.target.value)
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`milestone-date-${index}`}>
                              Target Date
                            </Label>
                            <Input
                              id={`milestone-date-${index}`}
                              type="date"
                              value={milestone.targetDate}
                              onChange={(e) =>
                                updateMilestone(index, 'targetDate', e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addMilestone}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Milestone
                </Button>
              </div>

              {/* Action Plan */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Action Plan (Optional)
                </h3>
                
                {/* Steps */}
                <div className="space-y-2">
                  <Label>Action Steps</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    List the steps you'll take to achieve this goal
                  </p>
                  {actionPlanSteps.map((step, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Step ${index + 1}`}
                        value={step}
                        onChange={(e) =>
                          updateArrayItem(index, e.target.value, actionPlanSteps, setActionPlanSteps)
                        }
                      />
                      {actionPlanSteps.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeArrayItem(index, actionPlanSteps, setActionPlanSteps)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem(actionPlanSteps, setActionPlanSteps)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Step
                  </Button>
                </div>

                {/* Resources Needed */}
                <div className="space-y-2">
                  <Label>Resources Needed</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    What resources will you need to achieve this goal?
                  </p>
                  {resourcesNeeded.map((resource, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Resource ${index + 1}`}
                        value={resource}
                        onChange={(e) =>
                          updateArrayItem(index, e.target.value, resourcesNeeded, setResourcesNeeded)
                        }
                      />
                      {resourcesNeeded.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeArrayItem(index, resourcesNeeded, setResourcesNeeded)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem(resourcesNeeded, setResourcesNeeded)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Resource
                  </Button>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline / Schedule</Label>
                  <Textarea
                    id="timeline"
                    placeholder="Describe your timeline for achieving this goal..."
                    rows={3}
                    value={formData.timeline}
                    onChange={(e) => handleChange('timeline', e.target.value)}
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Additional Information
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional notes or information about this goal..."
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard/goals')}
                  className="flex-1"
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#4c9789] hover:bg-[#3d7a6e]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Target className="mr-2 h-4 w-4" />
                      Create Goal
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
