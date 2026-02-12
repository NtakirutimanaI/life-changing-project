import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save, Loader2, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { AttendanceStatus, TaskStatus } from '@/lib/types';

export default function AddTrackingPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [nextWeekTasks, setNextWeekTasks] = useState<string[]>(['']);
  const [nextWeekGoals, setNextWeekGoals] = useState<string[]>(['']);
  const [supportNeeded, setSupportNeeded] = useState<string[]>(['']);
  
  const [formData, setFormData] = useState({
    weekEnding: '',
    attendance: '',
    taskGiven: '',
    taskCompletionStatus: '',
    incomeThisWeek: '',
    expensesThisWeek: '',
    currentCapital: '',
    unitsSold: '',
    averagePrice: '',
    bestSellingProduct: '',
    challenges: '',
    solutionsImplemented: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.weekEnding || !formData.attendance) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Weekly tracking submitted successfully!');
      setIsLoading(false);
      navigate('/dashboard/tracking');
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          onClick={() => navigate('/dashboard/tracking')}
          className="rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">New Weekly Tracking Entry</h1>
          <p className="text-muted-foreground">
            Submit your weekly business and attendance report
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
                <Save className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Weekly Tracking Report</CardTitle>
                <CardDescription>
                  Record your weekly business activities and progress
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
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="weekEnding">Week Ending *</Label>
                    <Input
                      id="weekEnding"
                      type="date"
                      value={formData.weekEnding}
                      onChange={(e) => handleChange('weekEnding', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attendance">Attendance *</Label>
                    <Select 
                      value={formData.attendance}
                      onValueChange={(value) => handleChange('attendance', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select attendance status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={AttendanceStatus.PRESENT}>Present</SelectItem>
                        <SelectItem value={AttendanceStatus.ABSENT}>Absent</SelectItem>
                        <SelectItem value={AttendanceStatus.LATE}>Late</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Weekly Tasks
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="taskGiven">Task Given This Week</Label>
                  <Textarea
                    id="taskGiven"
                    placeholder="Describe the task you were given..."
                    rows={3}
                    value={formData.taskGiven}
                    onChange={(e) => handleChange('taskGiven', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taskCompletionStatus">Task Completion Status</Label>
                  <Select 
                    value={formData.taskCompletionStatus}
                    onValueChange={(value) => handleChange('taskCompletionStatus', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select completion status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={TaskStatus.COMPLETED}>Completed</SelectItem>
                      <SelectItem value={TaskStatus.IN_PROGRESS}>In Progress</SelectItem>
                      <SelectItem value={TaskStatus.NOT_DONE}>Not Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Financial Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Financial Information
                </h3>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="incomeThisWeek">Income This Week (RWF)</Label>
                    <Input
                      id="incomeThisWeek"
                      type="number"
                      placeholder="0"
                      min="0"
                      step="0.01"
                      value={formData.incomeThisWeek}
                      onChange={(e) => handleChange('incomeThisWeek', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expensesThisWeek">Expenses This Week (RWF)</Label>
                    <Input
                      id="expensesThisWeek"
                      type="number"
                      placeholder="0"
                      min="0"
                      step="0.01"
                      value={formData.expensesThisWeek}
                      onChange={(e) => handleChange('expensesThisWeek', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentCapital">Current Capital (RWF)</Label>
                    <Input
                      id="currentCapital"
                      type="number"
                      placeholder="0"
                      min="0"
                      step="0.01"
                      value={formData.currentCapital}
                      onChange={(e) => handleChange('currentCapital', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Sales Data */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Sales Information
                </h3>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="unitsSold">Units Sold</Label>
                    <Input
                      id="unitsSold"
                      type="number"
                      placeholder="0"
                      min="0"
                      value={formData.unitsSold}
                      onChange={(e) => handleChange('unitsSold', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="averagePrice">Average Price (RWF)</Label>
                    <Input
                      id="averagePrice"
                      type="number"
                      placeholder="0"
                      min="0"
                      step="0.01"
                      value={formData.averagePrice}
                      onChange={(e) => handleChange('averagePrice', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bestSellingProduct">Best Selling Product</Label>
                    <Input
                      id="bestSellingProduct"
                      placeholder="Product name"
                      value={formData.bestSellingProduct}
                      onChange={(e) => handleChange('bestSellingProduct', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Challenges and Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Challenges & Solutions
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="challenges">Challenges Faced</Label>
                  <Textarea
                    id="challenges"
                    placeholder="Describe any challenges you encountered this week..."
                    rows={4}
                    value={formData.challenges}
                    onChange={(e) => handleChange('challenges', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solutionsImplemented">Solutions Implemented</Label>
                  <Textarea
                    id="solutionsImplemented"
                    placeholder="Describe solutions you tried or implemented..."
                    rows={4}
                    value={formData.solutionsImplemented}
                    onChange={(e) => handleChange('solutionsImplemented', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any other information or observations..."
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                  />
                </div>
              </div>

              {/* Next Week Plan */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Next Week's Plan
                </h3>
                
                {/* Tasks */}
                <div className="space-y-2">
                  <Label>Planned Tasks</Label>
                  {nextWeekTasks.map((task, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Task ${index + 1}`}
                        value={task}
                        onChange={(e) =>
                          updateArrayItem(index, e.target.value, nextWeekTasks, setNextWeekTasks)
                        }
                      />
                      {nextWeekTasks.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeArrayItem(index, nextWeekTasks, setNextWeekTasks)}
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
                    onClick={() => addArrayItem(nextWeekTasks, setNextWeekTasks)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Task
                  </Button>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <Label>Planned Goals</Label>
                  {nextWeekGoals.map((goal, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Goal ${index + 1}`}
                        value={goal}
                        onChange={(e) =>
                          updateArrayItem(index, e.target.value, nextWeekGoals, setNextWeekGoals)
                        }
                      />
                      {nextWeekGoals.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeArrayItem(index, nextWeekGoals, setNextWeekGoals)}
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
                    onClick={() => addArrayItem(nextWeekGoals, setNextWeekGoals)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Goal
                  </Button>
                </div>

                {/* Support Needed */}
                <div className="space-y-2">
                  <Label>Support Needed</Label>
                  {supportNeeded.map((support, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Support ${index + 1}`}
                        value={support}
                        onChange={(e) =>
                          updateArrayItem(index, e.target.value, supportNeeded, setSupportNeeded)
                        }
                      />
                      {supportNeeded.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeArrayItem(index, supportNeeded, setSupportNeeded)}
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
                    onClick={() => addArrayItem(supportNeeded, setSupportNeeded)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Support Item
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard/tracking')}
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Submit Report
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
